let mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs290_weemsj',
    password        : '8924',
    database        : 'cs290_weemsj'
});

module.exports.pool = pool;