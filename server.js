var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));


app.use("/js", express.static(__dirname + '/js'));
app.use("/public", express.static(__dirname +'/public'));

app.get(["/", "/index.html"], (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

// connection configurations
var dbConn = mysql.createConnection({
host: '13.49.31.59',
user: 'kuser',
password: 'sejhkweb',
database: 'members'
});

dbConn.connect(); 

// get all members
app.get('/member', function (req, res) {
dbConn.query('SELECT * FROM member_table', function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'members list.' });
});
});

// add a member
app.post('/signup', function (req, res) {
let username = req.body.username;
let pw = req.body.pw;
let pw_confirm = req.body.pw_confirm;
let email = req.body.email;
if (!username) {
return res.status(400).send({ error:true, message: 'Please provide user' });
}
dbConn.query("INSERT INTO member_table SET ? ", { username: username, pw:pw, pw_confirm:pw_confirm, email:email }, function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
});
});

// delete a member
app.delete('/member', function (req, res) {
let id = req.body.id;
if (!id) {
return res.status(400).send({ error: true, message: 'Please provide id' });
}
dbConn.query('DELETE FROM member_table  WHERE id = ?', [id], function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
});
});

// getting text data 
app.get('/text', function (req, res) {
	dbConn.query('SELECT * FROM data_text', function (error, results, fields) {
if (error) throw error;
return res.send(results);
});
});

// getting text data by id 
app.get('/textbyid', function (req, res) {
let id = req.body.id;
	dbConn.query('SELECT contents FROM data_text WHERE id=?', [id], function (error, results, fields) {
if (error) throw error;
return res.send(results);
});
});


// adding text data 
app.post('/text', function (req, res) {
let title = req.body.title;
let contents = req.body.contents;
if (!title) {y
return res.status(400).send({ error:true, message: 'Please provide title' });
}
dbConn.query("INSERT INTO data_text SET ? ", { title: title, contents:contents }, function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'Text data is saved successfully.' });
});
});


// delete text 
app.delete('/text', function (req, res) {
let id = req.body.id;
if (!id) {
return res.status(400).send({ error: true, message: 'Please provide id' });
}
dbConn.query('DELETE FROM data_text WHERE id = ?', [id], function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'Text data has been deleted successfully.' });
});
});



// getting image data
app.get('/img', function (req, res) {
	dbConn.query('SELECT id, img_title, convert(img_contents USING utf8) FROM images', function (error, results, fields) {
if (error) throw error;
return res.send(results);
});
});

// getting image data by id
app.get('/imgbyid', function (req, res) {
let id = req.body.id;
	dbConn.query('SELECT convert(img_contents USING utf8) FROM images WHERE id=?', [id], function (error, results, fields) {
if (error) throw error;
return res.send(results);
});
});


// adding img data 
app.post('/img', function (req, res) {
let img_title = req.body.img_title;
let img_contents = req.body.img_contents;
if (!img_title) {
return res.status(400).send({ error:true, message: 'Please provide title' });
}
dbConn.query("INSERT INTO images SET ? ", { img_title: img_title, img_contents: img_contents }, function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'Image data is saved successfully.' });
});
});

// delete an image
app.delete('/img', function (req, res) {
let id = req.body.id;
if (!id) {
return res.status(400).send({ error: true, message: 'Please provide id' });
}
dbConn.query('DELETE FROM images WHERE id = ?', [id], function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'Text data has been deleted successfully.' });
});
});




app.listen(8000, function () {
console.log('Node app is running on port 8000');
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

