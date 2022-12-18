import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { contract } from "../../utils/contract/contract";

import LandingHeader from "../../components/Landing/LandingHeader/LandingHeader";
import MainSection from "../../components/Landing/MainSection/MainSection";
import ContractAddressSection from "../../components/Landing/ContractAddressSection/ContractAddressSection";
import SliderSection from "../../components/Landing/SliderSection/SliderSection";
import DashboardSection from "../../components/Landing/DashboardSection/DashboardSection";
import FaqSection from "../../components/Landing/FaqSection/FaqSection";
import SocialLinkSection from "../../components/Landing/SocialLinksSection/SocialLinksSection";
import LandingFooter from "../../components/Landing/LandingFooter/LandingFooter";

import "./Landing.scss";

const Landing = () => {
    const [data, setData] = useState({
        totalUsers: 0,
        totalProfit: 0,
    });
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        contract.methods
            .getGlobals()
            .call()
            .then(res => {
                setData({
                    totalUsers: res[0],
                    totalProfit: res[1]
                });
                setLoadingData(false);
            });
    }, [])

    return <div className="landing">
        <Routes>
            <Route path="/" element={<>
                <LandingHeader />
                <MainSection data={data} loadingData={loadingData} />
                <ContractAddressSection />
                <SliderSection />
                <DashboardSection />
                <FaqSection />
                <SocialLinkSection />
                <LandingFooter />
            </>}
            />
        </Routes>


    </div>
};

export default Landing;