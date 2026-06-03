const db = require('./dbconnection');
db.query("SHOW CREATE PROCEDURE Agent_Login", (err, res) => {
    if(err) console.error(err);
    else console.log(res[0]['Create Procedure']);
    
    db.query("SELECT * FROM agent limit 5;", (err2, res2) => {
        if(err2) console.error(err2);
        else console.log('Agents:', res2);
        process.exit(0);
    });
});
