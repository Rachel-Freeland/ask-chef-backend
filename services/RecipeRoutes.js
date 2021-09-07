const axios = require('axios');
const Recipe = require('../models/Recipe');

const getRecipes = async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_KEY}&ingredients=${req.query.ingredients}&ranking=1`
    );
    console.log(result.data);
    res.send(result.data);
  } catch (err) {
    res.status(404).send(err);
  }
};
const getDataBaseRecipes = async (req, res) => {
  const user = {};
  if(req.query.email){
    user.email = req.query.email;
  }
  try{
    const recipeList = await Recipe.find({});
    res.send(recipeList);
  }catch(err){
    console.log(err);
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
  const recipeId = req.params.id;
  try {

    Recipe.deleteOne({_id: recipeId}).then(deleteOneRecipe => {
      console.log(deleteOneRecipe);
      res.send('Deleted Recipe Again');
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateRecipe = async (req, res) => {
  console.log(req.body);
  const recipeId = req.params.id;
  try{
    const updateRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, {new:true});
    console.log(req.body);
    res.send(updateRecipe);
  }catch(err){
    res.status(500).send(err);
  }
};

const RecipeRoutes = {
  list: getRecipes,
  dbList: getDataBaseRecipes,
  add: addRecipe,
  delete: deleteRecipe,
  update: updateRecipe,
};

module.exports = RecipeRoutes;
