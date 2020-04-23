const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
    res.send(`Eu recebi o parametro ${req.params.id}`);
});

module.exports = router;