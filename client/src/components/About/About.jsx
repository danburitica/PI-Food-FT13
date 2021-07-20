import React from 'react';
import './About.css';
import aboutImg from '../../img/cooking.png';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';
import henry from '../../img/henry.jpg';

export default function About() {
	return (
		<React.Fragment>
			<div className='about-background-container'>
				<div className='about-main-container'>
					<h1>About</h1>
					<div className='about-info'>
						<p>
							<strong><i>Let's Cook</i></strong> was developed during the bootcamp at{' '}
							<strong>
								<a href='https://soyhenry.com/' target="_blank">Henry.</a>
							</strong>
							The goal was to build an App using React JS,
							Redux, Node JS, Express JS, Sequelize and
							PostgreSQL. In addition to{' '}
							<strong>
								<a href='https://spoonacular.com/' target="_blank">
									Spoonacular's Food Api.
								</a>
							</strong>
							<br />
							Connect the concepts learned in the course.
							<br />
							Learn best practices.
							<br />
							Learn and practice GIT workflow.
							<br />
							Use and practice some testing.
						</p>
						<img src={aboutImg} alt='Chef Image' />
					</div>
					<div className='about-contact'>
						<h2>Contact Me!</h2>
						<p>
							My name is Daniel Buriticá. You can find me on LinkedIn and GitHub. You can also
							learn more about Henry by clicking below.
						</p>
						<div className='contact-icons'>
							<a href='https://www.linkedin.com/in/danburitica/' target="_blank">
								<img src={linkedin} alt='Linkedin' />
							</a>
							<a href='https://github.com/danburitica/' target="_blank">
								<img src={github} alt='Github' />
							</a>
							<a href='https://soyhenry.com/' target="_blank">
								<img src={henry} alt='Soy Henry' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
