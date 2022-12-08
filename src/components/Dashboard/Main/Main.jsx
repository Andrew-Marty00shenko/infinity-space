import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

import AllTransactions from "../AllTransactions/AllTransactions";

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
    const wallet = useSelector(state => state.user.wallet);
    const slicedAddressWallet = wallet.substring(0, 5)
        + "..."
        + wallet.substring(
            wallet.length - 5,
            wallet.length
        );

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
                                    <rect width="60" height="60" rx="30" fill="white" fill-opacity="0.15" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0587 23.7214C37.0587 27.6374 33.9189 30.7775 30.0001 30.7775C26.0826 30.7775 22.9414 27.6374 22.9414 23.7214C22.9414 19.8054 26.0826 16.6667 30.0001 16.6667C33.9189 16.6667 37.0587 19.8054 37.0587 23.7214ZM29.9997 43.3333C24.2162 43.3333 19.333 42.3933 19.333 38.7666C19.333 35.1386 24.2469 34.2319 29.9997 34.2319C35.7845 34.2319 40.6663 35.1719 40.6663 38.7986C40.6663 42.4267 35.7525 43.3333 29.9997 43.3333Z" fill="#AFC6FF" />
                                </svg>
                                <div>
                                    <p>
                                        ID 0
                                    </p>
                                    <span>
                                        invited 0 users
                                    </span>
                                </div>
                            </div>
                            <div className="user-card__bottom">
                                joined 01.06.2022 “by id169”
                            </div>
                        </div>
                    </Col>
                    <Col xl={7} className="link">
                        <div className="main-info__user-link">
                            <div>
                                <div>
                                    <div className="user-link__top">
                                        Personal link
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z" fill="#BFBFC1" />
                                        </svg>
                                    </div>
                                    <div className="user-link__bottom">
                                        InfinitySpace.io/b/ob2oe5
                                    </div>
                                </div>
                                <div className="user-link__copy">
                                    <CopyToClipboard text={'InfinitySpace.io/b/ob2oe5'} onCopy={() => handleCopy(1)}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_38_618)">
                                                <path d="M6.66699 13.3333V15.6667C6.66699 16.6001 6.66699 17.0668 6.84865 17.4233C7.00844 17.7369 7.2634 17.9919 7.57701 18.1517C7.93353 18.3333 8.40024 18.3333 9.33366 18.3333H15.667C16.6004 18.3333 17.0671 18.3333 17.4236 18.1517C17.7372 17.9919 17.9922 17.7369 18.152 17.4233C18.3337 17.0668 18.3337 16.6001 18.3337 15.6667V9.33334C18.3337 8.39992 18.3337 7.93321 18.152 7.57669C17.9922 7.26308 17.7372 7.00812 17.4236 6.84833C17.0671 6.66667 16.6004 6.66667 15.667 6.66667H13.3337M4.33366 13.3333H10.667C11.6004 13.3333 12.0671 13.3333 12.4236 13.1517C12.7372 12.9919 12.9922 12.7369 13.152 12.4233C13.3337 12.0668 13.3337 11.6001 13.3337 10.6667V4.33334C13.3337 3.39992 13.3337 2.93321 13.152 2.57669C12.9922 2.26308 12.7372 2.00812 12.4236 1.84833C12.0671 1.66667 11.6004 1.66667 10.667 1.66667H4.33366C3.40024 1.66667 2.93353 1.66667 2.57701 1.84833C2.2634 2.00812 2.00844 2.26308 1.84865 2.57669C1.66699 2.93321 1.66699 3.39992 1.66699 4.33334V10.6667C1.66699 11.6001 1.66699 12.0668 1.84865 12.4233C2.00844 12.7369 2.2634 12.9919 2.57701 13.1517C2.93353 13.3333 3.40024 13.3333 4.33366 13.3333Z" stroke="#AFC6FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
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
                                        <path d="M6.66699 13.3333V15.6667C6.66699 16.6001 6.66699 17.0668 6.84865 17.4233C7.00844 17.7369 7.2634 17.9919 7.57701 18.1517C7.93353 18.3333 8.40024 18.3333 9.33366 18.3333H15.667C16.6004 18.3333 17.0671 18.3333 17.4236 18.1517C17.7372 17.9919 17.9922 17.7369 18.152 17.4233C18.3337 17.0668 18.3337 16.6001 18.3337 15.6667V9.33334C18.3337 8.39992 18.3337 7.93321 18.152 7.57669C17.9922 7.26308 17.7372 7.00812 17.4236 6.84833C17.0671 6.66667 16.6004 6.66667 15.667 6.66667H13.3337M4.33366 13.3333H10.667C11.6004 13.3333 12.0671 13.3333 12.4236 13.1517C12.7372 12.9919 12.9922 12.7369 13.152 12.4233C13.3337 12.0668 13.3337 11.6001 13.3337 10.6667V4.33334C13.3337 3.39992 13.3337 2.93321 13.152 2.57669C12.9922 2.26308 12.7372 2.00812 12.4236 1.84833C12.0671 1.66667 11.6004 1.66667 10.667 1.66667H4.33366C3.40024 1.66667 2.93353 1.66667 2.57701 1.84833C2.2634 2.00812 2.00844 2.26308 1.84865 2.57669C1.66699 2.93321 1.66699 3.39992 1.66699 4.33334V10.6667C1.66699 11.6001 1.66699 12.0668 1.84865 12.4233C2.00844 12.7369 2.2634 12.9919 2.57701 13.1517C2.93353 13.3333 3.40024 13.3333 4.33366 13.3333Z" stroke="#AFC6FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
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
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77231 1.00777C6.23755 0.664075 7.76245 0.664075 9.22769 1.00777C11.3437 1.50412 12.9959 3.15631 13.4922 5.27231C13.8359 6.73755 13.8359 8.26245 13.4922 9.72769C12.9959 11.8437 11.3437 13.4959 9.22769 13.9922C7.76245 14.3359 6.23755 14.3359 4.77231 13.9922C2.65631 13.4959 1.00412 11.8437 0.507775 9.72769C0.164075 8.26245 0.164075 6.73755 0.507775 5.27231C1.00412 3.15631 2.65631 1.50412 4.77231 1.00777ZM6.99998 6.06405C7.3965 6.06405 7.71795 5.74261 7.71795 5.34609C7.71795 4.94957 7.3965 4.62812 6.99998 4.62812C6.60346 4.62812 6.28202 4.94957 6.28202 5.34609C6.28202 5.74261 6.60346 6.06405 6.99998 6.06405ZM6.99998 6.60252C7.29737 6.60252 7.53845 6.84361 7.53845 7.141V10.0129C7.53845 10.3102 7.29737 10.5513 6.99998 10.5513C6.70259 10.5513 6.46151 10.3102 6.46151 10.0129V7.141C6.46151 6.84361 6.70259 6.60252 6.99998 6.60252Z" fill="#BFBFC1" />
                                </svg>
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
                        <div className="main-info__stats-block">
                            <div className="stats-block__top">
                                Team
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77231 1.00777C6.23755 0.664075 7.76245 0.664075 9.22769 1.00777C11.3437 1.50412 12.9959 3.15631 13.4922 5.27231C13.8359 6.73755 13.8359 8.26245 13.4922 9.72769C12.9959 11.8437 11.3437 13.4959 9.22769 13.9922C7.76245 14.3359 6.23755 14.3359 4.77231 13.9922C2.65631 13.4959 1.00412 11.8437 0.507775 9.72769C0.164075 8.26245 0.164075 6.73755 0.507775 5.27231C1.00412 3.15631 2.65631 1.50412 4.77231 1.00777ZM6.99998 6.06405C7.3965 6.06405 7.71795 5.74261 7.71795 5.34609C7.71795 4.94957 7.3965 4.62812 6.99998 4.62812C6.60346 4.62812 6.28202 4.94957 6.28202 5.34609C6.28202 5.74261 6.60346 6.06405 6.99998 6.06405ZM6.99998 6.60252C7.29737 6.60252 7.53845 6.84361 7.53845 7.141V10.0129C7.53845 10.3102 7.29737 10.5513 6.99998 10.5513C6.70259 10.5513 6.46151 10.3102 6.46151 10.0129V7.141C6.46151 6.84361 6.70259 6.60252 6.99998 6.60252Z" fill="#BFBFC1" />
                                </svg>
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
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77231 1.00777C6.23755 0.664075 7.76245 0.664075 9.22769 1.00777C11.3437 1.50412 12.9959 3.15631 13.4922 5.27231C13.8359 6.73755 13.8359 8.26245 13.4922 9.72769C12.9959 11.8437 11.3437 13.4959 9.22769 13.9922C7.76245 14.3359 6.23755 14.3359 4.77231 13.9922C2.65631 13.4959 1.00412 11.8437 0.507775 9.72769C0.164075 8.26245 0.164075 6.73755 0.507775 5.27231C1.00412 3.15631 2.65631 1.50412 4.77231 1.00777ZM6.99998 6.06405C7.3965 6.06405 7.71795 5.74261 7.71795 5.34609C7.71795 4.94957 7.3965 4.62812 6.99998 4.62812C6.60346 4.62812 6.28202 4.94957 6.28202 5.34609C6.28202 5.74261 6.60346 6.06405 6.99998 6.06405ZM6.99998 6.60252C7.29737 6.60252 7.53845 6.84361 7.53845 7.141V10.0129C7.53845 10.3102 7.29737 10.5513 6.99998 10.5513C6.70259 10.5513 6.46151 10.3102 6.46151 10.0129V7.141C6.46151 6.84361 6.70259 6.60252 6.99998 6.60252Z" fill="#BFBFC1" />
                                </svg>
                            </div>
                            <div className="stats-block__bottom">
                                <p>
                                    0 %
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
                                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77231 1.00777C6.23755 0.664075 7.76245 0.664075 9.22769 1.00777C11.3437 1.50412 12.9959 3.15631 13.4922 5.27231C13.8359 6.73755 13.8359 8.26245 13.4922 9.72769C12.9959 11.8437 11.3437 13.4959 9.22769 13.9922C7.76245 14.3359 6.23755 14.3359 4.77231 13.9922C2.65631 13.4959 1.00412 11.8437 0.507775 9.72769C0.164075 8.26245 0.164075 6.73755 0.507775 5.27231C1.00412 3.15631 2.65631 1.50412 4.77231 1.00777ZM6.99998 6.06405C7.3965 6.06405 7.71795 5.74261 7.71795 5.34609C7.71795 4.94957 7.3965 4.62812 6.99998 4.62812C6.60346 4.62812 6.28202 4.94957 6.28202 5.34609C6.28202 5.74261 6.60346 6.06405 6.99998 6.06405ZM6.99998 6.60252C7.29737 6.60252 7.53845 6.84361 7.53845 7.141V10.0129C7.53845 10.3102 7.29737 10.5513 6.99998 10.5513C6.70259 10.5513 6.46151 10.3102 6.46151 10.0129V7.141C6.46151 6.84361 6.70259 6.60252 6.99998 6.60252Z" fill="#BFBFC1" />
                                    </svg>
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.28718 1.17962C10.7293 0.606792 13.2707 0.606792 15.7128 1.17962C19.2395 2.00687 21.9931 4.76052 22.8204 8.28719C23.3932 10.7293 23.3932 13.2707 22.8204 15.7128C21.9931 19.2395 19.2395 21.9931 15.7128 22.8204C13.2707 23.3932 10.7293 23.3932 8.28719 22.8204C4.76052 21.9931 2.00687 19.2395 1.17962 15.7128C0.606792 13.2707 0.606792 10.7293 1.17962 8.28718C2.00687 4.76051 4.76052 2.00687 8.28718 1.17962ZM12 9.60675C12.6608 9.60675 13.1966 9.07101 13.1966 8.41014C13.1966 7.74928 12.6608 7.21354 12 7.21354C11.3391 7.21354 10.8034 7.74928 10.8034 8.41014C10.8034 9.07101 11.3391 9.60675 12 9.60675ZM12 10.5042C12.4956 10.5042 12.8974 10.906 12.8974 11.4017V16.1881C12.8974 16.6837 12.4956 17.0855 12 17.0855C11.5043 17.0855 11.1025 16.6837 11.1025 16.1881V11.4017C11.1025 10.906 11.5043 10.5042 12 10.5042Z" fill="#AFC6FF" />
                </svg>
                <svg width="140" height="39" viewBox="0 0 140 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11" width="116" height="39" rx="19.5" fill="#42434A" />
                    <path d="M28.8182 13.3636V25H27.4091V13.3636H28.8182ZM32.8026 19.75V25H31.4616V16.2727H32.7571V17.6364H32.8707C33.0753 17.1932 33.3859 16.8371 33.8026 16.5682C34.2192 16.2955 34.7571 16.1591 35.4162 16.1591C36.0071 16.1591 36.5241 16.2803 36.9673 16.5227C37.4105 16.7614 37.7552 17.125 38.0014 17.6136C38.2476 18.0985 38.3707 18.7121 38.3707 19.4545V25H37.0298V19.5455C37.0298 18.8598 36.8518 18.3258 36.4957 17.9432C36.1397 17.5568 35.651 17.3636 35.0298 17.3636C34.6018 17.3636 34.2192 17.4564 33.8821 17.642C33.5488 17.8277 33.2855 18.0985 33.0923 18.4545C32.8991 18.8106 32.8026 19.2424 32.8026 19.75ZM44.7074 16.2727V17.4091H40.0028V16.2727H44.7074ZM41.4119 25V15.0682C41.4119 14.5682 41.5294 14.1515 41.7642 13.8182C41.9991 13.4848 42.304 13.2348 42.679 13.0682C43.054 12.9015 43.4498 12.8182 43.8665 12.8182C44.196 12.8182 44.465 12.8447 44.6733 12.8977C44.8816 12.9508 45.0369 13 45.1392 13.0455L44.7528 14.2045C44.6847 14.1818 44.59 14.1534 44.4688 14.1193C44.3513 14.0852 44.196 14.0682 44.0028 14.0682C43.5597 14.0682 43.2396 14.1799 43.0426 14.4034C42.8494 14.6269 42.7528 14.9545 42.7528 15.3864V25H41.4119ZM49.7727 25.1818C48.9848 25.1818 48.2936 24.9943 47.6989 24.6193C47.108 24.2443 46.6458 23.7197 46.3125 23.0455C45.983 22.3712 45.8182 21.5833 45.8182 20.6818C45.8182 19.7727 45.983 18.9792 46.3125 18.3011C46.6458 17.6231 47.108 17.0966 47.6989 16.7216C48.2936 16.3466 48.9848 16.1591 49.7727 16.1591C50.5606 16.1591 51.25 16.3466 51.8409 16.7216C52.4356 17.0966 52.8977 17.6231 53.2273 18.3011C53.5606 18.9792 53.7273 19.7727 53.7273 20.6818C53.7273 21.5833 53.5606 22.3712 53.2273 23.0455C52.8977 23.7197 52.4356 24.2443 51.8409 24.6193C51.25 24.9943 50.5606 25.1818 49.7727 25.1818ZM49.7727 23.9773C50.3712 23.9773 50.8636 23.8239 51.25 23.517C51.6364 23.2102 51.9223 22.8068 52.108 22.3068C52.2936 21.8068 52.3864 21.2652 52.3864 20.6818C52.3864 20.0985 52.2936 19.5549 52.108 19.0511C51.9223 18.5473 51.6364 18.1402 51.25 17.8295C50.8636 17.5189 50.3712 17.3636 49.7727 17.3636C49.1742 17.3636 48.6818 17.5189 48.2955 17.8295C47.9091 18.1402 47.6231 18.5473 47.4375 19.0511C47.2519 19.5549 47.1591 20.0985 47.1591 20.6818C47.1591 21.2652 47.2519 21.8068 47.4375 22.3068C47.6231 22.8068 47.9091 23.2102 48.2955 23.517C48.6818 23.8239 49.1742 23.9773 49.7727 23.9773ZM55.7741 25V16.2727H57.0696V17.5909H57.1605C57.3196 17.1591 57.6075 16.8087 58.0241 16.5398C58.4408 16.2708 58.9105 16.1364 59.4332 16.1364C59.5317 16.1364 59.6548 16.1383 59.8026 16.142C59.9503 16.1458 60.062 16.1515 60.1378 16.1591V17.5227C60.0923 17.5114 59.9882 17.4943 59.8253 17.4716C59.6662 17.4451 59.4976 17.4318 59.3196 17.4318C58.8954 17.4318 58.5166 17.5208 58.1832 17.6989C57.8537 17.8731 57.5923 18.1155 57.3991 18.4261C57.2098 18.733 57.1151 19.0833 57.1151 19.4773V25H55.7741ZM61.7273 25V16.2727H63.0227V17.6364H63.1364C63.3182 17.1705 63.6117 16.8087 64.017 16.5511C64.4223 16.2898 64.9091 16.1591 65.4773 16.1591C66.053 16.1591 66.5322 16.2898 66.9148 16.5511C67.3011 16.8087 67.6023 17.1705 67.8182 17.6364H67.9091C68.1326 17.1856 68.4678 16.8277 68.9148 16.5625C69.3617 16.2936 69.8977 16.1591 70.5227 16.1591C71.303 16.1591 71.9413 16.4034 72.4375 16.892C72.9337 17.3769 73.1818 18.1326 73.1818 19.1591V25H71.8409V19.1591C71.8409 18.5152 71.6648 18.0549 71.3125 17.7784C70.9602 17.5019 70.5455 17.3636 70.0682 17.3636C69.4545 17.3636 68.9792 17.5492 68.642 17.9205C68.3049 18.2879 68.1364 18.7538 68.1364 19.3182V25H66.7727V19.0227C66.7727 18.5265 66.6117 18.1269 66.2898 17.8239C65.9678 17.517 65.553 17.3636 65.0455 17.3636C64.697 17.3636 64.3712 17.4564 64.0682 17.642C63.7689 17.8277 63.5265 18.0852 63.3409 18.4148C63.1591 18.7405 63.0682 19.1174 63.0682 19.5455V25H61.7273ZM78.2017 25.2045C77.6487 25.2045 77.1468 25.1004 76.696 24.892C76.2453 24.6799 75.8873 24.375 75.6222 23.9773C75.357 23.5758 75.2244 23.0909 75.2244 22.5227C75.2244 22.0227 75.3229 21.6174 75.5199 21.3068C75.7169 20.9924 75.9801 20.7462 76.3097 20.5682C76.6392 20.3902 77.0028 20.2576 77.4006 20.1705C77.8021 20.0795 78.2055 20.0076 78.6108 19.9545C79.1411 19.8864 79.571 19.8352 79.9006 19.8011C80.2339 19.7633 80.4763 19.7008 80.6278 19.6136C80.7831 19.5265 80.8608 19.375 80.8608 19.1591V19.1136C80.8608 18.553 80.7074 18.1174 80.4006 17.8068C80.0975 17.4962 79.6373 17.3409 79.0199 17.3409C78.3797 17.3409 77.8778 17.4811 77.5142 17.7614C77.1506 18.0417 76.8949 18.3409 76.7472 18.6591L75.4744 18.2045C75.7017 17.6742 76.0047 17.2614 76.3835 16.9659C76.7661 16.6667 77.1828 16.4583 77.6335 16.3409C78.0881 16.2197 78.535 16.1591 78.9744 16.1591C79.2547 16.1591 79.5767 16.1932 79.9403 16.2614C80.3078 16.3258 80.6619 16.4602 81.0028 16.6648C81.3475 16.8693 81.6335 17.178 81.8608 17.5909C82.0881 18.0038 82.2017 18.5568 82.2017 19.25V25H80.8608V23.8182H80.7926C80.7017 24.0076 80.5502 24.2102 80.3381 24.4261C80.1259 24.642 79.8438 24.8258 79.4915 24.9773C79.1392 25.1288 78.7093 25.2045 78.2017 25.2045ZM78.4062 24C78.9366 24 79.3835 23.8958 79.7472 23.6875C80.1146 23.4792 80.3911 23.2102 80.5767 22.8807C80.7661 22.5511 80.8608 22.2045 80.8608 21.8409V20.6136C80.804 20.6818 80.679 20.7443 80.4858 20.8011C80.2964 20.8542 80.0767 20.9015 79.8267 20.9432C79.5805 20.9811 79.34 21.0152 79.1051 21.0455C78.8741 21.072 78.6866 21.0947 78.5426 21.1136C78.1941 21.1591 77.8684 21.233 77.5653 21.3352C77.2661 21.4337 77.0237 21.5833 76.8381 21.7841C76.6563 21.9811 76.5653 22.25 76.5653 22.5909C76.5653 23.0568 76.7377 23.4091 77.0824 23.6477C77.4309 23.8826 77.8722 24 78.4062 24ZM88.4446 16.2727V17.4091H83.9219V16.2727H88.4446ZM85.2401 14.1818H86.581V22.5C86.581 22.8788 86.6359 23.1629 86.7457 23.3523C86.8594 23.5379 87.0033 23.6629 87.1776 23.7273C87.3556 23.7879 87.5431 23.8182 87.7401 23.8182C87.8878 23.8182 88.009 23.8106 88.1037 23.7955C88.1984 23.7765 88.2741 23.7614 88.331 23.75L88.6037 24.9545C88.5128 24.9886 88.3859 25.0227 88.223 25.0568C88.0601 25.0947 87.8537 25.1136 87.6037 25.1136C87.2249 25.1136 86.8537 25.0322 86.4901 24.8693C86.1302 24.7064 85.831 24.4583 85.5923 24.125C85.3575 23.7917 85.2401 23.3712 85.2401 22.8636V14.1818ZM90.4616 25V16.2727H91.8026V25H90.4616ZM91.1435 14.8182C90.8821 14.8182 90.6567 14.7292 90.4673 14.5511C90.2817 14.3731 90.1889 14.1591 90.1889 13.9091C90.1889 13.6591 90.2817 13.4451 90.4673 13.267C90.6567 13.089 90.8821 13 91.1435 13C91.4048 13 91.6283 13.089 91.8139 13.267C92.0033 13.4451 92.098 13.6591 92.098 13.9091C92.098 14.1591 92.0033 14.3731 91.8139 14.5511C91.6283 14.7292 91.4048 14.8182 91.1435 14.8182ZM97.804 25.1818C97.0161 25.1818 96.3248 24.9943 95.7301 24.6193C95.1392 24.2443 94.6771 23.7197 94.3438 23.0455C94.0142 22.3712 93.8494 21.5833 93.8494 20.6818C93.8494 19.7727 94.0142 18.9792 94.3438 18.3011C94.6771 17.6231 95.1392 17.0966 95.7301 16.7216C96.3248 16.3466 97.0161 16.1591 97.804 16.1591C98.5919 16.1591 99.2813 16.3466 99.8722 16.7216C100.467 17.0966 100.929 17.6231 101.259 18.3011C101.592 18.9792 101.759 19.7727 101.759 20.6818C101.759 21.5833 101.592 22.3712 101.259 23.0455C100.929 23.7197 100.467 24.2443 99.8722 24.6193C99.2813 24.9943 98.5919 25.1818 97.804 25.1818ZM97.804 23.9773C98.4025 23.9773 98.8949 23.8239 99.2812 23.517C99.6676 23.2102 99.9536 22.8068 100.139 22.3068C100.325 21.8068 100.418 21.2652 100.418 20.6818C100.418 20.0985 100.325 19.5549 100.139 19.0511C99.9536 18.5473 99.6676 18.1402 99.2812 17.8295C98.8949 17.5189 98.4025 17.3636 97.804 17.3636C97.2055 17.3636 96.7131 17.5189 96.3267 17.8295C95.9403 18.1402 95.6544 18.5473 95.4688 19.0511C95.2831 19.5549 95.1903 20.0985 95.1903 20.6818C95.1903 21.2652 95.2831 21.8068 95.4688 22.3068C95.6544 22.8068 95.9403 23.2102 96.3267 23.517C96.7131 23.8239 97.2055 23.9773 97.804 23.9773ZM105.146 19.75V25H103.805V16.2727H105.101V17.6364H105.214C105.419 17.1932 105.73 16.8371 106.146 16.5682C106.563 16.2955 107.101 16.1591 107.76 16.1591C108.351 16.1591 108.868 16.2803 109.311 16.5227C109.754 16.7614 110.099 17.125 110.345 17.6136C110.591 18.0985 110.714 18.7121 110.714 19.4545V25H109.374V19.5455C109.374 18.8598 109.196 18.3258 108.839 17.9432C108.483 17.5568 107.995 17.3636 107.374 17.3636C106.946 17.3636 106.563 17.4564 106.226 17.642C105.893 17.8277 105.629 18.0985 105.436 18.4545C105.243 18.8106 105.146 19.2424 105.146 19.75Z" fill="#BFBFC1" />
                    <path d="M1.2893 19.6095C1.03891 19.8096 1.03891 20.1904 1.2893 20.3905L18.1878 33.8993C18.5152 34.1611 19 33.928 19 33.5088L19 6.4912C19 6.07204 18.5152 5.83892 18.1878 6.10066L1.2893 19.6095Z" fill="#42434A" stroke="#42434A" />
                </svg>
            </div>

            <div className="main-program__content">
                <svg width="549" height="8" viewBox="0 0 549 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="549" height="8" fill="white" fill-opacity="0.05" />
                </svg>
                <svg width="225" height="8" viewBox="0 0 225 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="225" height="8" fill="#184BFF" />
                </svg>
                <div className="elips"></div>
                <h3>
                    Infinity Space
                </h3>
                <p>
                    0 BUSD
                </p>
                <Link to="/dashboard/user/levels">
                    <button>
                        Let's go
                    </button>
                </Link>
            </div>
        </div>

        <AllTransactions />
    </div>
}

export default Main;