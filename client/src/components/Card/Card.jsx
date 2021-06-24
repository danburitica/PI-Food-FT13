import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

export default function Card({id, title, image, diets}) {
	return (
		<React.Fragment>
			<div className='card'>
				<div className='img-recipe'>
					<img src={image} alt={title}/>
				</div>
				<div className='card-info'>
					<Link to={`/recipes/${id}`}>
	                	<h2 className='card-title'>{title}</h2>
	                </Link>
					<h4 className='card-diets'>{diets}</h4>
				</div>
			</div>
    	</React.Fragment>
	)
}