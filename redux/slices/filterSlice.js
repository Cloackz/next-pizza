import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sortId: {
    name: 'популярности',
    sortProp: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryId = action.payload
    },
    setSort(state, action) {
      state.sortId = action.payload
    },
  },
})

export const { setCategory, setSort } = filterSlice.actions

export default filterSlice.reducer
