const axios = require('axios');
const Recipe = require('../models/Recipe');

const getRecipes = async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_KEY}&ingredients=${req.query.ingredients}&ranking=1`
    );
    console.log(result.data);
    res.send(result.data[0]);
  } catch (err) {
    res.status(404).send(err);
  }
};

const getRandomRecipes = async (req, res) => {
  try {
    const result = await axios.get(`https://api.spoonacular.com/recipes/random?number=5`);
    console.log(result.data);
    res.send(result.data);
  } catch (err) {
    res.status(404).send(err);
  }
};

const addRecipe = async (req, res) => {
  console.log(req.body);
  try {
    const response = await Recipe.create(req.body);
    res.status(201).send(response);
    console.log(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteRecipe = async (req, res) => {
  console.log('test');
  try {
    const recipeId = req.params.id;
    Recipe.findOneAndDelete(recipeId);
    console.log(recipeId);
    res.send('Deleted Recipe');
  } catch (err) {
    res.status(500).send(err);
  }
};

const RecipeRoutes = {
  list: getRecipes,
  random: getRandomRecipes,
  add: addRecipe,
  delete: deleteRecipe,
};

module.exports = RecipeRoutes;
