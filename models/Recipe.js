const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipe_id: Number,
  title: String,
  image: String,
  missedIngredientCount: Number,
  missedIngredients: Array,
  usedIngredients: Array,
  unusedIngredients: Array,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
