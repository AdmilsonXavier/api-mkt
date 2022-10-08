const pgp = require('pg-promise')();
const db = pgp({
	user: 'user-mkt',
	password: 'user-mkt',
	host: 'localhost',
	port: 5432,
	database: 'mkt'
});

module.exports = db;