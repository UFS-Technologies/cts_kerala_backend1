const db = require('./dbconnection');
db.query('SHOW CREATE PROCEDURE Get_Menu_Permission_Agent', (err, res) => {
    if (err) console.error(err);
    else console.log(res[0]['Create Procedure']);
    process.exit(0);
});
