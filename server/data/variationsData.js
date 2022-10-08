const database = require('../infra/database');

exports.getVariations = function () {
	return database.query('select * from mkt.variation');
};

exports.getVariation = function (id) {
	return database.oneOrNone('select * from mkt.variation where id = $1', [id]);
};

exports.saveVariation = function (variation) {
	return database.one('insert into mkt.variation (name, description, type) values ($1, $2, $3) returning *', [variation.name, variation.description, variation.type]);
};

exports.updateVariation = function (id, variation) {
	return database.none('update mkt.variation set name = $1, description = $2, type = $3 where id = $4', [variation.name, variation.description, variation.type, id]);
};

exports.deleteVariation = function (id) {
	return database.none('delete from mkt.variation where id = $1', [id]);
};