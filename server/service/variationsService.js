const variationsData = require('../data/variationsData');

exports.getVariations = function () {
    return variationsData.getVariations();
};

exports.getVariation = async function (id) {
	const variation = await productsData.getVariation(id);
	if(!variation) throw new Error('Variation not Found');
	return variation;
};

exports.saveVariation = function (variation) {
	return variationsData.saveVariation(variation);
};

exports.deleteVariation = async function (id) {
	await exports.getVariation(id);
	return variationsData.deleteVariation(id);
};

exports.updateVariation = async function (id, variation) {
	await exports.getVariation(id);
	return variationsData.updateVariation(id, variation);
};