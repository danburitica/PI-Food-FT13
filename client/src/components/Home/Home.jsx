import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions/index.js';
import loadingImg from '../../img/loading-img.svg';

import './Home.css';

import Card from '../Card/Card.jsx';
import Search from '../Search/Search.jsx';

export default function Home() {
	const dispatch = useDispatch();

	const searchRecipes = useSelector((state) => state.recipesByName);
	const allRecipes = useSelector((state) => state.recipes);

	const [search, setSearch] = useState(false);
	const [page, setPage] = useState(1);
	const [offset, setOffset] = useState(0);
	const [filter, setFilter] = useState('');
	const [recipes, setRecipes] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [orderedRecipes, setOrderedRecipes] = useState([]);

	useEffect(() => {
		dispatch(getRecipes());
	}, []);

	//BÚSQUEDA
	useEffect(() => {
		if (search) {
			let searchedRecipes = [...searchRecipes];
			setRecipes(searchedRecipes);
		} else {
			setRecipes(allRecipes);
		}
	}, [searchRecipes, search]);

	//FILTROS
	useEffect(() => {
		setOffset(0);
		setPage(1);
		if (filter) {
			let filterRecipes = [...allRecipes].filter((recipe) => {
				if (recipe.diets) {
					return recipe.diets.includes(filter);
				}
			});
			filterRecipes.length && setFilteredRecipes(filterRecipes);
		} else {
			setFilteredRecipes([]);
		}
	}, [filter]);

	//ORDENAMIENTOS
	function handleSort(e) {
		if (filteredRecipes.length) {
			if (e.target.value === 'asc') {
				const asc = [...filteredRecipes].sort((a, b) => {
					return a.title.toLowerCase() > b.title.toLowerCase()
						? 1
						: -1;
				});
				setFilteredRecipes(asc);
			}
			if (e.target.value === 'des') {
				const des = [...filteredRecipes].sort((a, b) => {
					return a.title.toLowerCase() < b.title.toLowerCase()
						? 1
						: -1;
				});
				setFilteredRecipes(des);
			}
			if (e.target.value === 'high') {
				const high = [...filteredRecipes].sort((a, b) => {
					return (a.score || a.spoonacularScore) <
						(b.score || b.spoonacularScore)
						? 1
						: -1;
				});
				setFilteredRecipes(high);
			}
			if (e.target.value === 'low') {
				const low = [...filteredRecipes].sort((a, b) => {
					return (a.score || a.spoonacularScore) >
						(b.score || b.spoonacularScore)
						? 1
						: -1;
				});
				setFilteredRecipes(low);
			}
		} else {
			if (e.target.value === 'asc') {
				const asc = [...allRecipes].sort((a, b) => {
					return a.title.toLowerCase() > b.title.toLowerCase()
						? 1
						: -1;
				});
				setOrderedRecipes(asc);
			}
			if (e.target.value === 'des') {
				const des = [...allRecipes].sort((a, b) => {
					return a.title.toLowerCase() < b.title.toLowerCase()
						? 1
						: -1;
				});
				setOrderedRecipes(des);
			}
			if (e.target.value === 'high') {
				const high = [...allRecipes].sort((a, b) => {
					return (a.score || a.spoonacularScore) <
						(b.score || b.spoonacularScore)
						? 1
						: -1;
				});
				setOrderedRecipes(high);
			}
			if (e.target.value === 'low') {
				const low = [...allRecipes].sort((a, b) => {
					return (a.score || a.spoonacularScore) >
						(b.score || b.spoonacularScore)
						? 1
						: -1;
				});
				setOrderedRecipes(low);
			}
		}
	}

	//PAGINADO
	const numRecipes = 9;
	const maxPage = filteredRecipes.length
		? Math.ceil(filteredRecipes.length / numRecipes)
		: Math.ceil(allRecipes.length / numRecipes);

	const next = function () {
		if (page < maxPage) {
			setOffset(offset + numRecipes);
			setPage(page + 1);
		}
	};

	const previous = function () {
		if (page > 1) {
			setOffset(offset - numRecipes);
			setPage(page - 1);
		}
	};

	useEffect(() => {
		if (filteredRecipes.length) {
			let pageRecipes = [...filteredRecipes].slice(
				offset,
				offset + numRecipes
			);
			setRecipes(pageRecipes);
		} else if (orderedRecipes.length) {
			let pageRecipes = [...orderedRecipes].slice(
				offset,
				offset + numRecipes
			);
			setRecipes(pageRecipes);
		} else {
			let pageRecipes = [...allRecipes].slice(
				offset,
				offset + numRecipes
			);
			setRecipes(pageRecipes);
		}
	}, [allRecipes, filteredRecipes, orderedRecipes, page, offset]);

	return (
		<React.Fragment>
			<div>
				<div>
					<div className='filter-sort'>
						<div>
							<span>Sort: </span>
							<select onChange={handleSort}>
								<option default value=''></option>
								<option value='asc'>A-Z</option>
								<option value='des'>Z-A</option>
							</select>

							<span>Order: </span>
							<select onChange={handleSort}>
								<option default value=''></option>
								<option value='high'>High Score</option>
								<option value='low'>Low Score</option>
							</select>

							<span>Filter By Diet: </span>
							<select className='filter-select' onChange={(e) => setFilter(e.target.value)}>
								<option default value=''>
									Select a Diet
								</option>
								<option value='gluten free'>Gluten Free</option>
								<option value='dairy free'>Ketogenic</option>
								<option value='vegetarian'>Vegetarian</option>
								<option value='lacto ovo vegetarian'>
									Lacto-Vegetarian
								</option>
								<option value='lacto ovo vegetarian'>
									Ovo-Vegetarian
								</option>
								<option value='vegan'>Vegan</option>
								<option value='pescatarian'>Pescetarian</option>
								<option value='paleolithic'>Paleo</option>
								<option value='primal'>Primal</option>
								<option value='whole 30'>Whole30</option>;
							</select>
						</div>
						<Search setSearch={setSearch} />
					</div>
				</div>
			</div>
			<div className='recipes-home'>
				{recipes.length ? (
					[...recipes].map((recipe) => (
						<Card
							key={recipe.id}
							id={recipe.id}
							title={recipe.title}
							image={recipe.image}
							diets={recipe.diets && recipe.diets.join(', ')}
						/>
					))
				) : (
					<img className='loading' src={loadingImg} alt='Loading' />
				)}
			</div>
			<div className='pagination'>
				<button className='btn-page' onClick={previous}>PREVIOUS</button>
				<span className='num-page'>{page}</span>
				<button className='btn-page' onClick={next}>NEXT</button>
			</div>
		</React.Fragment>
	);
}
