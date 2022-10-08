const database = require('../infra/database');

exports.getBrands = function () {
	return database.query('select * from mkt.brand');
};

exports.getBrand = function (id) {
	return database.oneOrNone('select * from mkt.brand where id = $1', [id]);
};

exports.saveBrand = function (brand) {
	return database.one('insert into mkt.brand (name, description) values ($1, $2) returning *', [brand.name, brand.description]);
};

exports.updateBrand = function (id, brand) {
	return database.none('update mkt.brand set name = $1, description = $2 where id = $3', [brand.name, brand.description, id]);
};

exports.deleteBrand = function (id) {
	return database.none('delete from mkt.brand where id = $1', [id]);
};