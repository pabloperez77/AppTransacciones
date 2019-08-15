const {Router} = require('express');
const router = Router();

const {getTables, createTables, getTable, updateTables, deleteTables} = require('../controllers/tables.controller');

router.route('/')
    .get(getTables)
    .post(createTables);

router.route('/:id')
    .get(getTable)
    .put(updateTables)
    .delete(deleteTables);

module.exports = router;
