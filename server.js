const express = require('express');
const app = express();
const cors = require('cors');
const RecipeRoutes = require('./services/RecipeRoutes');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());

mongoose.connect(`${process.env.DATABASE_URI}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Successfully connected to Mognodb'));

app.get('/recipes', RecipeRoutes.list);
//app.post('/recipes', RecipeRoutes.add);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));