import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: 0,
	sortId: {
		name: 'выберите сортировку',
		sortProp: '',
	},
	searchValue: '',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategory(state, action) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sortId = action.payload;
		},
		setSearch(state, action) {
			state.searchValue = action.payload;
		},
	},
});

export const { setCategory, setSort, setSearch } = filterSlice.actions;

export default filterSlice.reducer;
