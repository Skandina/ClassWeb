const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql2/promise');
const cors = require('cors'); 
const pool = mysql.createPool({
	host: '13.49.212.192',
	port: '3306',
	user: 'kuser',
	password: 'sejhkweb',
	database: 'members'
});


app.use(cors());
app.use("/js", express.static(__dirname + '/js'));
app.use("/public", express.static(__dirname +'/public'));

app.get(["/", "/index.html"], (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});


const getConn = async() => {
	return await pool.getConnection(async (conn) => conn);
};

app.get('/test', async (req,res) => {
	const conn = await getConn();
	const query = 'SELECT * FROM member_table';
	let [rows, fields] = await conn.query(query, []);
	conn.release();

	res.send(rows);
});

app.listen('8000', () => {
	console.log('Server started');
});

