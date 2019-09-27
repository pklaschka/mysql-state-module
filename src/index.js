const mysql = require('mysql2/promise');
/**
 * A module for the server-state system
 * 
 * This module gathers information available by running `SHOW status;` in a MySQL 
 * or MariaDB database.
 * @param {object} conifg The connection config. This is the config that gets 
 * passed to mysql2 which is mostly compatible with mysqljs/mysql, therefore cf. 
 * https://github.com/mysqljs/mysql#connection-options
 * @returns A JSON-serializable (via `JSON.stringify()`) 
 * version information about the server state
 */
module.exports = async function(config) {
    try {
        const conn = await mysql.createConnection(config);
        const [rows] = await conn.execute('SHOW status;');

        let returnObject = {};
        for (const row of rows) {
            const lcValue = row.Value.toLowerCase();

            if (lcValue === 'yes' || lcValue === 'on')
                row.Value = true;
            else if (lcValue === 'no' || lcValue === 'off')
                row.Value = false;
            else if (!isNaN(lcValue))
                row.Value = +lcValue;

            returnObject[row.Variable_name] = row.Value;
        }
        return returnObject;
    } catch(e) {
        throw new Error('An error occured while querying the database: ' + e.message);
    }
};
