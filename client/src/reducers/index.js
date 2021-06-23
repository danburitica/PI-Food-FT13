import {
	GET_RECIPES,
	GET_RECIPES_BY_NAME,
	GET_RECIPE_BY_ID,
	GET_DIETS,
	ADD_RECIPE,
} from '../actions/index.js';

const initialState = {
    recipes: [],
    recipesByName: [],
    recipeById: {},
    recipesFilter: [],
    diets: []
};

function reducer(state = initialState, action) {
	switch(action.type) {
		case GET_RECIPES: {
			return {
				...state,
				recipes: action.payload
			}
		}
		case GET_RECIPES_BY_NAME: {
			return {
				...state,
				recipesByName: action.payload
			}
		}
		case GET_RECIPE_BY_ID: {
			return {
				...state,
				recipeById: action.payload
			}
		}
		case GET_DIETS: {
			return {
				...state,
				diets: action.payload
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;