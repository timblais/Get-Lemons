const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const recipeController = require('../controllers/recipes')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, recipeController.getRecipes)
router.get('/edit/:recipeId', ensureAuth, recipeController.editRecipes)
router.post('/edit/addItem', recipeController.addItem)

module.exports = router