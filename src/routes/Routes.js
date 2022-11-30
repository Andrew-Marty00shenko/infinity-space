import Public from "./Public";
import Private from "./Private";

const Routes = () => {
    const isAuth = false;

    return isAuth ? <Private /> : <Public />
}

export default Routes;