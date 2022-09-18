import { createSlice } from "@reduxjs/toolkit";

const storage = JSON.parse(localStorage.getItem("token"));
const initialState = {
    currentUser: storage?.user ?? {},
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
