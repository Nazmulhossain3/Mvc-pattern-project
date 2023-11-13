const express = require('express')
const { getProduct, saveProducts } = require('../controllers/productController')
const router = express.Router()

router.post('/products', saveProducts)
router.get('/products', getProduct)

module.exports = router