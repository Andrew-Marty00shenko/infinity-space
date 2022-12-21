import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBnbBalance } from "../../../utils/contract/contract";

import { setWallet } from "../../../redux/slices/userSlice";

import Logo from "../../../assets/images/logo.png";

import "./Sidebar.scss";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [bnbBalance, setBnbBalance] = useState(null);

    const wallet = useSelector(state => state.user.wallet);
    const slicedAddressWallet = wallet.substring(0, 8)
        + "..."
        + wallet.substring(
            wallet.length - 8,
            wallet.length
        );

    useEffect(() => {
        (async () => {
            const balance = await getBnbBalance(wallet);
            setBnbBalance(balance);
        })()
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("wallet_signed");
        dispatch(setWallet(null));
    };

    return <div className={classNames("sidebar", {
        "sidebar--closed": !showSidebar
    })}>
        <div className="sidebar__close-btn" onClick={() => setShowSidebar(!showSidebar)}>
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="#AFC6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>

        <div className="sidebar__logo" onClick={handleLogout}>
            <img src={Logo} alt="logo" />
            Infinity Space
        </div>

        <button
            onClick={handleLogout}
        >
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

        <ul className="sidebar__menu">
            <Link to="/dashboard" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/dashboard" || location.pathname === "/dashboard/user/levels" })}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.29701 5.2338C3.52243 4.27279 4.27279 3.52243 5.2338 3.29701V3.29701C6.06663 3.10165 6.93337 3.10165 7.7662 3.29701V3.29701C8.72721 3.52243 9.47757 4.27279 9.70299 5.2338V5.2338C9.89835 6.06663 9.89835 6.93337 9.70299 7.7662V7.7662C9.47757 8.72721 8.72721 9.47757 7.7662 9.70299V9.70299C6.93337 9.89835 6.06663 9.89835 5.2338 9.70299V9.70299C4.27279 9.47757 3.52243 8.72721 3.29701 7.7662V7.7662C3.10166 6.93337 3.10166 6.06663 3.29701 5.2338V5.2338Z" stroke="#717275" strokeWidth="1.5" />
                        <path d="M3.29701 16.2338C3.52243 15.2728 4.27279 14.5224 5.2338 14.297V14.297C6.06663 14.1017 6.93337 14.1017 7.7662 14.297V14.297C8.72721 14.5224 9.47757 15.2728 9.70299 16.2338V16.2338C9.89835 17.0666 9.89835 17.9334 9.70299 18.7662V18.7662C9.47757 19.7272 8.72721 20.4776 7.7662 20.703V20.703C6.93337 20.8983 6.06663 20.8983 5.2338 20.703V20.703C4.27279 20.4776 3.52243 19.7272 3.29701 18.7662V18.7662C3.10166 17.9334 3.10166 17.0666 3.29701 16.2338V16.2338Z" stroke="#717275" strokeWidth="1.5" />
                        <path d="M14.297 5.2338C14.5224 4.27279 15.2728 3.52243 16.2338 3.29701V3.29701C17.0666 3.10165 17.9334 3.10165 18.7662 3.29701V3.29701C19.7272 3.52243 20.4776 4.27279 20.703 5.2338V5.2338C20.8983 6.06663 20.8983 6.93337 20.703 7.7662V7.7662C20.4776 8.72721 19.7272 9.47757 18.7662 9.70299V9.70299C17.9334 9.89835 17.0666 9.89835 16.2338 9.70299V9.70299C15.2728 9.47757 14.5224 8.72721 14.297 7.7662V7.7662C14.1017 6.93337 14.1017 6.06663 14.297 5.2338V5.2338Z" stroke="#717275" strokeWidth="1.5" />
                        <path d="M14.297 16.2338C14.5224 15.2728 15.2728 14.5224 16.2338 14.297V14.297C17.0666 14.1017 17.9334 14.1017 18.7662 14.297V14.297C19.7272 14.5224 20.4776 15.2728 20.703 16.2338V16.2338C20.8983 17.0666 20.8983 17.9334 20.703 18.7662V18.7662C20.4776 19.7272 19.7272 20.4776 18.7662 20.703V20.703C17.9334 20.8983 17.0666 20.8983 16.2338 20.703V20.703C15.2728 20.4776 14.5224 19.7272 14.297 18.7662V18.7662C14.1017 17.9334 14.1017 17.0666 14.297 16.2338V16.2338Z" stroke="#717275" strokeWidth="1.5" />
                    </svg>
                    Dashboard
                </li>
            </Link>
            <Link to="/dashboard/team" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/dashboard/team" })}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18.433C3 16.4308 4.45485 14.7254 6.43204 14.4098L6.61013 14.3814C8.19336 14.1287 9.80664 14.1287 11.3899 14.3814L11.568 14.4098C13.5451 14.7254 15 16.4308 15 18.433C15 19.2984 14.2984 20 13.433 20H4.56697C3.70156 20 3 19.2984 3 18.433Z" stroke="#717275" strokeWidth="1.5" />
                        <path d="M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z" stroke="#717275" strokeWidth="1.5" />
                        <path d="M15 11C16.933 11 18.5 9.433 18.5 7.5C18.5 5.567 16.933 4 15 4M17.3899 20H19.433C20.2984 20 21 19.2984 21 18.433C21 16.4308 19.5451 14.7254 17.568 14.4098V14.4098C17.4494 14.3909 17.3293 14.3814 17.2093 14.3814C16.8895 14.3814 16.7902 14.3814 16.2412 14.3814" stroke="#717275" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    My team
                </li>
            </Link>
            <Link to="/dashboard/links" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/dashboard/links" })}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.08284 11.2778C6.6858 10.8783 6.03453 10.8861 5.65352 11.3009C1.66489 15.6435 1.02338 17.9479 4.22956 21.1739C7.43573 24.3999 9.74409 23.7726 14.1111 19.8108C14.5283 19.4324 14.5401 18.7811 14.1431 18.3816C13.7614 17.9976 13.1443 17.9881 12.7429 18.3517C12.3393 18.7173 11.9582 19.0494 11.5958 19.3488C10.4615 20.2861 9.62141 20.8097 8.96383 21.0599C8.36988 21.2858 7.96305 21.2771 7.57622 21.1507C7.1206 21.0018 6.50309 20.6243 5.64812 19.7641C4.79314 18.9038 4.41951 18.284 4.27343 17.8275C4.1494 17.4399 4.14315 17.033 4.37276 16.4404C4.62696 15.7844 5.15571 14.9475 6.09999 13.8191C6.40168 13.4585 6.73608 13.0794 7.10418 12.6781C7.47022 12.279 7.46457 11.6619 7.08284 11.2778ZM18.3988 14.1521C18.0171 13.768 18.0114 13.1509 18.3775 12.7518C18.7457 12.3504 19.0801 11.9712 19.3819 11.6106C20.3262 10.4821 20.8549 9.64522 21.1091 8.98919C21.3387 8.39665 21.3325 7.98977 21.2084 7.60217C21.0624 7.14564 20.6887 6.52582 19.8338 5.66556C18.9788 4.8053 18.3613 4.42786 17.9057 4.27897C17.5188 4.15255 17.112 4.14379 16.518 4.36975C15.8605 4.61991 15.0203 5.14349 13.8861 6.08079C13.5236 6.38032 13.1424 6.71245 12.7387 7.07818C12.3373 7.44175 11.7203 7.4323 11.3385 7.04821C10.9415 6.64872 10.9533 5.99751 11.3705 5.61906C15.7377 1.65704 18.0461 1.02966 21.2523 4.25571C24.4586 7.48176 23.817 9.78625 19.8281 14.129C19.4471 14.5438 18.7958 14.5516 18.3988 14.1521Z" fill="#717275" />
                        <path d="M9.19434 16.2394L16.2872 9.19016" stroke="#717275" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    My links
                </li>
            </Link>
            {/* <Link to="/dashboard/stats" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/dashboard/stats" })}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.87918 15.1208V10.9597M15.1208 15.1208V12M12 14.0805V8.87918M3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496Z" stroke="#717275" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    My stats
                </li>
            </Link> */}
            <Link to="/dashboard/presentation" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/dashboard/presentation" })}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z" stroke="#717275" strokeWidth="1.5" />
                        <path d="M12 15.5V11.5" stroke="#717275" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="9" r="0.5" stroke="#717275" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Marketing Presentation
                </li>
            </Link>
            <Link to="/dashboard/contacts" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/dashboard/contacts" })}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.78778 14.0196C5.83155 14.0344 5.87574 14.0448 5.91988 14.0512C5.96801 14.1644 6.03021 14.3107 6.10276 14.4818C6.27984 14.8994 6.51843 15.4643 6.76471 16.0535C7.26695 17.2552 7.77356 18.4939 7.88545 18.8485C8.02396 19.2868 8.17037 19.5848 8.33021 19.7883C8.41285 19.8935 8.50843 19.9853 8.62028 20.0549C8.67657 20.0899 8.73605 20.1186 8.79813 20.14C8.80086 20.141 8.80359 20.1419 8.80633 20.1428C9.12634 20.2636 9.4181 20.2133 9.60077 20.1518C9.69851 20.1188 9.7776 20.0791 9.83364 20.0469C9.86222 20.0304 9.88636 20.0151 9.90562 20.0021L9.91017 19.9991L12.7364 18.2366L16.0009 20.7394C16.0491 20.7763 16.1016 20.8073 16.1573 20.8316C16.5494 21.0027 16.9292 21.0624 17.2865 21.0136C17.6431 20.9649 17.9263 20.8151 18.1371 20.6464C18.3435 20.4813 18.4834 20.2963 18.5705 20.1589C18.615 20.0887 18.6485 20.0266 18.672 19.9791C18.6839 19.9552 18.6934 19.9346 18.7007 19.9181L18.7102 19.8963L18.7137 19.8877L18.7152 19.8841L18.7159 19.8824L18.7165 19.8808C18.7337 19.8379 18.7468 19.7935 18.7558 19.7482L21.736 4.72274C21.7456 4.67469 21.7504 4.62581 21.7504 4.57682C21.7504 4.13681 21.5846 3.71841 21.1947 3.46452C20.8616 3.24752 20.4904 3.23818 20.2558 3.25598C20.0028 3.27519 19.769 3.33766 19.6122 3.38757C19.5306 3.41355 19.4622 3.43861 19.4128 3.45773C19.3881 3.46734 19.3677 3.47559 19.3526 3.48188L19.3412 3.48666L2.6275 10.0432L2.62533 10.044C2.61468 10.0479 2.60101 10.053 2.58475 10.0593C2.55239 10.0719 2.50903 10.0896 2.45838 10.1126C2.35959 10.1574 2.22101 10.2273 2.0788 10.3247C1.85162 10.4803 1.32912 10.9064 1.41711 11.6097C1.48729 12.1708 1.87168 12.5154 2.10587 12.6811C2.23446 12.7721 2.35662 12.8371 2.44559 12.8795C2.48687 12.8991 2.57256 12.9339 2.60975 12.9491L2.61913 12.9529L5.78778 14.0196ZM19.9261 4.86786L19.9238 4.86888C19.9155 4.8725 19.9071 4.87596 19.8987 4.87928L3.16465 11.4438C3.15591 11.4472 3.14711 11.4505 3.13825 11.4536L3.12893 11.4571C3.11823 11.4613 3.1002 11.4686 3.07758 11.4788C3.06475 11.4846 3.05137 11.491 3.03772 11.4978C3.05647 11.5084 3.07442 11.5175 3.09036 11.5251C3.10567 11.5324 3.11735 11.5374 3.12374 11.54L6.26637 12.598C6.32389 12.6174 6.37752 12.643 6.42674 12.674L16.8035 6.59948L16.8132 6.59374C16.8208 6.58927 16.8307 6.58353 16.8426 6.5768C16.8662 6.56345 16.8987 6.54568 16.9373 6.52603C17.0093 6.48938 17.1245 6.43497 17.2543 6.39485C17.3447 6.36692 17.6112 6.28823 17.8993 6.38064C18.0771 6.43767 18.2612 6.56028 18.3809 6.76798C18.4404 6.87117 18.4721 6.97483 18.4874 7.06972C18.5282 7.2192 18.5218 7.36681 18.4898 7.49424C18.4211 7.76875 18.2282 7.98287 18.0527 8.14665C17.9024 8.28706 15.957 10.1629 14.0378 12.0147C13.0808 12.9381 12.1335 13.8525 11.4255 14.5359L10.9604 14.9849L16.8323 19.4867C16.967 19.5349 17.0466 19.5325 17.0835 19.5274C17.1273 19.5214 17.1633 19.5045 17.1999 19.4752C17.241 19.4424 17.2769 19.398 17.3037 19.3557L17.3048 19.354L20.1953 4.78102C20.1523 4.79133 20.109 4.80361 20.0672 4.81691C20.0198 4.83198 19.9808 4.84634 19.9549 4.85637C19.9421 4.86134 19.9329 4.86511 19.9278 4.86719L19.9261 4.86786ZM11.4649 17.2618L10.2934 16.3636L10.0095 18.1693L11.4649 17.2618ZM9.2187 14.5814L10.3837 13.4567C11.0918 12.7732 12.0391 11.8588 12.9963 10.9352L13.9688 9.997L7.44877 13.8138L7.48376 13.8963C7.66146 14.3154 7.90111 14.8827 8.14869 15.4751C8.33382 15.918 8.52741 16.3844 8.70374 16.8162L8.98677 15.0158C9.01406 14.8422 9.09886 14.692 9.2187 14.5814Z" fill="#717275" />
                    </svg>
                    Contact us
                </li>
            </Link>
            <Link to="/dashboard/web3-academy" onClick={() => setShowSidebar(false)}>
                <li className={classNames({ "active": location.pathname === "/dashboard/web3-academy" })}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.7805 9.50473C15.3728 8.06635 13.9344 6.62795 12.496 7.22023L9.81913 8.32247C9.14103 8.60169 8.60254 9.14018 8.32332 9.81827L7.22108 12.4951C6.62881 13.9335 8.06719 15.3719 9.50558 14.7796L12.1825 13.6774C12.8606 13.3982 13.399 12.8597 13.6783 12.1816L14.7805 9.50473ZM13.0671 8.60725C13.2726 8.52264 13.4781 8.72812 13.3935 8.9336L12.2912 11.6105C12.1643 11.9187 11.9196 12.1635 11.6113 12.2904L8.93445 13.3926C8.72897 13.4772 8.52349 13.2718 8.6081 13.0663L9.71034 10.3894C9.83726 10.0812 10.082 9.83641 10.3903 9.70949L13.0671 8.60725Z" fill="#AFC6FF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.286 0.0305112C11.096 0.0210796 10.9057 0.0210796 10.7158 0.0305112C9.9824 0.0669215 9.30724 0.280012 8.55458 0.629287C7.82185 0.969313 6.97042 1.46089 5.89326 2.0828L5.83225 2.11803C4.75507 2.73993 3.90363 3.2315 3.2428 3.69604C2.56399 4.17323 2.04187 4.65139 1.64365 5.26829C1.5405 5.4281 1.44534 5.59292 1.35853 5.76215C1.02338 6.41546 0.870337 7.10672 0.79649 7.93318C0.724598 8.73775 0.724603 9.7209 0.724609 10.9647V11.0352C0.724603 12.279 0.724598 13.2621 0.79649 14.0667C0.870337 14.8931 1.02338 15.5844 1.35853 16.2377C1.44534 16.4069 1.5405 16.5718 1.64365 16.7316C2.04187 17.3485 2.56399 17.8266 3.2428 18.3038C3.90361 18.7684 4.75501 19.2599 5.83213 19.8818L5.89324 19.9171C6.97041 20.539 7.82185 21.0306 8.55458 21.3706C9.30724 21.7199 9.9824 21.9329 10.7158 21.9694C10.9057 21.9788 11.096 21.9788 11.286 21.9694C12.0194 21.9329 12.6945 21.7199 13.4472 21.3706C14.1799 21.0306 15.0314 20.539 16.1085 19.9171L16.1696 19.8818C17.2467 19.2599 18.0981 18.7684 18.759 18.3038C19.4378 17.8266 19.9599 17.3485 20.3581 16.7316C20.4613 16.5718 20.5564 16.4069 20.6433 16.2377C20.9784 15.5844 21.1314 14.8931 21.2053 14.0667C21.2772 13.2621 21.2772 12.279 21.2772 11.0352V10.9647C21.2772 9.72094 21.2772 8.73774 21.2053 7.93318C21.1314 7.10672 20.9784 6.41546 20.6433 5.76215C20.5564 5.59292 20.4613 5.42809 20.3581 5.26829C19.9599 4.65139 19.4378 4.17323 18.759 3.69604C18.0981 3.2315 17.2467 2.73993 16.1695 2.11802L16.1085 2.0828C15.0314 1.46089 14.1799 0.969313 13.4472 0.629287C12.6945 0.280012 12.0194 0.0669215 11.286 0.0305112ZM10.7901 1.52867C10.9306 1.52169 11.0712 1.52169 11.2116 1.52867C11.6845 1.55214 12.1639 1.6874 12.8158 1.98992C13.4807 2.29848 14.2746 2.75606 15.389 3.39945C16.5034 4.04285 17.2967 4.50162 17.8963 4.92318C18.4843 5.33648 18.8411 5.68404 19.0979 6.08179C19.1741 6.1999 19.2445 6.32173 19.3086 6.44681C19.5247 6.86803 19.6473 7.35086 19.7112 8.06668C19.7765 8.7968 19.7772 9.71315 19.7772 10.9999C19.7772 12.2867 19.7765 13.2031 19.7112 13.9332C19.6473 14.649 19.5247 15.1318 19.3086 15.5531C19.2445 15.6781 19.1741 15.8 19.0979 15.9181C18.8411 16.3158 18.4843 16.6634 17.8963 17.0767C17.2967 17.4982 16.5034 17.957 15.389 18.6004C14.2746 19.2438 13.4807 19.7014 12.8158 20.0099C12.1639 20.3125 11.6845 20.4477 11.2116 20.4712C11.0712 20.4782 10.9306 20.4782 10.7901 20.4712C10.3173 20.4477 9.83788 20.3125 9.18599 20.0099C8.52107 19.7014 7.72714 19.2438 6.61275 18.6004C5.49836 17.957 4.70512 17.4982 4.10544 17.0767C3.5175 16.6634 3.16065 16.3158 2.9039 15.9181C2.82766 15.8 2.75733 15.6781 2.69316 15.5531C2.47707 15.1318 2.3545 14.649 2.29054 13.9332C2.2253 13.2031 2.22461 12.2867 2.22461 10.9999C2.22461 9.71315 2.2253 8.7968 2.29054 8.06668C2.3545 7.35086 2.47707 6.86803 2.69316 6.44681C2.75732 6.32173 2.82766 6.1999 2.9039 6.08179C3.16065 5.68405 3.5175 5.33648 4.10544 4.92318C4.70512 4.50162 5.49836 4.04285 6.61275 3.39945C7.72714 2.75606 8.52107 2.29848 9.18599 1.98992C9.83788 1.6874 10.3173 1.55214 10.7901 1.52867Z" fill="#AFC6FF" />
                    </svg>
                    Web 3.0 Academy
                </li>
            </Link>
        </ul>

        <div className="sidebar__wallet-info">
            <div>
                <div className="info-busd-balance">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="22" height="22" rx="11" fill="#FFED4C" fillOpacity="0.08" />
                        <path d="M4 10.9929L5.75619 9.23661L7.51239 10.9929L5.75619 12.7492L4 10.9929ZM6.64381 8.34966L10.993 4L12.7492 5.75632L8.39976 10.1059L6.64381 8.34966ZM6.62514 13.6185L13.6187 6.62447L15.3749 8.38078L8.38121 15.3747L6.62514 13.6185ZM9.25027 16.2438L16.2438 9.24979L18 11.0061L11.0063 18L9.25027 16.2438Z" fill="#FFED4C" />
                    </svg>
                    0 BUSD
                </div>
                <div className="info-bnb-balance">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="22" height="22" rx="11" fill="#FFED4C" fillOpacity="0.08" />
                        <path d="M4 10.9929L5.75619 9.23661L7.51239 10.9929L5.75619 12.7492L4 10.9929ZM6.64381 8.34966L10.993 4L12.7492 5.75632L8.39976 10.1059L6.64381 8.34966ZM6.62514 13.6185L13.6187 6.62447L15.3749 8.38078L8.38121 15.3747L6.62514 13.6185ZM9.25027 16.2438L16.2438 9.24979L18 11.0061L11.0063 18L9.25027 16.2438Z" fill="#FFED4C" />
                    </svg>
                    {bnbBalance} BNB
                </div>
            </div>
            <div className="info-wallet">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="22" rx="11" fill="#24252B" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.4034 9.49242H15.1663C15.1663 8.07691 14.3182 7.25 12.8812 7.25H9.11819C7.68116 7.25 6.83301 8.07691 6.83301 9.47436V12.5256C6.83301 13.9231 7.68116 14.75 9.11819 14.75H12.8812C14.3182 14.75 15.1663 13.9231 15.1663 12.5256V12.3956H13.4034C12.5852 12.3956 11.9219 11.749 11.9219 10.9513C11.9219 10.1535 12.5852 9.50686 13.4034 9.50686V9.49242ZM13.4034 10.1135H14.8552C15.0271 10.1135 15.1663 10.2493 15.1663 10.4168V11.4712C15.1643 11.6379 15.0262 11.7726 14.8552 11.7746H13.4367C13.0225 11.78 12.6603 11.5035 12.5663 11.1101C12.5193 10.866 12.5853 10.614 12.7468 10.4218C12.9082 10.2295 13.1486 10.1167 13.4034 10.1135ZM13.4663 11.2221H13.6034C13.7793 11.2221 13.9219 11.083 13.9219 10.9115C13.9219 10.74 13.7793 10.601 13.6034 10.601H13.4663C13.3822 10.6 13.3012 10.6319 13.2413 10.6896C13.1815 10.7473 13.1478 10.8259 13.1478 10.9079C13.1478 11.08 13.2898 11.2201 13.4663 11.2221ZM8.80708 9.49242H11.1589C11.3348 9.49242 11.4775 9.35338 11.4775 9.18187C11.4775 9.01036 11.3348 8.87133 11.1589 8.87133H8.80708C8.63261 8.87132 8.49059 9.00817 8.48856 9.17826C8.48855 9.35036 8.63057 9.49044 8.80708 9.49242Z" fill="white" />
                </svg>
                {slicedAddressWallet}
            </div>
        </div>

        <ul className="sidebar__links">
            <a href="https://t.me/Infinity_Space_Notifications_bot" target="_blank">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4985 0.787737L1.20095 5.91549C0.293455 6.27999 0.298705 6.78624 1.03445 7.01199L4.44845 8.07699L12.3475 3.09324C12.721 2.86599 13.0622 2.98824 12.7817 3.23724L6.38196 9.01299H6.38045L6.38196 9.01374L6.14646 12.5327C6.49146 12.5327 6.6437 12.3745 6.8372 12.1877L8.49545 10.5752L11.9447 13.123C12.5807 13.4732 13.0375 13.2932 13.1957 12.5342L15.46 1.86324C15.6917 0.933987 15.1052 0.513237 14.4985 0.787737Z" fill="#717275" />
                </svg>
            </a>
            <a href="https://twitter.com/InSpace_Web3" target="_blank">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.875 2.50002L14.1875 2.78127L15.3125 1.37502L13.3438 1.93752C10.8125 -0.874978 6.875 2.21877 8 4.75002C3.5 4.75002 1.25 1.37502 1.25 1.37502C1.25 1.37502 -0.4375 3.90627 2.375 5.87502L0.6875 5.31252C0.6875 7.00002 1.8125 8.12502 3.78125 8.68752H1.8125C2.9375 10.9375 4.90625 10.9375 4.90625 10.9375C4.90625 10.9375 3.21875 12.3438 0.125 12.3438C9.40625 16.8438 15.0312 8.40627 14.1875 3.90627L15.875 2.50002Z" fill="#717275" />
                </svg>
            </a>
            <a href="https://www.youtube.com/@Infinity-Space" target="_blank">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6217 2.65241C17.5172 2.27876 17.318 1.93843 17.0433 1.66437C16.7687 1.39031 16.4279 1.19182 16.054 1.0881C14.6506 0.712909 9.00873 0.712909 9.00873 0.712909C9.00873 0.712909 3.37755 0.703909 1.95948 1.0881C1.58621 1.19227 1.24612 1.39098 0.972085 1.66501C0.698053 1.93904 0.499346 2.27913 0.395171 2.65241C0.128658 4.08916 -0.00260327 5.54772 0.00310833 7.00897C0.000507838 8.46319 0.131749 9.91456 0.395171 11.3447C0.499683 11.7182 0.698449 12.0585 0.972386 12.3331C1.24632 12.6076 1.58623 12.8071 1.95948 12.9124C3.36292 13.2876 9.00873 13.2876 9.00873 13.2876C9.00873 13.2876 14.6365 13.2876 16.054 12.9124C16.4279 12.8075 16.7685 12.6083 17.043 12.3337C17.3176 12.0591 17.5169 11.7186 17.6217 11.3447C17.8799 9.91541 18.0059 8.46191 17.9969 7.00897C18.0059 5.54647 17.8827 4.09072 17.6217 2.65241ZM7.20648 9.70166V4.30447L11.9028 7.00897L7.20648 9.70166Z" fill="#717275" />
                </svg>
            </a>
        </ul>
    </div>
};

export default Sidebar;