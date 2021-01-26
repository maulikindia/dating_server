
/* mysql db connection 
const mysql = require('mysql');

const db = mysql.createConnection({
    host: '123.201.115.108',
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
*/

let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dating_user:mj123bhalala007@cluster0.ubl45.mongodb.net/dating_db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then((db) => {
    console.log('db connection sucessfuly;');
}).catch((err) => {
    console.log('db connection error');
    throw err;
})