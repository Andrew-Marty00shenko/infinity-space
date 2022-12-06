import { ToastContainer } from "react-toastify";
import Routes from "./routes/Routes";

const App = () => {
    return <div className="wrapper">
        <Routes />
        <ToastContainer />
    </div>
};

export default App;