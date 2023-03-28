const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
	host  : '13.49.212.192',
	user : 'kuser',
	password : 'sejhkweb',
	database : 'members',
});

db.connect(function(err, results){
	if(!err) {
		console.log("The database is connected..")
	} else {
		console.log("An error is occured")
		console.log(results)
	}
});



db.query('SELECT * FROM member_table', (error,rows,fields) => {
	if(error) throw error;
	console.log('User info is : ', rows);
});
 

