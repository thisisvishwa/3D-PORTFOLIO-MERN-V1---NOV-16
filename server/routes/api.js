const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Fetch data
router.get('/fetch', async (req, res, next) => {
    try {
        const data = await dataController.fetchData();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

// Update data
router.post('/update', async (req, res, next) => {
    try {
        const data = await dataController.updateData(req.body);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

module.exports = router;