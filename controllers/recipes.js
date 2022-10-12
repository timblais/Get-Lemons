const User = require('../models/User')
const Grocery = require('../models/groceryList')
const Recipe = require('../models/recipes')

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

    createRecipe: async (req, res)=>{
        try{
            await Recipe.create({name: req.body.recipeName, userId: req.user.id})
            console.log('Recipe Added!')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },



    editRecipes: async (req, res)=>{
        try{
            const recipeName = await Recipe.findOne({_id:req.body.recipeIdFromJSFile})
            const groceryItems = await Grocery.find({userId: req.user.id, recipe: recipeName._id})
            res.render('editRecipe.ejs', {user: req.user, groceries: groceryItems, recipes: recipeName})
        }catch(err){
            console.log(err)
        }
    },
}