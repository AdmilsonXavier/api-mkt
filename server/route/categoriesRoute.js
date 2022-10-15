const express = require('express');
const router = express.Router();
const categoriesService = require('../service/categoriesService');

router.get('/categories', async function (req, res, next) {
	try {
		const categories = await categoriesService.getCategories();
		res.status(200).json(categories);
	} catch (e) {
		next(e);
	}

});

router.get('/categories/:id', async function (req, res, next) {
	try {
		const category = await categoriesService.getCategory(req.params.id);
		res.status(200).json(category);
	} catch (e) {
		next(e);
	}
});

router.post('/categories', async function (req, res, next) {
	const category = req.body;
	try {
		const newCategory = await categoriesService.saveCategory(category);
		res.status(201).json(newCategory);
	} catch (e) {
		next(e);
	}
});

router.put('/categories/:id', async function (req, res, next) {
	const category = req.body;
	try {
		await categoriesService.updateCategory(req.params.id, category);
		res.status(204).json(category);
	} catch (e) {
		next(e);
	}
});

router.delete('/categories/:id', async function (req, res, next) {
	try {
		await categoriesService.deleteCategory(req.params.id);
		res.status(200).send(`Category with id:${req.params.id} has been deleted successfully!`);
	} catch (e) {
		next(e);
	}
});

module.exports = router;