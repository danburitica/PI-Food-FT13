import React from 'react';

import landingImg from '../../img/landing-img.jpg'
import './Landing.css';

export default function Landing() {
	return (
		<React.Fragment>
			<div className='background-container'>
				<div className='welcome'>
					<h1>Welcome to <span className='brand-text'>LET'S COOK</span>!</h1>
				</div>
				<div className='principal-container'>
					<div className='info'>
						<p>
							Find healthy recipes for everyone!
						</p>
						<p>
							Cooking instructions and scores for each dish.
						</p>
						<button className='btn-info'>¡Explore!</button>
					</div>
					<div className='principal-img'>
						<img src={landingImg} alt=""/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}