import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from '../../actions/index.js';

import axios from 'axios';

const initialForm = {
	title: '',
	score: '',
	healthScore: '',
	summary: '',
	diets: [],
	instructions: '',
};

const validateForm = function (form) {
	let errors = {};
	if (!form.title) {
		errors.title = 'Type a Title';
	} else {
		errors.title = '';
	}
	if (!form.score) {
		errors.score = 'Type a Score';
	} else if (!/^(?!$)(?:[0-9]{1,2}|100)$/gm.test(form.score)) {
		errors.score = 'The score must be between 0 and 100';
	} else {
		errors.score = '';
	}

	if (!form.healthScore) {
		errors.healthScore = 'Type a Health Score';
	} else if (!/^(?!$)(?:[0-9]{1,2}|100)$/gm.test(form.healthScore)) {
		errors.healthScore = 'The Health Score must be between 0 and 100';
	} else {
		errors.healthScore = '';
	}
	if (!form.summary) {
		errors.summary = 'Type a Summary or Description';
	} else {
		errors.summary = '';
	}
	if (!form.instructions) {
		errors.instructions = 'Type a Instructions';
	} else {
		errors.instructions = '';
	}
	return errors;
};

export default function Form() {
	const dispatch = useDispatch();

	const diets = useSelector((state) => state.diets);

	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		dispatch(getDiets());
	}, []);

	const handleChange = function (e) {
		setErrors(
			validateForm({
				...form,
				[e.target.name]: e.target.value,
			})
		);
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleChecked = function (e) {
		if (e.target.checked) {
			setForm({
				...form,
				diets: [...form.diets, e.target.id],
			});
		} else {
			setForm({
				...form,
				diets: [...form.diets].filter((diet) => e.target.id !== diet),
			});
		}
	};

	const handleSubmit = function (e) {
		e.preventDefault();
		if (
			!errors.title &&
			!errors.score &&
			!errors.healthScore &&
			!errors.summary &&
			!errors.instructions
		) {
			axios
				.post('http://localhost:3001/recipe', form)
				.then((recipe) => {
					alert('¡Something New to Cook! :)');
					setForm(initialForm);
				})
				.catch((error) =>
					alert('¡Oops!, an error occurred, try again')
				);
		} else {
			alert('Check your New Recipe, there is Something Wrong :(');
		}
	};

	return (
		<React.Fragment>
			<h1>Create a New Recipe!</h1>
			<form>
				<div>
					<div>
						<label htmlFor='title'>
							Title
							<input
								type='text'
								id='title'
								name='title'
								value={form.title}
								onChange={handleChange}
								placeholder='Title'
							/>
						</label>
						<label htmlFor='score'>
							Score
							<input
								type='text'
								id='score'
								name='score'
								value={form.score}
								onChange={handleChange}
								placeholder='Score'
							/>
						</label>
						<label htmlFor='healthScore'>
							Health Score
							<input
								type='text'
								id='healthScore'
								name='healthScore'
								value={form.healthScore}
								onChange={handleChange}
								placeholder='Health Score'
							/>
						</label>
						<label htmlFor='summary'>
							Summary
							<textarea
								name='summary'
								id='summary'
								value={form.summary}
								onChange={handleChange}
								placeholder='Summary'
							></textarea>
						</label>
					</div>
					<div>
						<div>
							<p>Diets</p>
							{diets.length &&
								diets.map((diet) => (
									<label
										htmlFor={diet.id
											.toLowerCase()
											.replace(' ', '')
											.replace('-', '')}
									>
										{diet.name}
										<input
											key={diet.id}
											id={diet.id
												.toLowerCase()
												.replace(' ', '')
												.replace('-', '')}
											type='checkbox'
											name={diet.name
												.toLowerCase()
												.replace(' ', '')
												.replace('-', '')}
											onChange={handleChecked}
										/>
									</label>
								))}
						</div>
						<label htmlFor='instructions'>
							Instructions
							<textarea
								name='instructions'
								id='instructions'
								value={form.instructions}
								onChange={handleChange}
								placeholder='Instructions'
							></textarea>
						</label>
					</div>
					<div>
						<button
							onClick={(e) => {
								e.preventDefault();
								setForm(initialForm);
								setErrors({});
							}}
						>
							Reset
						</button>
						<button onClick={handleSubmit}>Create</button>
					</div>
				</div>
			</form>
		</React.Fragment>
	);
}
