const express = require('express');
const router = express.Router();
const controller = require('../controllers/teacherController.js');

router.get('/', controller.List);
router.post('/', controller.Create);
router.put('/:id', controller.Update);
router.delete('/:id', controller.Delete);

module.exports = router;
