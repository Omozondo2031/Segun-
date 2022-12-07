const express = require('express')
const { createCategory, updateCategory, deleteCategory, getAllCategory, getCategoryById } = require('../controllers/category')
const { authorizedUser, admin } = require('../middleware/authmiddleware')
const router = express.Router()

router.post('/uploadcategory',/*authorizedUser, admin,*/ createCategory)
router.put('/updatecategory',/*authorizedUser, admin,*/ updateCategory)
router.get('/deletecategory/:id',/*authorizedUser, admin,*/deleteCategory)
router.get('/getallcategory', getAllCategory)
router.get('/getcategorybyid/:id',/*authorizedUser, admin,*/ getCategoryById)

module.exports = router