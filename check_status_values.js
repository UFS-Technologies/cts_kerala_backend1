const mysql = require("mysql2");
require('dotenv').config({ path: 'c:/Users/AKSHARA T K/OneDrive/Desktop/UFS/cts_new/cts_kerala_backend1/.env' });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

function query(sql, args = []) {
  return new Promise((resolve, reject) => {
    connection.query(sql, args, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

async function main() {
  try {
    const results = await query("SELECT Certificate_Status, COUNT(*) AS count FROM student_course GROUP BY Certificate_Status");
    console.log("Certificate_Status counts:");
    console.log(results);
  } catch (err) {
    console.error(err);
  } finally {
    connection.end();
  }
}

main();
