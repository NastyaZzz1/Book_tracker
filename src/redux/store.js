import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        products: productsSlice,
        cart: cartSlice,
    },
});