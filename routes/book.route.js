const express = require('express');
const { authenticate } = require('../middleware/aunthicate.middleware');
const bookController = require('../controllers/book.controller');
const router = express.Router();

router.post('/', authenticate, bookController.createBook )
router.get('/book', authenticate, bookController.getBook)
module.exports = router;