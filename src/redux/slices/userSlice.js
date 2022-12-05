import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wallet: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.wallet = action.payload;
        }
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;