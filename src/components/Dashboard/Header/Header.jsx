import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setWallet } from "../../../redux/slices/userSlice";

import { getBnbBalance, getBUSDBalance } from "../../../utils/contract/contract";

import Logo from "../../../assets/images/logo.png";

import "./Header.scss";

const Header = ({ showSidebar, setShowSidebar }) => {
    const [bnbBalance, setBnbBalance] = useState(null);
    const [busdBalance, setBusdBalance] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wallet = useSelector(state => state.user.wallet);
    const slicedAddressWallet = wallet.substring(0, 5)
        + "..."
        + wallet.substring(
            wallet.length - 5,
            wallet.length
        );

    const handleLogout = () => {
        localStorage.removeItem("wallet_signed");
        dispatch(setWallet(null));
        navigate('/');
    };

    useEffect(() => {
        (async () => {
            const balance = await getBnbBalance(wallet);
            setBnbBalance(balance);

            const BUSDBalance = await getBUSDBalance(wallet);
            setBusdBalance(BUSDBalance)
        })()
    }, []);

    return <header className="dashboard-header">
        <div className="dashboard-header__logo" onClick={handleLogout}>
            <img src={Logo} alt="logo" />
            Infinity Space
        </div>

        <div className="dashboard-header__info">
            <div className="info-busd-balance">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="22" rx="11" fill="#FFED4C" fillOpacity="0.08" />
                    <path d="M4 10.9929L5.75619 9.23661L7.51239 10.9929L5.75619 12.7492L4 10.9929ZM6.64381 8.34966L10.993 4L12.7492 5.75632L8.39976 10.1059L6.64381 8.34966ZM6.62514 13.6185L13.6187 6.62447L15.3749 8.38078L8.38121 15.3747L6.62514 13.6185ZM9.25027 16.2438L16.2438 9.24979L18 11.0061L11.0063 18L9.25027 16.2438Z" fill="#FFED4C" />
                </svg>
                {busdBalance} BUSD
            </div>
            <div className="info-bnb-balance">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="22" rx="11" fill="#FFED4C" fillOpacity="0.08" />
                    <path d="M4 10.9929L5.75619 9.23661L7.51239 10.9929L5.75619 12.7492L4 10.9929ZM6.64381 8.34966L10.993 4L12.7492 5.75632L8.39976 10.1059L6.64381 8.34966ZM6.62514 13.6185L13.6187 6.62447L15.3749 8.38078L8.38121 15.3747L6.62514 13.6185ZM9.25027 16.2438L16.2438 9.24979L18 11.0061L11.0063 18L9.25027 16.2438Z" fill="#FFED4C" />
                </svg>
                {bnbBalance} BNB
            </div>
            <div className="info-wallet">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="22" rx="11" fill="#24252B" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4034 9.49242H15.1663C15.1663 8.07691 14.3182 7.25 12.8812 7.25H9.11819C7.68116 7.25 6.83301 8.07691 6.83301 9.47436V12.5256C6.83301 13.9231 7.68116 14.75 9.11819 14.75H12.8812C14.3182 14.75 15.1663 13.9231 15.1663 12.5256V12.3956H13.4034C12.5852 12.3956 11.9219 11.749 11.9219 10.9513C11.9219 10.1535 12.5852 9.50686 13.4034 9.50686V9.49242ZM13.4034 10.1135H14.8552C15.0271 10.1135 15.1663 10.2493 15.1663 10.4168V11.4712C15.1643 11.6379 15.0262 11.7726 14.8552 11.7746H13.4367C13.0225 11.78 12.6603 11.5035 12.5663 11.1101C12.5193 10.866 12.5853 10.614 12.7468 10.4218C12.9082 10.2295 13.1486 10.1167 13.4034 10.1135ZM13.4663 11.2221H13.6034C13.7793 11.2221 13.9219 11.083 13.9219 10.9115C13.9219 10.74 13.7793 10.601 13.6034 10.601H13.4663C13.3822 10.6 13.3012 10.6319 13.2413 10.6896C13.1815 10.7473 13.1478 10.8259 13.1478 10.9079C13.1478 11.08 13.2898 11.2201 13.4663 11.2221ZM8.80708 9.49242H11.1589C11.3348 9.49242 11.4775 9.35338 11.4775 9.18187C11.4775 9.01036 11.3348 8.87133 11.1589 8.87133H8.80708C8.63261 8.87132 8.49059 9.00817 8.48856 9.17826C8.48855 9.35036 8.63057 9.49044 8.80708 9.49242Z" fill="white" />
                </svg>
                {slicedAddressWallet}
            </div>
        </div>

        <button onClick={handleLogout}>
            Disconnect
            <svg height="15" width="20" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 384.971 384.971">
                <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
			C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
			C192.485,366.299,187.095,360.91,180.455,360.91z" fill="#fff" />
                <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
			c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
			c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" fill="#fff" />
            </svg>
        </button>

        <div className="dashboard-header__burger" onClick={() => setShowSidebar(!showSidebar)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M9 18H21" stroke="#717275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </header>
}

export default Header;