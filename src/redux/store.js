import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import productsSlice from './productsSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        products: productsSlice,
    },
});