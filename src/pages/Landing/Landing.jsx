import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { contract } from "../../utils/contract/contract";
import apiTotalInfo from "../../api/apiServer/apiTotalInfo";

import LandingHeader from "../../components/Landing/LandingHeader/LandingHeader";
import MainSection from "../../components/Landing/MainSection/MainSection";
import SliderSection from "../../components/Landing/SliderSection/SliderSection";
import DashboardSection from "../../components/Landing/DashboardSection/DashboardSection";
import FaqSection from "../../components/Landing/FaqSection/FaqSection";
import SocialLinkSection from "../../components/Landing/SocialLinksSection/SocialLinksSection";
import LandingFooter from "../../components/Landing/LandingFooter/LandingFooter";
import View from "../../components/Landing/View/View";
import NotFound from "../NotFound/NotFound";

import "./Landing.scss";
import BenefitsSection from "../../components/Landing/BenefitsSection/BenefitsSection";
import CardsSection from "../../components/Landing/CardsSection/CardsSection";
import ProjectSection from "../../components/Landing/ProjectSection/ProjectSection";
import ResultsSection from "../../components/Landing/ResultsSection/ResultsSection";

const Landing = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    totalProfit: 0,
  });
  const [loadingData, setLoadingData] = useState(true);
  const [totals, setTotals] = useState({
    joinedAtLatestDay: 0,
    profitAtLatestDay: 0,
    transactionsAtLatestDay: 0,
  });

  useEffect(() => {
    contract.methods
      .getGlobals()
      .call()
      .then((res) => {
        setData({
          totalUsers: res[0],
          totalProfit: res[1],
        });
        setLoadingData(false);
      });
  }, []);

  useEffect(() => {
    apiTotalInfo
      .getTotals()
      .then(({ data }) => {
        setTotals({
          joinedAtLatestDay: data.joinedAtLatestDay,
          profitAtLatestDay: data.profitAtLatestDay,
          transactionsAtLatestDay: data.transactionsAtLatestDay,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="landing">
      <LandingHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainSection
                data={data}
                loadingData={loadingData}
                totals={totals}
              />
              <BenefitsSection />
              <CardsSection />
              <ProjectSection />
              <ResultsSection />
              <SliderSection />
              {/* <DashboardSection /> */}
              <FaqSection />
              <SocialLinkSection />
            </>
          }
        />
        <Route
          path="/:id"
          element={
            <>
              <MainSection
                data={data}
                loadingData={loadingData}
                totals={totals}
              />
              <SliderSection />
              <DashboardSection />
              <FaqSection />
              <SocialLinkSection />
            </>
          }
        />
        <Route path="/view" element={<View />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <LandingFooter />
    </div>
  );
};

export default Landing;
