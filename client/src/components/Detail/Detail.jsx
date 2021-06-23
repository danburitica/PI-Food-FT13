import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesById } from '../../actions/index.js';

export default function Detail({
	match: {
		params: { id },
	},
}) {
	const dispatch = useDispatch();
	const recipe = useSelector((state) => state.recipeById);

	useEffect(() => {
		dispatch(getRecipesById(id));
	}, []);
	return (
		<React.Fragment>
			<div>
				<h1>{recipe.title}</h1>
				<div>
					<img src={recipe.image} alt='' />
					<div>
						<h1>{recipe.score} Points</h1>
						<h1>{recipe.healthScore}%</h1>
					</div>
					<div>
						<p
							dangerouslySetInnerHTML={{ __html: recipe.summary }}
						/>
					</div>
				</div>
				<div>
					<div>
						<p
							dangerouslySetInnerHTML={{
								__html: recipe.instructions,
							}}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
