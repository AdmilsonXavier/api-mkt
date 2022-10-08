const express = require('express');
const router = express.Router();
const categoriesService = require('../service/categoriesService');

router.get('/categories', async function (req, res) {
    const categories = await categoriesService.getCategories();
    res.json(categories);
});

router.get('/categories/:id', async function (req, res) {
    const categories = await categoriesService.getCategory(req.params.id);
    res.json(categories);
});

router.post('/categories', async function (req, res) {
	const product = req.body;
	const newCategory = await categoriesService.saveCategory(product);
	res.json(newCategory);
});

router.put('/categories/:id', async function (req, res) {
	const product = req.body;
	await categoriesService.updateCategory(req.params.id, product);
	res.end();
});

router.delete('/categories/:id', async function (req, res) {
	await categoriesService.deleteCategory(req.params.id);
	res.end();
});

module.exports = router;