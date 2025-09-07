const express = require('express');
const router = express.Router();
const controllers = require('../controllers/studentController.js');

router.get('/', controllers.List);
router.post('/', controllers.Create);
router.put('/:id', controllers.Update);
router.delete('/:id', controllers.Delete);

module.exports = router;    