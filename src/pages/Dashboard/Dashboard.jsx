import { Route, Routes } from "react-router-dom";

import Header from "../../components/Dashboard/Header/Header";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Main from "../../components/Dashboard/Main/Main";

import "./Dashboard.scss";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 800) {
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    }, []);

    return <div className="dashboard">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Routes>
            <Route path='/dashboard' element={<Main />} />
        </Routes>
    </div>
};

export default Dashboard;