const express = require('express');

const Users = require('../controller/Users');
const usersController = new Users()
const router = express.Router();

router.get('/:id', usersController.get);

module.exports = router;