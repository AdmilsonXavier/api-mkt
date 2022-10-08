const database = require('../infra/database');

exports.getProducts = function () {
	return database.query('select * from mkt.product');
};

exports.getProduct = function (id) {
	return database.oneOrNone('select * from mkt.product where id = $1', [id]);
};

exports.saveProduct = function (product) {
	return database.one('insert into mkt.product (name, description, price) values ($1, $2, $3) returning *', [product.name, product.description, product.price]);
};

exports.updateProduct = function (id, product) {
	return database.none('update mkt.product set name = $1, description = $2, price = $3 where id = $4', [product.name, product.description, product.price, id]);
};

exports.deleteProduct = function (id) {
	return database.none('delete from mkt.product where id = $1', [id]);
};