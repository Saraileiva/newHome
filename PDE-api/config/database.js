const mysql = require("promise-mysql");
const debug = require("debug")("app:mysql")

require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    connectionLimit: 5
});

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};
