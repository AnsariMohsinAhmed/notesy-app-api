require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host        : process.env.LOCALHOST_DB_HOST,
    user        : process.env.LOCALHOST_DB_USER,
    password    : process.env.LOCALHOST_DB_PASSWORD,
    database    : process.env.LOCALHOST_DB_NAME
});

const testConnection = async() => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to locahost notesy_db!!!');
        connection.release();
    } catch (err) {
        console.log('connection failed :- ', err);
    }
};

testConnection();

module.exports = pool;

