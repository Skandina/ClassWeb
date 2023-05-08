var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

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

let isLogin = false;
app.get(["/", "/index"], (req, res) => {
  const cookies = req.headers.cookie.split("; ");
  const access_Token = cookies
    .filter((cookie) => cookie.includes("accessToken"))
    .map((cookie) => cookie.split("=")[1]);
  const username = req.body.username;
  // console.log(username);
  if (access_Token.length === 0) {
    // isLogin = false;
    res.render("login", { isLogin: isLogin });
  } else {
    isLogin = true;
    res.render("index", { username: username, isLogin: isLogin });
  }
});

// connection configurations
var dbConn = mysql.createConnection({
  host: "13.49.31.59",
  user: "kuser",
  password: "sejhkweb",
  database: "members",
});

dbConn.connect();

// get all members
app.get("/member", function (req, res) {
  dbConn.query("SELECT * FROM member_table", function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: "members list." });
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
  let pw = req.body.pw;
  let pw_confirm = req.body.pw_confirm;

  console.log("req.body", req.body);
  if (email && username) {
    dbConn.query(
      "SELECT * FROM member_table WHERE email = ? AND username = ?",
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
          try {
            res.cookie("google_email", email, {
              expires: new Date(Date.now() + 900000),
              httpOnly: true,
            });
            res.cookie("accessToken", accessToken, {
              domain: "localhost",
              path: "/",
              httpOnly: true,
              secure: true,
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
            "INSERT INTO member_table SET ? ",
            {
              username: username,
              pw: pw,
              pw_confirm: pw_confirm,
              email: email,
            },
            async function (error, results, fields) {
              if (error) throw error;
              res.cookie("google_email", email, {
                expires: new Date(Date.now() + 900000),
                httpOnly: true,
              });
              res.cookie("accessToken", accessToken, {
                domain: "localhost",
                path: "/",
                httpOnly: true,
                secure: true,
                overwrite: true,
              });
              res.status(200).json({
                code: 200,
                success: true,
                accessToken: accessToken,
              });
              // res.send({
              //   error: false,
              //   data: results,
              //   message: "New google account memeber created",
              // });
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
            // res.cookie("email", email, {
            //   expires: 1,
            //   httpOnly: true,
            // });
            res.cookie("accessToken", accessToken, {
              domain: "localhost",
              path: "/",
              httpOnly: true,
              secure: true,
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
  console.log(res.cookie);
  res.clearCookie("accessToken", {
    domain: "localhost",
    path: "/",
    httpOnly: true,
    secure: true,
    overwrite: true,
  });
  // return res.redirect("/");
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
  let contents = req.body.contents;
  if (!title) {
    y;
    return res
      .status(400)
      .send({ error: true, message: "Please provide title" });
  }
  dbConn.query(
    "INSERT INTO data_text SET ? ",
    { title: title, contents: contents },
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
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

// getting image data
app.get("/img", function (req, res) {
  dbConn.query(
    "SELECT id, img_title, convert(img_contents USING utf8) FROM images",
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

// getting image data by id
app.get("/imgbyid", function (req, res) {
  let id = req.body.id;
  dbConn.query(
    "SELECT convert(img_contents USING utf8) FROM images WHERE id=?",
    [id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send(results);
    }
  );
});

// adding img data
app.post("/img", function (req, res) {
  let img_title = req.body.img_title;
  let img_contents = req.body.img_contents;
  if (!img_title) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide title" });
  }
  dbConn.query(
    "INSERT INTO images SET ? ",
    { img_title: img_title, img_contents: img_contents },
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "Image data is saved successfully.",
      });
    }
  );
});

// delete an image
app.delete("/img", function (req, res) {
  let id = req.body.id;
  if (!id) {
    return res.status(400).send({ error: true, message: "Please provide id" });
  }
  dbConn.query(
    "DELETE FROM images WHERE id = ?",
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

app.listen(8000, function () {
  console.log("Node app is running on port 8000");
});

//  Update user with id
//app.put('/user', function (req, res) {
//let user_id = req.body.user_id;
//let user = req.body.user;
//if (!user_id || !user) {
//return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
//}
//dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
//if (error) throw error;
//return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
//});
//});
