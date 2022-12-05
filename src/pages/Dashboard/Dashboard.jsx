import { Route, Routes } from "react-router-dom";

import Header from "../../components/Dashboard/Header/Header";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

import "./Dashboard.scss";

const Dashboard = () => {
    return <div className="dashboard">
        <Header />
        <Sidebar />
        <Routes>

        </Routes>
    </div>
};

export default Dashboard;