const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const mainController = require('../controllers/main')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', authController.logout)

module.exports = router