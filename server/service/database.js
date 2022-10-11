require('dotenv').config();
var mysql = require('mysql');

/**
 * Databasse connection.
 */
let connection = mysql.createConnection({
    host:process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
    port:process.env.port
  });  
  
    connection.connect(function(err) { 
      if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
      }
      console.log('Connected as thread id: ' + connection.threadId);
    });

 module.exports=connection;