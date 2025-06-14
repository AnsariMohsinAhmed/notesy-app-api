require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const sslCert = path.resolve(process.env.PRODUCTION_DB_SSL_CERT_PATH);

const pool = mysql.createPool({
    host        : process.env.PRODUCTION_DB_HOST,
    user        : process.env.PRODUCTION_DB_USER,
    password    : process.env.PRODUCTION_DB_PASSWORD,
    database    : process.env.PRODUCTION_DB_NAME,
    port        : process.env.PRODUCTION_DB_PORT,
    ssl: {
        ca: fs.readFileSync(sslCert), // for deployed connection logic
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

