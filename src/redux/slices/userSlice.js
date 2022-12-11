import { createSlice } from "@reduxjs/toolkit";
import apiUser from "../../api/apiServer/apiUser";

const initialState = {
    wallet: null,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.wallet = action.payload;
        },
        watch: (state, action) => {
            state.wallet = action.payload.account;
            apiUser.postLinkClicked(action.payload.uplineId)
        },
    },
});

export const { login, watch } = userSlice.actions;

export default userSlice.reducer;