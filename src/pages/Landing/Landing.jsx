import { Route, Routes } from "react-router-dom";

import LandingHeader from "../../components/LandingHeader/LandingHeader";
import InfoProjectSection from "../../components/Landing/InfoProjectSection/InfoProjectSection";
import MainSection from "../../components/Landing/MainSection/MainSection";
import ContractAddressSection from "../../components/Landing/ContractAddressSection/ContractAddressSection";
import SliderSection from "../../components/Landing/SliderSection/SliderSection";
import DashboardSection from "../../components/Landing/DashboardSection/DashboardSection";
import FaqSection from "../../components/Landing/FaqSection/FaqSection";
import SocialLinkSection from "../../components/Landing/SocialLinksSection/SocialLinksSection";
import LandingFooter from "../../components/LandingFooter/LandingFooter";

import "./Landing.scss";

const Landing = () => {
    return <div className="landing">
        <LandingHeader />

        <Routes>
            <Route path="/" element={<>
                <MainSection />
                <InfoProjectSection />
                <ContractAddressSection />
                <SliderSection />
                <DashboardSection />
                <FaqSection />
                <SocialLinkSection />
            </>}
            />
        </Routes>

        <LandingFooter />
    </div>
};

export default Landing;