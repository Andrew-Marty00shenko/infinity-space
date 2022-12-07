import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../../components/Dashboard/Header/Header";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Main from "../../components/Dashboard/Main/Main";
import Team from "../../components/Dashboard/Team/Team";
import Links from "../../components/Dashboard/Links/Links";
import Stats from "../../components/Dashboard/Stats/Stats";
import Contacts from "../../components/Dashboard/Contacts/Contacts";

import "./Dashboard.scss";

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
            <Route path='/dashboard/team' element={<Team />} />
            <Route path='/dashboard/links' element={<Links />} />
            <Route path='/dashboard/stats' element={<Stats />} />
            <Route path='/dashboard/contacts' element={<Contacts />} />
        </Routes>
    </div>
};

export default Dashboard;