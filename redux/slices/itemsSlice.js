import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async params => {
	const { API_URL, categoryApi, sortApi, sortByApi, searchApi, currentPage, perPage } = params;
	const fecthParams = `&${categoryApi}&sortBy=${sortByApi}&order=${sortApi}${searchApi}&page=${currentPage}&limit=${perPage}`;
	const { data } = await axios.get(`${API_URL}${fecthParams}`);
	return data;
});

const initialState = {
	items: [],
	totalCount: 8,
	status: 'loading | success | error',
	currentPage: 1,
	perPage: 4,
};

const itemsSlice = createSlice({
	name: 'pizzas',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
	extraReducers: {
		[fetchPizzas.pending]: state => {
			state.items = [];
			state.status = 'loading';
		},
		[fetchPizzas.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		},
		[fetchPizzas.rejected]: state => {
			state.items = [];
			state.status = 'error';
		},
	},
});

export const selectItems = state => state.pizzas;

export const { setItems, setCurrentPage } = itemsSlice.actions;

export default itemsSlice.reducer;
