const express = require('express');
const router = express.Router();

const contributorsController = require('../appControllers/contributorsController');

router.get('/get-contributors', contributorsController.getContributors);

module.exports = router