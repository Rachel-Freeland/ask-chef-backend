const axios = require('axios');

const getRecipes = async (req, res) => {
  try {
    const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_KEY}&ingredients=${req.query.ingredients}`);
    console.log(result.data);
    res.send(result.data[0]);
  } catch (err) {
    res.status(404).send(err);
  }

};

const RecipeRoutes = {
  list: getRecipes,
};

module.exports = RecipeRoutes;
