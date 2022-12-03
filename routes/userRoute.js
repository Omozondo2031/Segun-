const express = require('express')
const { register, login, logout, } = require('../controllers/authuser')
const { getAllUser, getUserById, deleteUser, update } = require('../controllers/user')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.delete('/logout', logout)
router.get('/allpost', getAllUser)
router.get('/getone/:id', getUserById)
router.get('/delete/:id', deleteUser)
router.put('/update/:id', update)

module.exports = router