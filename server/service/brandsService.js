const brandsData = require('../data/brandsData');

exports.getBrands = function () {
    return brandsData.getBrands();
};

exports.getBrand = function (id) {
	return brandsData.getBrand(id);
};

exports.saveBrand = function (brand) {
	return brandsData.saveBrand(brand);
};

exports.deleteBrand = function (id) {
	return brandsData.deleteBrand(id);
};

exports.updateBrand = function (id, brand) {
	return brandsData.updateBrand(id, brand);
};