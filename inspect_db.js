const db = require('./dbconnection');

function query(sql, args = []) {
  return new Promise((resolve, reject) => {
    db.query(sql, args, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}

async function main() {
  try {
    const sp = await query("SHOW CREATE PROCEDURE Get_Course_Part_Mark");
    console.log("STORED PROCEDURE Get_Course_Part_Mark:\n", sp[0]['Create Procedure']);
  } catch (err) {
    console.error("Error inspecting database:", err);
  } finally {
    db.end();
  }
}

main();
