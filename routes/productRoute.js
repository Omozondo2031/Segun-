const express = require('express')
const router = express.Router()
const { createProduct, updateProduct, deleteProduct } = require('../controllers/product')
const { authorizedUser, admin } = require('../middleware/authmiddleware')

router.post('/uploadproduct',authorizedUser, admin, createProduct)
router.put('/updateproduct',authorizedUser, admin, updateProduct)
router.get('/deleteproduct/:id',authorizedUser, admin, deleteProduct)
router.get('/getallproduct')
router.get('/getproductbyid/:id')

module.exports = router