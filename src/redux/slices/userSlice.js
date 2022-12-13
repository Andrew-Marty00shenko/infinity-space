import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import apiUser from "../../api/apiServer/apiUser";
import { contract } from "../../utils/contract/contract";

const initialState = {
	wallet: null,
	user: null,
	loading: false,
	id: null,
};


export const loginUser = createAsyncThunk(
	'user/login',
	async (address) => {
		const response = await contract.methods[
			'isRegistered(address)'
		](address)
			.call()
			.then(res => {
				if (res === true) {
					toast.success('Welcome');

					return res;
				} else {
					toast.error('This address is not registered');
				};
			});

		return { address, response };
	}
);

export const getUserData = createAsyncThunk(
	'user/dashboard',
	async (address) => {
		const idUser = await contract.methods[
			'getIdByAddress(address)'
		](address)
			.call()
			.then(res => res);

		const walletUser = await contract.methods[
			'getAddressByID(uint256)'
		](idUser)
			.call()
			.then(res => res);

		const userDataById = await contract.methods[
			'getUserDataById(uint256)'
		](idUser)
			.call()
			.then(res => res);

		return {
			idUser,
			walletUser,
			userDataById
		};
	}
);


const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		watch: (state, action) => {
			state.wallet = action.payload.account;
			apiUser.postLinkClicked(action.payload.uplineId)
		},
	},
	extraReducers: builder => {
		builder.addCase(loginUser.pending, state => {
			state.loading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			if (action.payload.response === true) {
				state.wallet = action.payload.address;
				state.loading = false;
			} else {
				state.wallet = null;
				state.loading = false;
			}
		});
		builder.addCase(loginUser.rejected, state => {
			state.loading = false;
		});
		builder.addCase(getUserData.fulfilled, (state, action) => {
			state.user = {
				id: action.payload.idUser,
				wallet: action.payload.walletUser,
				userData: action.payload.userDataById,
			}
		});
	}
});

export const { watch } = userSlice.actions;

export default userSlice.reducer;