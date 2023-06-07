import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Dashboard/Header/Header";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Main from "../../components/Dashboard/Main/Main";
import Levels from "../../components/Dashboard/Levels/Levels";
import Level from "../../components/Dashboard/Levels/Level/Level";
import Contacts from "../../components/Dashboard/Contacts/Contacts";
import Presentation from "../../components/Dashboard/Presentation/Presentation";
import Preloader from "../../components/Common/Preloader/Preloader";
import InvestmentTools from "../../components/Dashboard/InvestmentTools/InvestmentTools";

import "./Dashboard.scss";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (location.pathname === "/dashboard/team") {
      navigate("/dashboard/team");
    } else if (location.pathname.includes("/dashboard/user/levels")) {
      navigate("/dashboard/user/levels");
    } else if (location.pathname === "/dashboard/links") {
      navigate("/dashboard/links");
    } else if (location.pathname === "/dashboard/presentation") {
      navigate("/dashboard/presentation");
    } else if (location.pathname === "/dashboard/contacts") {
      navigate("/dashboard/contacts");
    } else if (location.pathname === "/dashboard/stats") {
      navigate("/dashboard/stats");
    } else if (location.pathname === "/dashboard/airdrop") {
      navigate("/dashboard/airdrop");
    } else {
      navigate("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, []);

  return (
    <>
      {user === null && <Preloader />}
      <div className="dashboard">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Routes>
          <Route path="/dashboard" element={<Main />} />
          <Route
            path="/dashboard/investment-tools"
            element={<InvestmentTools />}
          />
          <Route path="/dashboard/user/levels" element={<Levels />} />
          <Route path="/dashboard/user/levels/:id" element={<Level />} />
          <Route path="/dashboard/presentation" element={<Presentation />} />
          <Route path="/dashboard/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;
