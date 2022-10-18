const User = require('../models/User')
const Grocery = require('../models/groceryList')
const Recipe = require('../models/recipes')

let recipeToEdit = ''

module.exports = {
    getRecipes: async (req,res)=>{
        console.log(req.user)
        try{
            const groceryItems = await Grocery.find({userId: req.user.id})
            const recipeNames = await Recipe.find({userId: req.user.id})
            res.render('myRecipes.ejs', {user: req.user, groceries: groceryItems, recipes: recipeNames})
        }catch(err){
            console.log(err)
        }
    },

    editRecipes: async (req,res)=>{
        console.log(req.user)
        try{
            const recipeId = await req.params.recipeId.substring(1)
            const recipeName = await Recipe.findOne({userId: req.user.id, _id: recipeId})
            const groceryItems = await Grocery.find({userId: req.user.id, recipe: recipeName._id})
            res.render('editRecipe.ejs', {user: req.user, groceries: groceryItems, recipe: recipeName})
        }catch(err){
            console.log(err)
        }
    },

    createRecipe: async (req, res)=>{
        try{
            await Recipe.create({name: req.body.recipeName, userId: req.user.id})
            console.log('Recipe Added!')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },


    addItem: async (req, res)=>{
        try{
            await Grocery.create({item: req.body.groceryItem, quantity: req.body.quantity, category: req.body.category, completed: false, active: false, userId: req.user.id, recipe: req.body.recipe})
            console.log('Item Added!')
            res.redirect(`/recipes/edit/:${req.body.recipe}`)
        }catch(err){
            console.log(err)
        }
    },
}