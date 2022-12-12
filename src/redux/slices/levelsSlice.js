import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { contract } from "../../utils/contract/contract";

const initialState = {
    levels: []
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
    extraReducers: builder => {
        builder.addCase(getLevelsInfo.fulfilled, (state, action) => {
            const levels = action.payload.response;

            state.levels = levels;
        });
    }
});

export default levelsSlice.reducer;