import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    },
});

export const { setSearchResults } = searchSlice.actions;

export const selectSearchResults = (state) => state.search.searchResults;

export default searchSlice.reducer;
