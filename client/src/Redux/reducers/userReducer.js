import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {},
    modifyUser: {}
};

export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
        },
        setModifyUser: (state, action) => {
            state.modifyUser = action.payload;
        }
    }
});

export const { setUser, setModifyUser } = userSlice.actions;

export default userSlice.reducer;
