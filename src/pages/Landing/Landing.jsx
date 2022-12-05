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

import MainHomeSection from "../../components/HomePage/MainSection/MainHomeSection";
import TransactionsSection from "../../components/HomePage/TransactionsSection/TransactionsSection";

import "./Landing.scss";
import SupportSection from "../../components/HomePage/SupportSection/SupportSection";

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
            <Route path="/home-page" element={<>
                <MainHomeSection />
                <TransactionsSection />
                <SupportSection />
            </>}
            />
        </Routes>

        <LandingFooter />
    </div>
};

export default Landing;