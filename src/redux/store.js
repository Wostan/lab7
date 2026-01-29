import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import favoritesReducer from './favoritesSlice';
import citiesReducer from './citiesSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        favorites: favoritesReducer,
        cities: citiesReducer,
    },
});