const mongoose = require('mongoose')

const GrocerySchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: String, Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  recipe: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Groceries', GrocerySchema)