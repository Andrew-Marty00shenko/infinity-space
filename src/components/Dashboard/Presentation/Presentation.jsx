import FirstSlide from "./FirstSlide/FirtsSlide";
import FourthSlide from "./FourthSlide/FourthSlide";
import FifthSlide from "./FifthSlide/FifthSlide";
import "./Presentation.scss";
import SecondSlide from "./SecondSlide/SecondSlide";
import ThirdSlide from "./ThirdSlide/ThirdSlide";
import SixthSlide from "./SixthSlide/SixthSlide";
import SeventhSlide from "./SeventhSlide/SeventhSlide";
import EighthSlide from "./EighthSlide/EighthSlide";
import NinethSlide from "./NinethSlide/NinethSlide";
import TenthSlide from "./TenthSlide/TenthSlide";
import EleventhSlide from "./EleventhSlide/EleventhSlide";
import TwelvethSlide from "./TwelvethSlide/TwelvethSlide";
import ThirdteenthSlide from "./ThirdteenthSlide/ThirdteenthSlide";
import FourteenthSlide from "./FourteenthSlide/FourteenthSlide";
import FifteenthSlide from "./FifteenthSlide/FifteenthSlide";
import SixteenthSlide from "./SixteenthSlide/SixteenthSlide";
import SeventeenthSlide from "./SeventeenthSlide/SeventeenthSlide";
import EighteenthSlide from "./EighteenthSlide/EighteenthSlide";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../redux/slices/userSlice";
import { useEffect } from "react";

const Presentation = () => {
    const wallet = useSelector(state => state.user.wallet);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData(wallet));
    }, []);

    return <div className="presentation">
        <FirstSlide />
        <SecondSlide />
        <ThirdSlide />
        <FourthSlide />
        <FifthSlide />
        <SixthSlide />
        <SeventhSlide />
        <EighthSlide />
        <NinethSlide />
        <TenthSlide />
        <EleventhSlide />
        <TwelvethSlide />
        <ThirdteenthSlide />
        <FourteenthSlide />
        <FifteenthSlide />
        <SixteenthSlide />
        <SeventeenthSlide />
        <EighteenthSlide />
    </div>
}

export default Presentation;