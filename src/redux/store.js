import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import levelsReducer from "./slices/levelsSlice";
import transactionsReducer from "./slices/transactionsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    levels: levelsReducer,
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
