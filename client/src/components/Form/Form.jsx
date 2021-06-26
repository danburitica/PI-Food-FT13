import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from '../../actions/index.js';

import './Form.css';

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
	}, [dispatch]);

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
			form.title &&
			!errors.score &&
			form.score &&
			!errors.healthScore &&
			form.healthScore &&
			!errors.summary &&
			form.summary &&
			!errors.instructions &&
			form.instructions &&
			form.diets.length
		) {
			axios
				.post('http://localhost:3001/recipe', form)
				.then((recipe) => {
					alert('¡Something New to Cook! :)');
					setForm(initialForm);
					document.getElementById('createRecipe').reset();
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
			<div className='form-main-container'>
				<h1 className='form-title'>Create a New Recipe!</h1>
				<form id='createRecipe'>
					<div className='form-container'>
						<div className='form-left-container'>
							<p className={errors.title ? 'danger' : 'pass'}>
								{errors.title}
							</p>
							<input
								type='text'
								id='title'
								name='title'
								value={form.title}
								onChange={handleChange}
								placeholder='Title'
								className={errors.title && 'danger'}
							/>
							<p className={errors.score ? 'danger' : 'pass'}>
								{errors.score}
							</p>
							<input
								type='text'
								id='score'
								name='score'
								value={form.score}
								onChange={handleChange}
								placeholder='Score'
								className={errors.score && 'danger'}
							/>
							<p
								className={
									errors.healthScore ? 'danger' : 'pass'
								}
							>
								{errors.healthScore}
							</p>
							<input
								type='text'
								id='healthScore'
								name='healthScore'
								value={form.healthScore}
								onChange={handleChange}
								placeholder='Health Score'
								className={errors.healthScore && 'danger'}
							/>
							<p className={errors.summary ? 'danger' : 'pass'}>
								{errors.summary}
							</p>
							<textarea
								name='summary'
								id='summary'
								value={form.summary}
								onChange={handleChange}
								placeholder='Summary'
								className={errors.summary && 'danger'}
							></textarea>
							<p
								className={
									errors.instructions ? 'danger' : 'pass'
								}
							>
								{errors.instructions}
							</p>
							<textarea
								name='instructions'
								id='instructions'
								value={form.instructions}
								onChange={handleChange}
								placeholder='Instructions'
								className={errors.instructions && 'danger'}
							></textarea>
						</div>
						<div className='form-right-container'>
							<div className='form-diets'>
								{diets.length > 0 &&
									diets.map((diet) => (
										<label
											htmlFor={diet.id
												.toLowerCase()
												.replace(' ', '')
												.replace('-', '')}
										>
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
											{diet.name}
										</label>
									))}
							</div>
						</div>
					</div>
					<div className='form-buttons'>
						<button
							className='btn-reset'
							onClick={(e) => {
								e.preventDefault();
								setForm(initialForm);
								setErrors({});
								document.getElementById('createRecipe').reset();
							}}
						>
							Reset
						</button>
						<button className='btn-create' onClick={handleSubmit}>
							Create
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
}
