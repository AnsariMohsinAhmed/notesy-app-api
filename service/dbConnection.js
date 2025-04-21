require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');

const pool = mysql.createPool({
    host        : process.env.PRODUCTION_DB_HOST,
    user        : process.env.PRODUCTION_DB_USER,
    password    : process.env.PRODUCTION_DB_PASSWORD,
    database    : process.env.PRODUCTION_DB_NAME,
    port        : process.env.PRODUCTION_DB_PORT,
    ssl: {
        ca: fs.readFileSync(process.env.RENDER_DB_SSL_CERT_PATH),
        rejectUnauthorized: true
    }
});

const testConnection = async() => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to production db!!!');
        connection.release();
    } catch (err) {
        console.log('connection failed :- ', err);
    }
};

testConnection();

module.exports = pool;

