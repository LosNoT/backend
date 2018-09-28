const express = require('express');
const router = express.Router();
const main = require('../controllers/main');

router.get('/getData', main.getData);

module.exports = router;