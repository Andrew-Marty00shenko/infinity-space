import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

import AllTransactions from "../AllTransactions/AllTransactions";
import { getUserData } from "../../../redux/slices/userSlice";

import "./Main.scss";

const data = [
    {
        name: "Page A",
        uv: 0,
        pv: 0,
        amt: 0
    },
    {
        name: "Page B",
        uv: 2000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 1000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2480,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 1500,
        pv: 4300,
        amt: 2100
    }
];

const Main = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const wallet = useSelector(state => state.user.wallet);
    const slicedAddressWallet = wallet.substring(0, 5)
        + "..."
        + wallet.substring(
            wallet.length - 5,
            wallet.length
        );

    let timeStamp = Number(user?.userData.regDate);
    let dateFormat = new Date(timeStamp * 1000);
    let registerDate = dateFormat.getDate() +
        "." + (dateFormat.getMonth() + 1) +
        "." + dateFormat.getFullYear();

    useEffect(() => {
        dispatch(getUserData(wallet));
    }, []);

    const handleCopy = (num) => {
        if (num === 1) {
            toast.success('Personal link copied');
        } else {
            toast.success('Address copied');
        }
    };

    return <div className="main">
        <div className="main-info">
            <Container fluid>
                <Row>
                    <Col xl={5}>
                        <div className="main-info__user-card">
                            <div className="user-card__top">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="60" height="60" rx="30" fill="white" fillOpacity="0.15" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M37.0587 23.7214C37.0587 27.6374 33.9189 30.7775 30.0001 30.7775C26.0826 30.7775 22.9414 27.6374 22.9414 23.7214C22.9414 19.8054 26.0826 16.6667 30.0001 16.6667C33.9189 16.6667 37.0587 19.8054 37.0587 23.7214ZM29.9997 43.3333C24.2162 43.3333 19.333 42.3933 19.333 38.7666C19.333 35.1386 24.2469 34.2319 29.9997 34.2319C35.7845 34.2319 40.6663 35.1719 40.6663 38.7986C40.6663 42.4267 35.7525 43.3333 29.9997 43.3333Z" fill="#AFC6FF" />
                                </svg>
                                <div>
                                    <p>
                                        ID {user?.userData.userId || 0}
                                    </p>
                                    <span>
                                        invited {user?.userData.refCount || 0} users
                                    </span>
                                </div>
                            </div>
                            <div className="user-card__bottom">
                                joined {user?.userData.regDate !== '0' ? registerDate : ' '} {`“by id${user?.userData.partnerId || 0}”`}
                            </div>
                        </div>
                    </Col>
                    <Col xl={7} className="link">
                        <div className="main-info__user-link">
                            <div>
                                <div>
                                    <div className="user-link__top">
                                        Personal link
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    Your referral link for inviting new partners
                                                </Tooltip>
                                            }
                                        >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z" fill="#BFBFC1" />
                                            </svg>
                                        </OverlayTrigger>
                                    </div>
                                    <div className="user-link__bottom">
                                        {`InfinitySpace.io/b/${user?.id}`}
                                    </div>
                                </div>
                                <div className="user-link__copy">
                                    <CopyToClipboard text={`${window.location.origin}/?user_id=${user?.id}`} onCopy={() => handleCopy(1)}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_38_618)">
                                                <path d="M6.66699 13.3333V15.6667C6.66699 16.6001 6.66699 17.0668 6.84865 17.4233C7.00844 17.7369 7.2634 17.9919 7.57701 18.1517C7.93353 18.3333 8.40024 18.3333 9.33366 18.3333H15.667C16.6004 18.3333 17.0671 18.3333 17.4236 18.1517C17.7372 17.9919 17.9922 17.7369 18.152 17.4233C18.3337 17.0668 18.3337 16.6001 18.3337 15.6667V9.33334C18.3337 8.39992 18.3337 7.93321 18.152 7.57669C17.9922 7.26308 17.7372 7.00812 17.4236 6.84833C17.0671 6.66667 16.6004 6.66667 15.667 6.66667H13.3337M4.33366 13.3333H10.667C11.6004 13.3333 12.0671 13.3333 12.4236 13.1517C12.7372 12.9919 12.9922 12.7369 13.152 12.4233C13.3337 12.0668 13.3337 11.6001 13.3337 10.6667V4.33334C13.3337 3.39992 13.3337 2.93321 13.152 2.57669C12.9922 2.26308 12.7372 2.00812 12.4236 1.84833C12.0671 1.66667 11.6004 1.66667 10.667 1.66667H4.33366C3.40024 1.66667 2.93353 1.66667 2.57701 1.84833C2.2634 2.00812 2.00844 2.26308 1.84865 2.57669C1.66699 2.93321 1.66699 3.39992 1.66699 4.33334V10.6667C1.66699 11.6001 1.66699 12.0668 1.84865 12.4233C2.00844 12.7369 2.2634 12.9919 2.57701 13.1517C2.93353 13.3333 3.40024 13.3333 4.33366 13.3333Z" stroke="#AFC6FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_38_618">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                        <div className="main-info__user-wallet">
                            {slicedAddressWallet}
                            <CopyToClipboard text={wallet} onCopy={() => handleCopy(2)}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_38_599)">
                                        <path d="M6.66699 13.3333V15.6667C6.66699 16.6001 6.66699 17.0668 6.84865 17.4233C7.00844 17.7369 7.2634 17.9919 7.57701 18.1517C7.93353 18.3333 8.40024 18.3333 9.33366 18.3333H15.667C16.6004 18.3333 17.0671 18.3333 17.4236 18.1517C17.7372 17.9919 17.9922 17.7369 18.152 17.4233C18.3337 17.0668 18.3337 16.6001 18.3337 15.6667V9.33334C18.3337 8.39992 18.3337 7.93321 18.152 7.57669C17.9922 7.26308 17.7372 7.00812 17.4236 6.84833C17.0671 6.66667 16.6004 6.66667 15.667 6.66667H13.3337M4.33366 13.3333H10.667C11.6004 13.3333 12.0671 13.3333 12.4236 13.1517C12.7372 12.9919 12.9922 12.7369 13.152 12.4233C13.3337 12.0668 13.3337 11.6001 13.3337 10.6667V4.33334C13.3337 3.39992 13.3337 2.93321 13.152 2.57669C12.9922 2.26308 12.7372 2.00812 12.4236 1.84833C12.0671 1.66667 11.6004 1.66667 10.667 1.66667H4.33366C3.40024 1.66667 2.93353 1.66667 2.57701 1.84833C2.2634 2.00812 2.00844 2.26308 1.84865 2.57669C1.66699 2.93321 1.66699 3.39992 1.66699 4.33334V10.6667C1.66699 11.6001 1.66699 12.0668 1.84865 12.4233C2.00844 12.7369 2.2634 12.9919 2.57701 13.1517C2.93353 13.3333 3.40024 13.3333 4.33366 13.3333Z" stroke="#AFC6FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_38_599">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </CopyToClipboard>
                        </div>
                    </Col>
                </Row>
                <Row className="main-info__stats">
                    <Col xl={3} sm={4} xs={4}>
                        <div className="main-info__stats-block">
                            <div className="stats-block__top">
                                Partners
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip>
                                            The number of users registered through your referral link
                                        </Tooltip>
                                    }
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z" fill="#BFBFC1" />
                                    </svg>
                                </OverlayTrigger>
                            </div>
                            <div className="stats-block__bottom">
                                <p>
                                    {user?.userData.refCount || 0}
                                </p>
                                <span>
                                    + 0
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} sm={4} xs={4}>
                        <div className="main-info__stats-block">
                            <div className="stats-block__top">
                                Team
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip>
                                            The number of users registered through a referral link of one of your partners
                                        </Tooltip>
                                    }
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z" fill="#BFBFC1" />
                                    </svg>
                                </OverlayTrigger>
                            </div>
                            <div className="stats-block__bottom">
                                <p>
                                    0
                                </p>
                                <span>
                                    + 0
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} sm={4} xs={4}>
                        <div className="main-info__stats-block pre-last">
                            <div className="stats-block__top">
                                Ratio
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip>
                                            Amount of money earned in relation to money spent
                                        </Tooltip>
                                    }
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z" fill="#BFBFC1" />
                                    </svg>
                                </OverlayTrigger>
                            </div>
                            <div className="stats-block__bottom">
                                <p>
                                    {user?.userData.ratio || 0} %
                                </p>
                                <span>
                                    + 0%
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className="main-info__stats-block last">
                            <div>
                                <div className="stats-block__top">
                                    Profits
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip>
                                                Total income from all levels
                                            </Tooltip>
                                        }
                                    >
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z" fill="#BFBFC1" />
                                        </svg>
                                    </OverlayTrigger>
                                </div>
                                <div className="stats-block__bottom">
                                    <p>
                                        {user?.userData.earned / 1e18 || 0}
                                    </p>
                                    <span>
                                        + 0
                                    </span>
                                </div>
                            </div>
                            <div className="chart">
                                <ResponsiveContainer>
                                    <AreaChart
                                        data={data}
                                        margin={{
                                            top: 0,
                                            right: 0,
                                            left: 0,
                                            bottom: 0
                                        }}
                                    >
                                        <Area type="monotone" dataKey="uv" stroke="#39EB8B" fill="#417c5d" />
                                    </AreaChart>

                                </ResponsiveContainer>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="main-program">
            <div className="main-program__top">
                <h2>
                    Program
                </h2>
            </div>

            <div className="main-program__content">
                <svg width="549" height="8" viewBox="0 0 549 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="549" height="8" fill="white" fillOpacity="0.05" />
                </svg>
                <svg width="225" height="8" viewBox="0 0 225 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="225" height="8" fill="#184BFF" />
                </svg>
                <div className="elips"></div>
                <h3>
                    Infinity Space
                </h3>
                <p>
                    {user?.userData.earned / 1e18 || 0} BUSD
                </p>
                <Link to="/dashboard/user/levels">
                    <button>
                        Let's go
                    </button>
                </Link>
            </div>
        </div>

        {/* <AllTransactions /> */}
    </div>
}

export default Main;