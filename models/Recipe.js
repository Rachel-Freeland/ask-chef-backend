const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipe_id: Number,
  title: String,
  image: String,
  steps: Array,
  missedIngredientCount: Number,
  missedIngredients: Array,
  usedIngredients: Array,
  unusedIngredients: Array,
  email: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
