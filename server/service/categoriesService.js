const categoriesData = require('../data/categoriesData');

exports.getCategories = function () {
    return categoriesData.getCategories();
};

exports.getCategory = function (id) {
	return categoriesData.getCategory(id);
};

exports.saveCategory = function (category) {
	return categoriesData.saveCategory(category);
};

exports.deleteCategory = function (id) {
	return categoriesData.deleteCategory(id);
};

exports.updateCategory = function (id, category) {
	return categoriesData.updateCategory(id, category);
};