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
            const recipeName = await Recipe.findOne({userId: req.user.id, _id: recipeToEdit})
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



    setEdit: async (req, res)=>{
        
        try{
            // const recipeId = localStorage.getItem('recipe')
            recipeToEdit = await req.body.recipeIdFromJSFile
            console.log(recipeToEdit)
            // const recipeName = await Recipe.findOne({_id: recipeId})
            // const groceryItems = await Grocery.find({userId: req.user.id, recipe: recipeName._id})
            // res.render('editRecipe.ejs', {user: req.user, groceries: groceryItems, recipes: recipeName})
            // res.redirect('/recipes/edit')
            res.json('Grabbed Recipe ID')
        }catch(err){
            console.log(err)
        }
    },
}