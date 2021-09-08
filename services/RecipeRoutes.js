const axios = require('axios');
const Recipe = require('../models/Recipe');

// --------- AUTH0 header stuff ---------
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: 'https://dev-qttzuf0f.us.auth0.com/.well-known/jwks.json'
});
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}
//-------------------Landing Routes---------------------
const getRecipes = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.SPOONACULAR_KEY}&ingredients=${req.query.ingredients}&ranking=1&number=6`
    );
    const results = response.data;
    results.steps = response.data.map(aquireSteps);
    console.log(results.steps);
    // console.log('STEPS', steps);
    res.send(results.slice());
  } catch (err) {
    res.status(404).send(err);
  }
};

const aquireSteps = async (recipe) => {
  // console.log(recipe.id);
  try {
    const stepResults = await axios.get(
      `https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${process.env.SPOONACULAR_KEY}`
    );
    return stepResults.data.forEach(step => {
      return step.steps.map(step => step.step);
    });
  } catch (err) {
    console.log(err);
  }
};

//-------------------Profile Routes---------------------
const getDataBaseRecipes = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, function (err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      let userEmail = user.email;
      Recipe.find({ email: userEmail }, (err, recipes) => {
        console.log(recipes);
        res.send(recipes);
      });
    }
  });
};

const addRecipe = async (req, res) => {
  console.log(req.body);
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, getKey, {}, function (err, user) {
    if (err) {
      res.status(500).send(err);
    } else {
      const newRecipe = new Recipe({
        recipe_id: req.body.recipe_id,
        title: req.body.title,
        image: req.body.image,
        steps: req.body.steps,
        missedIngredientCount: req.body.missedIngredientCount,
        missedIngredients: req.body.missedIngredients,
        usedIngredients: req.body.usedIngredients,
        unusedIngredients: req.body.unusedIngredients,
        email: user.email,
      });
      res.status(201).send(newRecipe);
      console.log(newRecipe);
    }
  });
};

const deleteRecipe = async (req, res) => {
  console.log('test');
  const recipeId = req.params.id;
  try {
    Recipe.deleteOne({ _id: recipeId }).then((deleteOneRecipe) => {
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
  try {
    const updateRecipe = await Recipe.findByIdAndUpdate(recipeId, req.body, { new: true });
    console.log(req.body);
    res.send(updateRecipe);
  } catch (err) {
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
