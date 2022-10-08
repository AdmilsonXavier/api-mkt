const database = require('../infra/database');

exports.getCategories = function () {
	return database.query('select * from mkt.category');
};

exports.getCategory = function (id) {
	return database.oneOrNone('select * from mkt.category where id = $1', [id]);
};

exports.saveCategory = function (category) {
	return database.one('insert into mkt.category (name, description, type) values ($1, $2, $3) returning *', [category.name, category.description, category.type]);
};

exports.updateCategory = function (id, category) {
	return database.none('update mkt.category set name = $1, description = $2, type = $3 where id = $4', [category.name, category.description, category.type, id]);
};

exports.deleteCategory = function (id) {
	return database.none('delete from mkt.category where id = $1', [id]);
};