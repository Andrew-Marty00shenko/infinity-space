import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { contract } from "../../utils/contract/contract";

const initialState = {
    levels: [],
    loading: true
};

export const getLevelsInfo = createAsyncThunk(
    'user/levels',
    async (id) => {
        const response = await contract.methods[
            'getLevelsById(uint256)'
        ](id)
            .call()
            .then(res => res)

        return { response };
    }
);

const levelsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        buyingLevel: (state) => {
            state.loading = true;
        }
    },
    extraReducers: builder => {
        builder.addCase(getLevelsInfo.pending, state => {
            state.loading = true;
        });
        builder.addCase(getLevelsInfo.fulfilled, (state, action) => {
            const levels = action.payload.response;

            state.loading = false;
            state.levels = levels;
        });
    }
});

export const { buyingLevel } = levelsSlice.actions;

export default levelsSlice.reducer;