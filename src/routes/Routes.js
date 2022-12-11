import { useSelector } from "react-redux";

import Public from "./Public";
import Private from "./Private";

const Routes = () => {
    const wallet = useSelector(state => state.user.wallet);

    return wallet !== null ? <Private /> : <Public />
}

export default Routes;