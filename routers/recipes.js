const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const recipeController = require('../controllers/recipes')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, recipeController.getRecipes)
router.post('/edit', ensureAuth, recipeController.editRecipes)
router.post('/createrecipe', recipeController.createRecipe)

module.exports = router