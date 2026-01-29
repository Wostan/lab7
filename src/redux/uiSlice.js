import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    isModalOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
    },
});

export const { toggleTheme, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;