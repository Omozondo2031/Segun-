const express = require('express')
const { register, login, logout, } = require('../controllers/authuser')
const { getAllUser, getUserById, deleteUser, update, getUserProfile} = require('../controllers/user')
const { admin, authorizedUser } = require('../middleware/authmiddleware')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.delete('/logout', logout)
router.get('/alluser',/* authorizedUser, admin,*/ getAllUser)
router.get('/getone/:id', getUserById)
router.delete('/delete/:id',authorizedUser, admin, deleteUser)
router.put('/update/:id', update)

module.exports = router