const variationsData = require('../data/variationsData');

exports.getVariations = function () {
    return variationsData.getVariations();
};

exports.getVariation = function (id) {
	return variationsData.getVariation(id);
};

exports.saveVariation = function (variation) {
	return variationsData.saveVariation(variation);
};

exports.deleteVariation = function (id) {
	return variationsData.deleteVariation(id);
};

exports.updateVariation = function (id, variation) {
	return variationsData.updateVariation(id, variation);
};