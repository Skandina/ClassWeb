var mysql = require('mysql');

var dbConn = mysql.createConnection({
  connectTimeout : 100000,
  host: "13.49.31.59",
  user: "kuser",
  password: "sejhkweb",
  database: "kweb",
  port: 13306
});

module.exports = { dbConn : dbConn };



