import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    modifyUser: {}
};

export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setModifyUser: (state, action) => {
            state.modifyUser = action.payload;
        }
    }
});

export const { setUser, setModifyUser } = userSlice.actions;

export default userSlice.reducer;
