const express = require('express')
const router = express.Router()
const { createProduct, updateProduct, deleteProduct, getAllProduct, getProductById, getProductByUserId, getProdutByCategory, getFeatureProduct, } = require('../controllers/product')
/*const { authorizedUser, admin } = require('../middleware/authmiddleware')*/

router.post('/uploadproduct',/*authorizedUser, admin,*/ createProduct)
router.put('/updateproduct',/*authorizedUser, admin,*/ updateProduct)
router.delete('/deleteproduct/:id',/*authorizedUser, admin,*/ deleteProduct)
router.get('/getallproduct', getAllProduct)
router.get('/getproductbyid/:id', getProductById)
router.get('/getproductforauser', /*authorizedUser, admin,*/ getProductByUserId)
router.get('/searchbycategory', getProdutByCategory)
router.get('/product/feature', /*authorizedUser, admin,*/ getFeatureProduct)

module.exports = router