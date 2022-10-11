const User = require('../models/User')
const Grocery = require('../models/groceryList')

module.exports = {
    getHome: async (req,res)=>{
        console.log(req.user)
        try{
            const groceryItems = await Grocery.find({userId: req.user.id, active: true})
            console.log(groceryItems)
            res.render('home.ejs', {user: req.user, groceries: groceryItems})
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

}