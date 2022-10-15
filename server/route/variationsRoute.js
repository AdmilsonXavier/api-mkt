const express = require('express');
const router = express.Router();
const variationsService = require('../service/variationsService');

router.get('/variations', async function (req, res, next) {
    try {
        const variations = await variationsService.getVariations();
        res.status(200).json(variations);
    } catch {
        next(e)
    }

});

router.get('/variations/:id', async function (req, res, next) {
    try {
        const variation = await variationsService.getVariation(req.params.id);
        res.status(200).json(variation);
    } catch (e) {
        next(e);
    }

});

router.post('/variations', async function (req, res, next) {
    const variation = req.body;
    try {
        const newVariation = await variationsService.saveVariation(variation);
        res.status(201).json(newVariation);
    } catch (e) {
        next(e);
    }
});

router.put('/variations/:id', async function (req, res, next) {
    const variation = req.body;
    try {
        await variationsService.updateVariation(req.params.id, variation);
        res.status(204).json(variation);
    } catch (e) {
        next(e);
    }

});

router.delete('/variations/:id', async function (req, res, next) {
    try {
        await variationsService.deleteVariation(req.params.id);
        res.status(200).send(`Variation with id: ${req.params.id} has been deleted successfully!`);
    } catch (e) {
        next(e);
    }
});

module.exports = router;