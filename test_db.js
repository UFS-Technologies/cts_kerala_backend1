const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'cts_db',
  multipleStatements: true
});

connection.connect();
connection.query('CALL Get_Student_Details(18)', function (error, results, fields) {
  if (error) throw error;
  console.log('Get_Student_Details(18) length:', results.length);
  for(let i=0; i<results.length - 1; i++) {
    console.log(Table :, results[i]);
  }
  process.exit();
});
