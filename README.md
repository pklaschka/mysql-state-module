# mysql-state-module

[![Build Status](https://travis-ci.com/server-state/mysql-state-module.svg?branch=master)](https://travis-ci.com/server-state/mysql-state-module)
![GitHub](https://img.shields.io/github/license/server-state/mysql-state-module)
[![npm version](https://badge.fury.io/js/%40server-state%2Fmysql-state-module.svg)](https://badge.fury.io/js/%40server-state%2Fmysql-state-module)
[![Coverage Status](https://coveralls.io/repos/github/server-state/mysql-state-module/badge.svg?branch=master)](https://coveralls.io/github/server-state/mysql-state-module?branch=master)
![module type: official](https://img.shields.io/badge/module%20type-official-%23015ba0)

A module for querying the state of a MySQL server. Its response will be a
key-value-pair object of the results of

```sql
SHOW status;
```

Numeric values will get represented as numbers, `'YES'` and `'ON'` as `true`,
`'NO'` and `'OFF'` as `false` and everything else as its raw stirng.

### Example
To use the module, you'll need to pass a configuartion object containing the connect information to the [*SMF*](https://github.com/server-state/specs/blob/master/terminology/server-module-function.md).

Since the module uses `mysql2`, which is *mostly API-compatible with `mysqljs/mysql`*, you may refer to https://github.com/mysqljs/mysql#connection-options for specifications. In most cases, though, you'll need to pass a `host`, a `user`, a `password` and possibly a `port`:

```js
serverState.registerModule('mysql-state', require('@server-state/mysql-state-module'), {
	host: 'localhost',
	user: 'my-username',
	password: 'somePassword'
});
```

This official module belongs to the organization [server-state](https://github.com/server-state).
