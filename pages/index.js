import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas, selectItems } from '/redux/slices/itemsSlice';

import GridBlock from '/components/ui/GridBlock/GridBlock';
import Layout from '/components/Layout/Layout';
import Categories from '/components/ui/Categories/Categories';
import Sort from '/components/ui/Sort/Sort';
import PizzaBlock from '/components/PizzaBlock/PizzaBlock';
import Pagination from '/components/ui/Pagination/Pagination';

import styles from '/styles/Main.module.scss';

const Index = () => {
	const dispatch = useDispatch();
	const { categoryId, sortId, searchValue } = useSelector(state => state.filter);

	const { items, totalCount, status, currentPage, perPage } = useSelector(selectItems);

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCount / perPage); i++) {
		pageNumbers.push(i);
	}

	const getPizzas = async () => {
		const API_URL = `https://63998b6316b0fdad7740477b.mockapi.io/items?`;
		const categoryApi = categoryId > 0 ? `category=${categoryId}` : '';
		const sortApi = sortId.sortProp.includes('-') ? 'desc' : 'asc';
		const sortByApi = sortId.sortProp.replace('-', '');
		const searchApi = searchValue ? `&search=${searchValue}` : '';

		dispatch(
			fetchPizzas({
				API_URL,
				categoryApi,
				sortApi,
				sortByApi,
				searchApi,
				currentPage,
				perPage,
			})
		);

		// await axios
		//   .get(
		//     `${API_URL}&${categoryApi}&sortBy=${sortByApi}&order=${sortApi}${searchApi}`
		//   )
		//   .then((res) => {
		//     dispatch(setItems(res.data))
		//     setIsLoading(false)
		//   })
		//   .catch((err) => {
		//     console.log(err)
		//     setIsLoading(false)
		//   })
	};

	useEffect(() => {
		getPizzas();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryId, sortId.sortProp, searchValue, currentPage]);

	return (
		<Layout page="main">
			<GridBlock className={styles.ControlBar}>
				<Categories />
				<Sort />
			</GridBlock>
			{status === 'error' ? (
				<div className={styles.ErrorContainer}>
					<h1>Ошибка сервера</h1>
					<p>К сожалению произошла ошибка. Попробуйте еще раз!</p>
				</div>
			) : (
				<PizzaBlock items={items} status={status} />
			)}
			{totalCount > perPage ? <Pagination /> : null}
		</Layout>
	);
};

export default Index;
