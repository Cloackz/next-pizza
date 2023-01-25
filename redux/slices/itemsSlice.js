import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (params) => {
    const { API_URL, categoryApi, sortApi, sortByApi, searchApi } = params
    const { data } = await axios.get(
      `${API_URL}&${categoryApi}&sortBy=${sortByApi}&order=${sortApi}${searchApi}`
    )
    return data
  }
)

const initialState = {
  items: [],
  status: 'loading',
}

const itemsSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.items = []
      state.status = 'loading'
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.items = []
      state.status = 'error'
    },
  },
})

export const { setItems } = itemsSlice.actions

export default itemsSlice.reducer
