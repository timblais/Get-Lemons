const express = require('express')
const router = express.Router()
// const authController = require('../controllers/auth') 
const signUpController = require('../controllers/signUp')
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', signUpController.getSignUp)

module.exports = router