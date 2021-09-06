const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const RecipeRoutes = require('./services/RecipeRoutes');

app.use(cors());

app.get('/recipes', RecipeRoutes.list);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
