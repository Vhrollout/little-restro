import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    searchResults: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
    },
});

export const { setSearch, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
