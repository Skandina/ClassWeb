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
host: '13.49.212.192',
user: 'kuser',
password: 'sejhkweb',
database: 'members'
});
// connect to database
dbConn.connect(); 

//get all member's information
app.get('/member', function (req, res) {
dbConn.query('SELECT * FROM member_table', function (error, results, fields) {
if (error) throw error;
return res.send({ error: false, data: results, message: 'members list.' });
});
});

//add a member
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

app.get('/test_data', function (req, res) {
	dbConn.query('SELECT contents FROM data_text WHERE id=1', function (error, results, fields) {
if (error) throw error;
return res.send(results);
});
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

//  Delete user
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
app.listen(8000, function () {
console.log('Node app is running on port 8000');
});
