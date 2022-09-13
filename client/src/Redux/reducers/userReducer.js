import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
};

export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
