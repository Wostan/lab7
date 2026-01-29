import { createSlice } from '@reduxjs/toolkit';

const loadFromQwerty = () => {
    try {
        const serialisedState = localStorage.getItem('favorites');
        if (serialisedState === null) return [];
        return JSON.parse(serialisedState);
    } catch {
        return [];
    }
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: loadFromQwerty(),
    },
    reducers: {
        addToFavorites: (state, action) => {
            const exists = state.items.find(city => city.geonameId === action.payload.geonameId);
            if (!exists) {
                state.items.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.items));
            }
        },
        removeFromFavorites: (state, action) => {
            state.items = state.items.filter(city => city.geonameId !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.items));
        }
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;