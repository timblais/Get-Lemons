const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Recipes', RecipeSchema)