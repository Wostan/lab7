import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchCities } from '../api/geonames';

export const fetchCities = createAsyncThunk(
    'cities/fetchByQuery',
    async (query, { rejectWithValue }) => {
        try {
            const data = await searchCities(query);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
        sortType: 'name',
        filterRegion: '',
    },
    reducers: {
        setSortType: (state, action) => {
            state.sortType = action.payload;
        },
        setFilterRegion: (state, action) => {
            state.filterRegion = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCities.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { setSortType, setFilterRegion } = citiesSlice.actions;
export default citiesSlice.reducer;