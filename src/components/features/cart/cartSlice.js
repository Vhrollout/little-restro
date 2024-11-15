import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.cartItems.find(i => i.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(i => i.id !== action.payload.id);
        },
        incrementItem: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementItem: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});


export const { addToCart, removeFromCart, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;

