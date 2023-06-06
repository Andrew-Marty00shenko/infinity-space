import { useDispatch, useSelector } from "react-redux";

import Public from "./Public";
import Private from "./Private";
import { useEffect } from "react";
import { setWallet } from "../redux/slices/userSlice";

const Routes = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.user.wallet);

  useEffect(() => {
    if (localStorage.getItem("wallet_signed") !== null) {
      dispatch(setWallet(localStorage.getItem("wallet_signed")));
    }
  }, [wallet]);

  return wallet !== null ? <Private /> : <Public />;
};

export default Routes;
