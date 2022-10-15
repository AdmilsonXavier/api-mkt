const express = require('express');
const router = express.Router();
const productsService = require('../service/productsService');

router.get('/products', async function (req, res, next) {
	try {
		const products = await productsService.getProducts();
		res.status(200).json(products);
	} catch (e) {
		next(e);
	}
});

router.get('/products/:id', async function (req, res, next) {
	try {
		const product = await productsService.getProduct(req.params.id);
		res.status(200).json(product);
	} catch (e) {
		next(e);
	}

});

router.post('/products', async function (req, res, next) {
	const product = req.body;
	try {
		const newProduct = await productsService.saveProduct(product);
		res.status(201).json(newProduct);
	} catch (e) {
		next(e);
	}

});

router.put('/products/:id', async function (req, res, next) {
	const product = req.body;
	try {
		await productsService.updateProduct(req.params.id, product);
		res.status(204).json(product);
	} catch (e) {
		next(e);
	}

});

router.delete('/products/:id', async function (req, res, next) {
	try {
		await productsService.deleteProduct(req.params.id);
		res.status(200).send(`Produto with id:${req.params.id} has been deleted successfully!`);
	} catch (e) {
		next(e);
	}
});

module.exports = router;