import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collaboraters: []
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
        }
    }
});

export const { setCollaboraters, filterCollaboraters } = collaboratersSlice.actions;

export default collaboratersSlice.reducer;
