import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slides/countSlide';
import searchReducer from './slides/searchSlice';
import userReducer from './slides/userSlice';
import orderReducer from './slides/orderSlide';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        search: searchReducer,
        user: userReducer,
        order: orderReducer,
    },
});
