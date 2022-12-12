import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./slices/userSlice";
import levelsReducer from "./slices/levelsSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        levels: levelsReducer
    },
});