
const mysql = require('mysql');

const db = mysql.createConnection({
    host: '166.62.28.102',
    user: 'dating_user',
    password: 'dating_user@123',
    database: 'dating_db'
});


db.connect((err) => {
    if (!err)
        console.log('Connection Established Successfully');
    else if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
        console.log("PROTOCOL_CONNECTION_LOST");
        // throw err;
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
    }
    else {
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
    }

});

module.exports = db;