const mysql = require('mysql2/promise');
/**
 * A module for the server-state system
 * @returns A JSON-serializable (via `JSON.stringify()`) version information about the server state
 */
module.exports = async function(config) {
    try {
        const conn = await mysql.createConnection(config);
        const [rows, fields] = await conn.execute('SHOW status;');

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
