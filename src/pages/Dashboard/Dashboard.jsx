import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Dashboard/Header/Header";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Main from "../../components/Dashboard/Main/Main";
import Contacts from "../../components/Dashboard/Contacts/Contacts";
import Presentation from "../../components/Dashboard/Presentation/Presentation";
import Preloader from "../../components/Common/Preloader/Preloader";
import InvestmentTools from "../../components/Dashboard/InvestmentTools/InvestmentTools";
import InvestmentToolsItem from "../../components/Dashboard/InvestmentTools/InvestmentToolsItem/InvestmentToolsItem";
import TravelClub from "../../components/Dashboard/TravelClub/TravelClub";
import TravelClubItem from "../../components/Dashboard/TravelClub/TravelClubItem/TravelClubItem";

import "./Dashboard.scss";
import LearningTools from "../../components/Dashboard/LearningTools/LearningTools";
import LearningToolsItem from "../../components/Dashboard/LearningTools/LearningToolsItem/LearningToolsItem";
import Program from "../../components/Dashboard/Program/Program";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
    }
  }, []);

  return (
    <>
      {/* {user === null && <Preloader />} */}
      <div className="dashboard">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={<Main />} />
          <Route
            path="/dashboard/investment-tools"
            element={<InvestmentTools />}
          />
          <Route
            path="/dashboard/travel-club/:id"
            element={<TravelClubItem />}
          />
          <Route path="/dashboard/travel-club" element={<TravelClub />} />
          <Route
            path="/dashboard/learning-tools/:id"
            element={<LearningToolsItem />}
          />
          <Route path="/dashboard/learning-tools" element={<LearningTools />} />
          <Route
            path="/dashboard/investment-tools/:id"
            element={<InvestmentToolsItem />}
          />
          <Route path="/dashboard/program" element={<Program />} />
          <Route path="/dashboard/presentation" element={<Presentation />} />
          <Route path="/dashboard/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;
