const { Router } = require('express');
const router = Router();

const { getRecipes, getRecipesByName, getRecipeById, createRecipe } = require('../controllers/recipe.controller.js');

router.get('/recipes', getRecipes);
router.get('/recipes/:idReceta', getRecipeById);

router.post('/recipe', createRecipe);

module.exports = router;