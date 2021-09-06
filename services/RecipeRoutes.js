const axios = require('axios');
const Recipe = require('../models/Recipe');

const getRecipes = async (req, res) => {
  try {
    const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_KEY}&ingredients=${req.query.ingredients}&ranking=1`);
    console.log(result.data);
    res.send(result.data[0]);
  } catch(err) {
    res.status(404).send(err);
  }
};

// const addRecipe = async (req, res) => {
//   try {
//     const response = await Recipe.create(req.body);
//     res.status(201).send(response.data);
//   } catch(err) {
//     res.status(500).send(err);
//   }
// };

const RecipeRoutes = {
  list: getRecipes,
  // add: addRecipe,
};

module.exports = RecipeRoutes;
