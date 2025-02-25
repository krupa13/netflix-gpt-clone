import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from '../utils/moviesSlice';
import { thunk } from "redux-thunk";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default appStore;