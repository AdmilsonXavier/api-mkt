const productsData = require('../data/productsData');

exports.getProducts = function () {
    return productsData.getProducts();
};

exports.getProduct = function (id) {
	return productsData.getProduct(id);
};

exports.saveProduct = function (product) {
	return productsData.saveProduct(product);
};

exports.deleteProduct = function (id) {
	return productsData.deleteProduct(id);
};

exports.updateProduct = function (id, product) {
	return productsData.updateProduct(id, product);
};