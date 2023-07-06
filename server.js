#!/usr/bin/node

const { dbConn } = require("./mysql_config");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const cors = require("cors");

// Monitoring logs
const AWS = require("aws-sdk");
// AWS.config.update({ region: 'eu-north-1' });
// console.log("This is before the function has been created");
// console.log = function(message) {
// 	const cloudwatchlogs = new AWS.CloudWatchLogs();
// 	const params = {
// 		logGroupName: 'test.log',
// 		logStreamName: 'test.log',
// 		logEvents: [
// 			{
// 				message: message,
// 				timestamp: new Date().getTime()
// 			}
// 		]
// 	};

// 	cloudwatchlogs.putLogEvents(params, function(err, data) {
// 		if (err) console.error(err, err.stack);
// //		else console.log('Logged to cloudWatch Logs');
// 	});

// };

app.listen(8000, function () {
  console.log("Node app is running on port 8000");
});

// Json Web Token
const jwt = require("jsonwebtoken");
const { auth } = require("./routes/auth.js");
const config = require("./config.js");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// view engine을 ejs로 설정, 경로 설정
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.engine("html", require("ejs").renderFile);

app.use("/src", express.static(__dirname + "/src"));
app.use("/public", express.static(__dirname + "/public"));

app.use("/", routes);
app.use(cors({ origin: true, credentials: true }));

let isLogin = false;
app.get(["/", "/index"], (req, res) => {
  console.log(
    "req: -----------------------------------------------------------",
    req
  );
  console.log(
    "Cookies: ----------------------------------------------------",
    req.cookies
  );
  const cookies = (req.headers.cookie || "").split("; ");
  const access_Token = cookies
    .filter((cookie) => cookie.includes("accessToken"))
    .map((cookie) => cookie.split("=")[1]);
  const username = req.body.username;
  // console.log(username);
  if (access_Token.length === 0) {
    // isLogin = false;
    console.log("req(if): ", req);
    console.log("Cookies(if): ", req.cookies);
    res.render("login", { isLogin: isLogin });
  } else {
    isLogin = true;
    res.render("index", { username: username, isLogin: isLogin });
  }
});

dbConn.connect(function (err) {
  console.log("[mysql error]", err);
});

//get all members
app.get("/member", function (req, res) {
  dbConn.query("SELECT * FROM member_table", function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "members list." });
  });
});
// get all glogin_members
app.get("/member/glogin", function (req, res) {
  dbConn.query("SELECT * FROM glogin_table", function (error, results, fields) {
    if (error) throw error;
    return res.send({
      error: false,
      data: results,
      message: "glogin_members list.",
    });
  });
});

// verify accessToken
app.get("/auth/token", auth, (req, res) => {
  const email = req.decoded.email;
  // const pw = req.decoded.pw;
  return res.status(200).json({
    code: 200,
    message: "토큰이 정상입니다.",
    data: {
      email: email,
      // pw: pw,
    },
  });
});

// google account member
app.post("/glogin", function (req, res) {
  let username = req.body.username;
  let email = req.body.email;

  if (email && username) {
    dbConn.query(
      "SELECT * FROM glogin_table WHERE email = ? AND username = ?",
      [email, username],
      async function (error, results, fields) {
        const accessToken = await new Promise((resolve, reject) => {
          jwt.sign(
            {
              email: email,
              username: username,
            },
            config.ACCESS_TOKEN_KEY,
            { expiresIn: "30m" },
            (err, token) => {
              if (err) {
                reject(err);
              } else {
                resolve(token);
              }
            }
          );
        });
        if (error) throw error;
        if (results.length > 0) {
          console.log("results", results);
          try {
            res.cookie("google_email", email, {
              expires: new Date(Date.now() + 900000),
              httpOnly: true,
            });
            res.cookie("accessToken", accessToken, {
              domain: "13.49.31.59",
              path: "/",
              httpOnly: true,
              secure: true,
              sameSite: "none",
            });
            res.status(200).json({
              code: 200,
              success: true,
              accessToken: accessToken,
            });
          } catch (err) {
            res
              .status(401)
              .json({ success: false, errormessage: "token sign fail" });
          }
        } else {
          dbConn.query(
            "INSERT INTO glogin_table SET ? ",
            {
              username: username,
              email: email,
            },
            async function (error, results, fields) {
              if (error) throw error;
              res.cookie("google_email", email, {
                expires: new Date(Date.now() + 900000),
                httpOnly: true,
              });
              res.cookie("accessToken", accessToken, {
                domain: "13.49.31.59",
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "none",
                overwrite: true,
              });
              res.status(200).json({
                code: 200,
                success: true,
                accessToken: accessToken,
              });
            }
          );
        }
      }
    );
  } else {
    res.status(401).json({
      success: false,
      errormessage: "email and username are not identical",
    });
  }
});

