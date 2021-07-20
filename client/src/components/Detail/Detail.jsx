import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesById } from '../../actions/index.js';
import loadingImg from '../../img/loading-img.svg';

import './Detail.css';

export default function Detail({
	match: {
		params: { id },
	},
}) {
	const dispatch = useDispatch();
	const recipe = useSelector((state) => state.recipeById);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		dispatch(getRecipesById(id));
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [dispatch, id]);

	return (
		<React.Fragment>
			<div className='main-container'>
				{loading ? (
					<div>
						<img
							className='loading rotated'
							src={loadingImg}
							alt='Loading'
						/>
						<h2>¡Loading...!</h2>
					</div>
				) : recipe.title ? (
					<>
						<h1 className='detail-title'>{recipe.title}</h1>
						<div className='detail-container'>
							<div className='left-container'>
								<img src={recipe.image} alt='' />
								<div className='detail-points'>
									<h1>
										{recipe.score &&
											`${recipe.score} Points`}
									</h1>
									<h1>
										{recipe.healthScore &&
											`${recipe.healthScore}%`}
									</h1>
								</div>
							</div>
							<div className='right-container'>
								<h2>{recipe.summary && 'Summary'}</h2>
								<div className='detail-summary'>
									<p
										dangerouslySetInnerHTML={{
											__html: recipe.summary,
										}}
									/>
								</div>
								<h2>{recipe.instructions && 'Instructions'}</h2>
								<div className='detail-instructions'>
									<p
										dangerouslySetInnerHTML={{
											__html: recipe.instructions,
										}}
									/>
								</div>
							</div>
						</div>
					</>
				) : (
					<h1>Something went wrong, please try again!</h1>
				)}
			</div>
		</React.Fragment>
	);
}
