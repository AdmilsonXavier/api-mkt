const pgp = require('pg-promise')();
const db = pgp({
	user: '<seu-usuario>',
	password: '<sua-senha>',
	host: 'localhost',
	port: 5432,
	database: 'mkt'
});

module.exports = db;