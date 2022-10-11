const express = require('express')
const router = express.Router()
// const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, homeController.getHome)
router.post('/addItem', homeController.createGroceryItem)
router.put('/removeItem', homeController.removeItem)
router.put('/markComplete', homeController.markComplete)
router.put('/markIncomplete', homeController.markIncomplete)


module.exports = router