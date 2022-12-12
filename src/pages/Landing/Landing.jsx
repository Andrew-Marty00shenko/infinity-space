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

import MainHomeSection from "../../components/HomePage/MainSection/MainHomeSection";
import TransactionsSection from "../../components/HomePage/TransactionsSection/TransactionsSection";
import SupportSection from "../../components/HomePage/SupportSection/SupportSection";

import "./Landing.scss";

const Landing = () => {
    const [clickedSignIn, setClickedSignIn] = useState(false);
    const [clickedSignUp, setClickedSignUp] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const [data, setData] = useState({
        totalUsers: 0,
        totalProfit: 0,
    });

    useEffect(() => {
        contract.methods
            .getGlobals()
            .call()
            .then(res => setData({
                totalUsers: res[0],
                totalProfit: res[1]
            }))
    }, [])

    return <div className="landing">
        <Routes>
            <Route path="/" element={<>
                <LandingHeader setClickedSignIn={setClickedSignIn} setClickedSignUp={setClickedSignUp} />
                <MainSection data={data} setClickedSignUp={setClickedSignUp} />
                <ContractAddressSection />
                <SliderSection setClickedSignUp={setClickedSignUp} />
                <DashboardSection setClickedSignIn={setClickedSignIn} setClickedSignUp={setClickedSignUp} />
                <FaqSection />
                <SocialLinkSection />
                <LandingFooter />
            </>}
            />
            <Route path="/home-page" element={<>
                <LandingHeader setModalShow={setModalShow} clickedSignIn={clickedSignIn} clickedSignUp={clickedSignUp} />
                <MainHomeSection modalShow={modalShow} setModalShow={setModalShow} clickedSignIn={clickedSignIn} clickedSignUp={clickedSignUp} />
                <TransactionsSection />
                <SupportSection />
                <LandingFooter />
            </>}
            />
        </Routes>


    </div>
};

export default Landing;