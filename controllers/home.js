const User = require('../models/User')
const Grocery = require('../models/groceryList')

module.exports = {
    getHome: async (req,res)=>{
        console.log(req.user)
        try{
            const groceryItems = await Grocery.find({userId: req.user.id, active: true})
            const categorySet = new Set()
            groceryItems.forEach(element => {
                categorySet.add(element['category'])
            });
            res.render('home.ejs', {user: req.user, groceries: groceryItems, category: categorySet})
        }catch(err){
            console.log(err)
        }
    },

    createGroceryItem: async (req, res)=>{
        try{
            await Grocery.create({item: req.body.groceryItem, quantity: req.body.quantity, category: req.body.category, completed: false, active: true, userId: req.user.id})
            console.log('Item Added!')
            res.redirect('/home')
        }catch(err){
            console.log(err)
        }
    },

    markComplete: async (req, res)=>{
        try{
            await Grocery.findOneAndUpdate({_id:req.body.itemIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },

    markIncomplete: async (req, res)=>{
        try{
            await Grocery.findOneAndUpdate({_id:req.body.itemIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },

    removeItem: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Grocery.findOneAndUpdate({_id:req.body.itemIdFromJSFile},{
                completed: true,
                active: false
            })
            console.log('Removed Item')
            res.json('Removed Item')
        }catch(err){
            console.log(err)
        }
    }
}  

