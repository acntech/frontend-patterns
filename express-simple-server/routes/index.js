const express = require('express');
const router = express.Router();

const todosRouter = require('./todos');
const fooRouter = require('./foo');

router.use('/todos', todosRouter);
router.use('/foo', fooRouter);

module.exports = router;
