const Todo = require('../models/user')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            res.render('home.ejs', {user: req.user})
        }catch(err){
            console.log(err)
        }
    }
}