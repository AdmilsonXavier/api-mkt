const brandsData = require('../data/brandsData');

exports.getBrands = function () {
    return brandsData.getBrands();
};

exports.getBrand = async function (id) {
	const brand = await brandsData.getBrand(id);
	if(!brand) throw new Error('Brand not Found');
	return brand;
};

exports.saveBrand = function (brand) {
	return brandsData.saveBrand(brand);
};

exports.deleteBrand = async function (id) {
	await exports.getBrand(id);
	return brandsData.deleteBrand(id);
};

exports.updateBrand = async function (id, brand) {
	await exports.getBrand(id);
	return brandsData.updateBrand(id, brand);
};