import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets } from '../../actions/index.js';

const initialForm = {
	name: '',
	score: '',
	healthScore: '',
	summary: '',
	diets: {
		glutenfree: false,
		ketogenic: false,
		vegetarian: false,
		lactovegetarian: false,
		ovovegetarian: false,
		vegan: false,
		pescetarian: false,
		paleo: false,
		primal: false,
		whole30: false,
	},
	instructions: '',
};

export default function Form() {
	const [form, setForm] = useState(initialForm);
	const dispatch = useDispatch();
	const diets = useSelector((state) => state.diets);

	useEffect(() => {
		dispatch(getDiets());
	}, []);

	const handleChange = function (e) {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleChecked = (e) => {
		setForm({
			...form,
			diets: {
				...form.diets,
				[e.target.name]: e.target.checked,
			},
		});
	};

	const handleSubmit = function (e) {
		e.preventDefault();
	};

	return (
		<React.Fragment>
			<h1>Create a New Recipe!</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<div>
						<label htmlFor='name'>
							Name
							<input
								type='text'
								id='name'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder='Name'
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
						<button onClick={() => setForm(initialForm)}>
							Reset
						</button>
						<button>Create</button>
					</div>
				</div>
			</form>
		</React.Fragment>
	);
}
