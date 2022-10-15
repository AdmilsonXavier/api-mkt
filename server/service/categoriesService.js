const categoriesData = require('../data/categoriesData');

exports.getCategories = function () {
    return categoriesData.getCategories();
};

exports.getCategory = async function (id) {
	const category = await categoriesData.getCategory(id);
	if(!category) throw new Error('Category not Found');
	return category;
};

exports.saveCategory = function (category) {
	return categoriesData.saveCategory(category);
};

exports.deleteCategory = async function (id) {
	await exports.getCategory(id);
	return categoriesData.deleteCategory(id);
};

exports.updateCategory = async function (id, category) {
	await exports.getCategory(id);
	return categoriesData.updateCategory(id, category);
};