require('dotenv').config();
const { Recipe } = require('../db.js');
const axios = require('axios');
const { BASE_URL, API_KEY } = process.env;

function getRecipes(req, res, next) {
	const nameQuery = req.query.name;
	var remoteRecipes = [];
	var localRecipes = [];
	if(nameQuery) {
		axios
		.get(
			`${BASE_URL}complexSearch?apiKey=${API_KEY}&query=${nameQuery}&number=100`
		)
		.then((apiResponse) => {
			remoteRecipes = apiResponse.data.results.filter((recipe) => {
				return recipe.title.toLowerCase().includes(nameQuery);
			});
			return Recipe.findAll();
		})
		.then((localResponse) => {
			localRecipes = localResponse.filter((recipe) => {
				return recipe.name.toLowerCase().includes(nameQuery);
			});
			return res.json([...remoteRecipes, ...localRecipes].slice(0, 9));
		})
		.catch((error) => next(error));
	}else {
		axios
		.get(
			`${BASE_URL}complexSearch?apiKey=${API_KEY}&number=100`
		)
		.then((apiResponse) => {
			remoteRecipes = apiResponse.data.results;
			return Recipe.findAll();
		})
		.then((localResponse) => {
			return res.json([...remoteRecipes, ...localResponse]);
		})
		.catch((error) => next(error));
	}
}

function getRecipeById(req, res, next) {
	const id = parseInt(req.params.idReceta);
	axios
		.get(`${BASE_URL}${id}/information?apiKey=${API_KEY}`)
		.then((response) => {
			return res.json({
				name: response.data.title,
				image: response.data.image,
				dishTypes: response.data.dishTypes,
				diets: response.data.diets,
				summary: response.data.summary,
				score: response.data.spoonacularScore,
				healthScore: response.data.healthScore,
				steps: response.data.instructions,
			});
		})
		.catch((error) => next(error));
}

function createRecipe(req, res, next) {
	const { name, summary, score, healthScore, steps } = req.body;
	Recipe.create({
		name,
		summary,
		score,
		healthScore,
		steps,
	})
		.then((newRecipe) => {
			res.json({
				message: 'Recipe created successfully',
				data: newRecipe,
			});
		})
		.catch((error) => next(error));
}

module.exports = {
	getRecipes,
	getRecipeById,
	createRecipe,
};
