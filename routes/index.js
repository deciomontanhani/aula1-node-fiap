const express = require('express');

// Rotas
const users = require('./users');

const router = express.Router();

router.use('/users', users);

module.exports = router;