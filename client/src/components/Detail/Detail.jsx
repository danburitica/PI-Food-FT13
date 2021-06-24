import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesById } from '../../actions/index.js';

import	'./Detail.css';

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
			<div className='main-container'>
				<h1 className='detail-title'>{recipe.title}</h1>
				<div className='detail-container'>
					<div className='left-container'>
					<img src={recipe.image} alt='' />
					<div className='detail-points'>
						<h1>{recipe.score} Points</h1>
						<h1>{recipe.healthScore}%</h1>
					</div>
				</div>
				<div className='right-container'>
					<h2>Summary</h2>
					<div className='detail-summary'>
						<p
							dangerouslySetInnerHTML={{ __html: recipe.summary }}
						/>
					</div>
					<h2>Instructions</h2>
					<div className='detail-instructions'>
						<p
							dangerouslySetInnerHTML={{
								__html: recipe.instructions,
							}}
						/>
					</div>
				</div>
				</div>
			</div>
		</React.Fragment>
	);
}