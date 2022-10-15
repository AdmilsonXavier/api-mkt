const express = require('express');
const router = express.Router();
const brandsService = require('../service/brandsService');

router.get('/brands', async function (req, res, next) {
	try {
		const brands = await brandsService.getBrands();
		res.status(200).json(brands);
	} catch (e) {
		next(e);
	}
});

router.get('/brands/:id', async function (req, res, next) {
	try {
		const brand = await brandsService.getBrand(req.params.id);
		res.status(200).json(brand);
	} catch (e) {
		next(e);
	}
});

router.post('/brands', async function (req, res, next) {
	const brand = req.body;
	try {
		const newBrand = await brandsService.saveBrand(brand);
		res.status(201).json(newBrand);
	} catch (e) {
		next(e);
	}
});

router.put('/brands/:id', async function (req, res, next) {
	const brand = req.body;
	try {
		await brandsService.updateBrand(req.params.id, brand);
		res.status(204).json(brand);
	} catch (e) {
		next(e);
	}
});

router.delete('/brands/:id', async function (req, res, next) {
	try {
		await brandsService.deleteBrand(req.params.id);
		res.status(200).send(`Brand with id:${req.params.id} has been deleted successfully`);
	} catch (e) {
		next(e);
	}
});

module.exports = router;