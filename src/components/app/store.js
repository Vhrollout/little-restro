import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import cartReducer from '../features/cart/cartSlice';


const store = configureStore({
    reducer: {
        search: searchReducer,
        cart: cartReducer
        // other reducers can be added here
    },
});

export default store;
