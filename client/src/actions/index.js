import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPES_BY_NAME = 'GET_RECIPES_BY_NAME';
export const GET_RECIPE_BY_ID = 'GET_RECIPE_BY_ID';
export const GET_DIETS = 'GET_DIETS';
export const SWITCH_LOADING = 'SWITCH_LOADING';

export function getRecipes() {
	return (dispatch) => {
		axios.get('http://localhost:3001/recipes')
		.then((response) => {
			dispatch({ type: GET_RECIPES, payload: response.data });
		});
	};
}

export function getRecipesByName(name) {
	return (dispatch) => {
		axios.get(`http://localhost:3001/recipes?name=${name}`)
		.then((response) => {
			dispatch({ type: GET_RECIPES_BY_NAME, payload: response.data });
		});
	};
}

export function getRecipesById(id) {
	return (dispatch) => {
		axios.get(`http://localhost:3001/recipes/${id}`)
		.then((response) => {
			dispatch({ type: GET_RECIPE_BY_ID, payload: response.data });
		});
	};
}

export function getDiets() {
	return (dispatch) => {
		axios.get('http://localhost:3001/types')
		.then((response) => {
			dispatch({ type: GET_DIETS, payload: response.data });
		});
	};
}

export function switchLoading(boolean) {
    return function(dispatch) {
        dispatch({ type: SWITCH_LOADING, payload: boolean })
    }
}