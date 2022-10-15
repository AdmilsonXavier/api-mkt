const productsData = require('../data/productsData');

exports.getProducts = function () {
    return productsData.getProducts();
};

exports.getProduct = async function (id) {
	const product = await productsData.getProduct(id);
	if(!product) throw new Error('Product not Found');
	return product;
};

exports.saveProduct = function (product) {
	return productsData.saveProduct(product);
};

exports.deleteProduct = async function (id) {
	await exports.getProduct(id);
	return productsData.deleteProduct(id);
};

exports.updateProduct = async function (id, product) {
	await exports.getProduct(id);
	return productsData.updateProduct(id, product);
};