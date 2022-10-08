const express = require('express');
const router = express.Router();
const productsService = require('../service/productsService');

router.get('/products', async function (req, res) {
    const products = await productsService.getProducts();
    res.json(products);
});

router.get('/products/:id', async function (req, res) {
    const products = await productsService.getProduct(req.params.id);
    res.json(products);
});

router.post('/products', async function (req, res) {
	const product = req.body;
	const newProduct = await productsService.saveProduct(product);
	res.json(newProduct);
});

router.put('/products/:id', async function (req, res) {
	const product = req.body;
	await productsService.updateProduct(req.params.id, product);
	res.end();
});

router.delete('/products/:id', async function (req, res) {
	await productsService.deleteProduct(req.params.id);
	res.end();
});

module.exports = router;