// login process
app.post("/login_process", async function (req, res) {
  let email = req.body.email;
  let pw = req.body.pw;
  if (email && pw) {
    dbConn.query(
      "SELECT * FROM member_table WHERE email = ? AND pw = ?",
      [email, pw],
      async function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          //		   req.session.is_logined = true;
          //		   req.session.nickname = username;
          //		   req.session.save(function () {
          // res.send({ results, message: "you are loginned" });

          try {
            const accessToken = await new Promise((resolve, reject) => {
              jwt.sign(
                {
                  email: email,
                  pw: pw,
                },
                config.ACCESS_TOKEN_KEY,
                { expiresIn: "30m" },
                (err, token) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(token);
                  }
                }
              );
            });
            res.cookie("accessToken", accessToken, {
              domain: "13.49.31.59:8000",
              path: "/login_process",
              httpOnly: true,
              secure: true,
              //            sameSite: "none",
              overwrite: true,
            });
            res.status(200).json({
              code: 200,
              success: true,
              accessToken: accessToken,
            });
          } catch (err) {
            res
              .status(401)
              .json({ success: false, errormessage: "token sign fail" });
          }
          //		   });
        } else {
          // res.send({
          //   error: false,
          //   data: results,
          //   message: "Login information is not correct",
          // });
          res.status(401).json({
            success: false,
            errormessage: "email and password are not identical",
          });
        }
      }
    );
  } else {
    // res.send({ error: false, message: "Please insert username and password" });
    res.status(401).json({
      success: false,
      errormessage: "email and password are not identical",
    });
  }
});

// logout
app.get("/logout", (req, res) => {
  isLogin = false;
  res.clearCookie("accessToken", {
    domain: "13.49.31.59",
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "none",
    overwrite: true,
  });
  res.end();
});

// add a member
app.post("/signup", function (req, res) {
  let username = req.body.username;
  let pw = req.body.pw;
  let pw_confirm = req.body.pw_confirm;
  let email = req.body.email;
  if (!username) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide user" });
  }
  dbConn.query(
    "INSERT INTO member_table SET ? ",
    { username: username, pw: pw, pw_confirm: pw_confirm, email: email },
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "New user has been created successfully.",
      });
    }
  );
});

// delete a member
app.delete("/member", function (req, res) {
  let id = req.body.id;
  if (!id) {
    return res.status(400).send({ error: true, message: "Please provide id" });
  }
  dbConn.query(
    "DELETE FROM member_table  WHERE id = ?",
    [id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "User has been updated successfully.",
      });
    }
  );
});

// getting text data
app.get("/text", function (req, res) {
  dbConn.query("SELECT * FROM data_text", function (error, results, fields) {
    if (error) throw error;
    return res.send(results);
  });
});

// getting text data by id
app.get("/textbyid", function (req, res) {
  let id = req.body.id;
  dbConn.query(
    "SELECT contents FROM data_text WHERE id=?",
    [id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

// adding text data
app.post("/text", function (req, res) {
  let title = req.body.title;
  let student_level = req.body.student_level;
  let contents = req.body.contents;
  let img_name = req.body.img_name;
  //let published_date
  if (!title) {
    // y;
    return res
      .status(400)
      .send({ error: true, message: "Please provide title" });
  }
  dbConn.query(
    "INSERT INTO data_text SET ? ",
    {
      title: title,
      student_level: student_level,
      contents: contents,
      img_name: img_name,
    },
    function (error, results, fields) {
      if (error) throw error;
      return res.status(200).json({
        code: 200,
        success: true,
        data: results,
        message: "Text data is saved successfully.",
      });
    }
  );
});

// delete text
app.delete("/text", function (req, res) {
  let id = req.body.id;
  if (!id) {
    return res.status(400).send({ error: true, message: "Please provide id" });
  }
  dbConn.query(
    "DELETE FROM data_text WHERE id = ?",
    [id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "Text data has been deleted successfully.",
      });
    }
  );
});
