const db = require('./dbconnection');
db.promise().query('SHOW CREATE PROCEDURE Get_Menu_Permission').then(r => {
    console.log(r[0][0]['Create Procedure']);
    process.exit(0);
}).catch(err => {
    console.error(err);
    process.exit(1);
});
