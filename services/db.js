const mysql = require("mysql2/promise"),
config = require("../config")

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db),
    [results, ] = await connection.execute(sql, params);

    return results;
}

module.exports = {query}