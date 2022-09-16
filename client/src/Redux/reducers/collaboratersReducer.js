import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collaboraters: [],
    filteredCollaboraters: []
};

export const collaboratersSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setCollaboraters: (state, action) => {
            state.collaboraters = action.payload;
        },
        filterCollaboraters: (state, action) => {
            state.collaboraters = state.collaboraters.filter(({ id }) => {
                return id !== action.payload;
            });
            state.filteredCollaboraters = state.filteredCollaboraters.filter(({ id }) => {
                return id !== action.payload;
            });
        },
        setFilteredCollaboraters: (state, action) => {
            state.filteredCollaboraters = action.payload;
        }
    }
});

export const { setCollaboraters, filterCollaboraters, setFilteredCollaboraters } =
    collaboratersSlice.actions;

export default collaboratersSlice.reducer;
