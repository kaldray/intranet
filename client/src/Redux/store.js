import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import collaboratersReducer from "./reducers/collaboratersReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        collaboraters: collaboratersReducer
    }
});
