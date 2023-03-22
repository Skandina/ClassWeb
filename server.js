const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '../public')
const port = 8000

app.use(express.static(publicPath))
app.use("/public/css", express.static(__dirname + '/public/css'));
app.use("/public", express.static(__dirname +'/public'));

app.get(["/", "/index.html"], (req, res) => {
	res.sendFile(__dirname + 'public/index.html');
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`)
});
