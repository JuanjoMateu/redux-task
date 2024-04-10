import { configureStore } from '@reduxjs/toolkit';
import userReducer from './todosSlice.js';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
