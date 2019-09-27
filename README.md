# mysql-state-module

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
	password: 'somePassord'
});
```

This official module belongs to the organization [server-state](https://github.com/server-state).
