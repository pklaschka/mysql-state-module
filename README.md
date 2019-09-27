# mysql-state-module

A module for querying the state of a MySQL server. Its response will be a
key-value-pair object of the results of

```sql
SHOW status;
```

Numeric values will get represented as numbers, `'YES'` and `'ON'` as `true`,
`'NO'` and `'OFF'` as `false` and everything else as its raw stirng.

This official module belongs to the organization [server-state](https://github.com/server-state).
