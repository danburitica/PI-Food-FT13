import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({id, title, image, diets}) {
	return (
		<React.Fragment>
			<div>
				<div>
					<img src={image} alt=""/>
				</div>
				<div>
					<Link to={`/recipes/${id}`}>
	                	<h2>{title}</h2>
	                </Link>
					<h4>{diets}</h4>
				</div>
			</div>
    	</React.Fragment>
	)
}