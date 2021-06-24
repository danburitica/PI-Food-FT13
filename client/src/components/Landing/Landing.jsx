import React from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../../img/landing-img.jpg';
import './Landing.css';

export default function Landing() {
	return (
		<React.Fragment>
			<div className='background-container'>
				<div className='principal-container'>
					<div>
						<h1 className='welcome'>
							Welcome to{' '}
						</h1>
						<span className='brand-text-landing'>
								LET'S COOK
							</span>
					</div>
					<div className='info'>
						<p>Find healthy recipes for everyone!</p>
						<p>Cooking instructions and scores for each dish.</p>
						<Link to='/recipes'>
							<button className='btn-info'>¡Explore!</button>
						</Link>
					</div>
				</div>
				<div className='principal-img'>
					<img src={landingImg} alt='' />
				</div>
			</div>
		</React.Fragment>
	);
}
