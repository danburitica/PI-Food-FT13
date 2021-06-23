import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions/index.js';

import Card from '../Card/Card.jsx';
import Search from '../Search/Search.jsx';

export default function Home() {
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes);
	const searchRecipes = useSelector((state) => state.recipesByName);

	useEffect(() => {
		dispatch(getRecipes());
	}, []);

	return (
		<React.Fragment>
			<div>
				<div>
					<div>
						<span>Sort:</span>
						<select>
							<option value='name'>Name</option>
							<option value='score'>Score</option>
						</select>
						<select>
							<option value='asc'>Asc</option>
							<option value='des'>Des</option>
						</select>
					</div>
					<button>+ Filter</button>
				</div>
				<Search setVisible={setVisible} />
			</div>
			<div>
				{visible && (searchRecipes.length ? (
					searchRecipes.map((recipe) => (
						<Card
							key={recipe.id}
							id={recipe.id}
							title={recipe.title}
							image={recipe.image}
							diets={recipe.diets && recipe.diets.join(', ')}
						/>
					))
				) : (
					<h3>Loading...</h3>
				))}
				{!visible && (allRecipes.length ? (
					allRecipes.map((recipe) => (
						<Card
							key={recipe.id}
							id={recipe.id}
							title={recipe.title}
							image={recipe.image}
							diets={recipe.diets && recipe.diets.join(', ')}
						/>
					))
				) : (
					<h3>Loading...</h3>
				))}
			</div>
		</React.Fragment>
	);
}
