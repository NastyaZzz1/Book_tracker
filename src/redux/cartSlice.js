import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const isAdd = state.items.find((obj) => obj.id === action.payload.id);

            if(!isAdd){
                state.items.push({
                    ...action.payload
                });
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(el => el.id !== action.payload.id)
        },
        clearItems: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, deleteItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;