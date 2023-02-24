import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiUser from "../../api/apiServer/apiUser";
import { contract } from "../../utils/contract/contract";
import i18next from "i18next";

const initialState = {
  wallet: null,
  user: null,
  loading: false,
  id: null,
  viewer: false,
};

export const loginUser = createAsyncThunk("user/login", async (address) => {
  const response = await contract.methods["isRegistered(address)"](address)
    .call()
    .then((res) => {
      if (res === true) {
        toast.success(i18next.t("global:welcome"), { autoClose: 1000 });

        localStorage.setItem("wallet_signed", address);

        return res;
      } else {
        toast.error(i18next.t("global:address-not-registered"));

        return res;
      }
    });

  return { address, response };
});

export const getUserData = createAsyncThunk(
  "user/dashboard",
  async (address) => {
    const idUser = await contract.methods["getIdByAddress(address)"](address)
      .call()
      .then((res) => res);

    const walletUser = await contract.methods["getAddressByID(uint256)"](idUser)
      .call()
      .then((res) => res);

    const userDataById = await contract.methods["getUserDataById(uint256)"](
      idUser
    )
      .call()
      .then((res) => res);

    return {
      idUser,
      walletUser,
      userDataById,
    };
  }
);

export const searchUser = createAsyncThunk("user/search", async (idUser) => {
  const userDataById = await contract.methods["getUserDataById(uint256)"](
    idUser
  )
    .call()
    .then((res) => res);

  const walletUser = await contract.methods["getAddressByID(uint256)"](idUser)
    .call()
    .then((res) => res);

  return {
    userDataById,
    walletUser,
  };
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    watch: (state, action) => {
      state.wallet = action.payload.account;
      apiUser.postLinkClicked(action.payload.uplineId);
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
    setViewer: (state) => {
      state.viewer = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
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
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = {
        id: action.payload.idUser,
        wallet: action.payload.walletUser,
        userData: action.payload.userDataById,
      };
    });
    builder.addCase(searchUser.fulfilled, (state, action) => {
      if (action.payload.user?.userId === "0") {
        toast.error("User with this ID is not exists!");
      } else {
        state.user = {
          id: action.payload.userDataById?.userId,
          wallet: action.payload.walletUser,
          userData: action.payload.userDataById,
        };
        state.wallet = action.payload.walletUser;
        state.viewer = true;
      }
    });
  },
});

export const { watch, setWallet, setViewer } = userSlice.actions;

export default userSlice.reducer;
