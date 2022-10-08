const express = require('express');
const router = express.Router();
const variationsService = require('../service/variationsService');

router.get('/variations', async function (req, res) {
    const variations = await variationsService.getVariations();
    res.json(variations);
});

router.get('/variations/:id', async function (req, res) {
    const variations = await variationsService.getVariation(req.params.id);
    res.json(variations);
});

router.post('/variations', async function (req, res) {
	const product = req.body;
	const newVariation = await variationsService.saveVariation(product);
	res.json(newVariation);
});

router.put('/variations/:id', async function (req, res) {
	const product = req.body;
	await variationsService.updateVariation(req.params.id, product);
	res.end();
});

router.delete('/variations/:id', async function (req, res) {
	await variationsService.deleteVariation(req.params.id);
	res.end();
});

module.exports = router;