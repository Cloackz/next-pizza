import { configureStore } from '@reduxjs/toolkit';

import pizzas from './slices/itemsSlice';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    pizzas,
    filter,
    cart,
  },
});
