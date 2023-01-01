import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiTransactions from "../../api/apiServer/apiTransactions";

const initialState = {
    transactions: [],
    total: null
};

export const getAllTransactions = createAsyncThunk(
    'user/transactions',
    async ({ skip, limit }) => {
        const response = await apiTransactions.getAllTransactions(skip, limit);

        return response;
    }
);

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllTransactions.fulfilled, (state, action) => {
            if (JSON.stringify(state.transactions) == JSON.stringify(action.payload.data.txs)) {
                state.transactions = action.payload.data.txs
            } else {
                state.transactions = state.transactions.concat(action.payload.data.txs);
            }

            state.total = action.payload.data.total;
        });
    }
});

export default transactionsSlice.reducer;