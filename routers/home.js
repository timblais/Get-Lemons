const express = require('express')
const router = express.Router()
// const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, homeController.getHome)
router.post('/addItem', homeController.createGroceryItem)
router.post('/addRecipeItems', homeController.addRecipeItems)
router.put('/removeItem', homeController.removeItem)
router.put('/markComplete', homeController.markComplete)
router.put('/markIncomplete', homeController.markIncomplete)
router.put('/createNewList', homeController.createNewList)


module.exports = router