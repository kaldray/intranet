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
        }
    }
});

export const { setCollaboraters } = collaboratersSlice.actions;

export default collaboratersSlice.reducer;
