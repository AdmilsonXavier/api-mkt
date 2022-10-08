const express = require('express');
const router = express.Router();
const brandsService = require('../service/brandsService');

router.get('/brands', async function (req, res) {
    const brands = await brandsService.getBrands();
    res.json(brands);
});

router.get('/brands/:id', async function (req, res) {
    const brands = await brandsService.getBrand(req.params.id);
    res.json(brands);
});

router.post('/brands', async function (req, res) {
	const product = req.body;
	const newBrand = await brandsService.saveBrand(product);
	res.json(newBrand);
});

router.put('/brands/:id', async function (req, res) {
	const product = req.body;
	await brandsService.updateBrand(req.params.id, product);
	res.end();
});

router.delete('/brands/:id', async function (req, res) {
	await brandsService.deleteBrand(req.params.id);
	res.end();
});

module.exports = router;