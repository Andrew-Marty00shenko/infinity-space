import { Route, Routes } from "react-router-dom";

import LandingHeader from "../../components/LandingHeader/LandingHeader";
import InfoProjectSection from "../../components/Landing/InfoProjectSection/InfoProjectSection";
import MainSection from "../../components/Landing/MainSection/MainSection";
import ContractAddressSection from "../../components/Landing/ContractAddressSection/ContractAddressSection";
import SliderSection from "../../components/Landing/SliderSection/SliderSection";

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
            </>}
            />
        </Routes>
    </div>
};

export default Landing;