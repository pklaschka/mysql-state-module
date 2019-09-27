module.exports = {
    createConnection: async (config) => {
        if (config && config.host === 'localhost' && config.user === 'user' && config.password === 'password') {
            return {
                execute: async () => {
                    const queryResult = { a: 'hello', b: 'YES', c: 'NO', d: 'ON', e: 'OFF', f: '010', g: '0x10' };
                    let returnArray = [];
                    for (let key in queryResult) {
                        returnArray.push({ Variable_name: key, Value: queryResult[key] });
                    }
                    return [returnArray, null];
                }
            };
        } else
            throw new Error('Could not connect to mysql.');
    }
};