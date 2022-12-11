import { Container, Row, Col } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Links.scss";

import {
    BarChart,
    Bar,
    AreaChart,
    Area,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import apiUser from "../../../api/apiServer/apiUser";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
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
        uv: 0,
        pv: 0,
        amt: 0
    },
    {
        name: "Page G",
        uv: 0,
        pv: 0,
        amt: 0
    },
    {
        name: "Page G",
        uv: 0,
        pv: 0,
        amt: 0
    },
    {
        name: "Page G",
        uv: 0,
        pv: 0,
        amt: 0
    },
    {
        name: "Page G",
        uv: 0,
        pv: 0,
        amt: 0
    }
];

const dataArea = [
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

const Links = () => {
    const [clickLinks, setClickLinks] = useState({
        totalClicks: 0,
        lastDayClicks: 0
    });
    const [activeMonthBtn, setActiveMonthBtn] = useState(true);
    const [activeYearBtn, setActiveYearBtn] = useState(false);

    const wallet = useSelector(state => state.user.wallet);
    const slicedAddressWallet = wallet.substring(0, 5)
        + "..."
        + wallet.substring(
            wallet.length - 5,
            wallet.length
        );


    useEffect(() => {
        apiUser.getLinksClicked(0)
            .then(({ data }) => {
                setClickLinks({
                    totalClicks: data.total_clicks,
                    lastDayClicks: data.last_day_clicks
                });
            })
    }, []);

    const handleCopy = (num) => {
        if (num === 1) {
            toast.success('Personal link copied');
        } else {
            toast.success('Address copied');
        }
    };

    const handleClickMonth = () => {
        setActiveMonthBtn(true);
        setActiveYearBtn(false);
    };

    const handleClickYear = () => {
        setActiveMonthBtn(false);
        setActiveYearBtn(true);
    };

    return <div className="links">
        <div className="links__header">
            <h2>
                Links
            </h2>
            <div>
                ID 0
            </div>
        </div>
        <div className="links__info">
            <Container fluid>
                <Row>
                    <Col xxl={6}>
                        <div className="links__info-chart-partners">
                            <div className="chart-partners__menu">
                                <div className="menu__range">
                                    <button className={classNames({ "active": activeMonthBtn })}
                                        onClick={handleClickMonth}
                                    >
                                        Month
                                    </button>
                                    <button className={classNames({ "active": activeYearBtn })}
                                        onClick={handleClickYear}
                                    >
                                        Year
                                    </button>
                                </div>
                                <select>
                                    <option>
                                        January
                                    </option>
                                    <option>
                                        February
                                    </option>
                                    <option>
                                        March
                                    </option>
                                    <option>
                                        April
                                    </option>
                                    <option>
                                        May
                                    </option>
                                    <option>
                                        June
                                    </option>
                                    <option>
                                        July
                                    </option>
                                    <option>
                                        August
                                    </option>
                                    <option>
                                        September
                                    </option>
                                    <option>
                                        October
                                    </option>
                                    <option>
                                        November
                                    </option>
                                    <option>
                                        December
                                    </option>
                                </select>
                                <select>
                                    <option>
                                        2021
                                    </option>
                                    <option>
                                        2022
                                    </option>
                                </select>
                            </div>
                            <ResponsiveContainer>
                                <BarChart
                                    data={data}
                                    margin={{
                                        top: 21,
                                        right: 0,
                                        left: 0,
                                        bottom: 50
                                    }}
                                >
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="pv" fill="#6083FF" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="text" style={{ marginTop: 16 }}>
                            <h3>
                                Personal links
                            </h3>
                            <p>
                                Personal links give you the opportunity to invite partners to your team and increase the number of your followers. In this way you increase your profit and passive income.
                            </p>
                        </div>
                    </Col>
                    <Col xxl={6}>
                        <div className="links__info-stats">
                            <div className="links__info-stats-top">
                                <div>
                                    <div>
                                        Link clicks
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77231 1.00777C6.23755 0.664075 7.76245 0.664075 9.22769 1.00777C11.3437 1.50412 12.9959 3.15631 13.4922 5.27231C13.8359 6.73755 13.8359 8.26245 13.4922 9.72769C12.9959 11.8437 11.3437 13.4959 9.22769 13.9922C7.76245 14.3359 6.23755 14.3359 4.77231 13.9922C2.65631 13.4959 1.00412 11.8437 0.507775 9.72769C0.164075 8.26245 0.164075 6.73755 0.507775 5.27231C1.00412 3.15631 2.65631 1.50412 4.77231 1.00777ZM6.99998 6.06405C7.3965 6.06405 7.71795 5.74261 7.71795 5.34609C7.71795 4.94957 7.3965 4.62812 6.99998 4.62812C6.60346 4.62812 6.28202 4.94957 6.28202 5.34609C6.28202 5.74261 6.60346 6.06405 6.99998 6.06405ZM6.99998 6.60252C7.29737 6.60252 7.53845 6.84361 7.53845 7.141V10.0129C7.53845 10.3102 7.29737 10.5513 6.99998 10.5513C6.70259 10.5513 6.46151 10.3102 6.46151 10.0129V7.141C6.46151 6.84361 6.70259 6.60252 6.99998 6.60252Z" fill="#BFBFC1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p>
                                            {clickLinks.totalClicks}
                                        </p>
                                        <span>
                                            +  {clickLinks.lastDayClicks}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Partners
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77231 1.00777C6.23755 0.664075 7.76245 0.664075 9.22769 1.00777C11.3437 1.50412 12.9959 3.15631 13.4922 5.27231C13.8359 6.73755 13.8359 8.26245 13.4922 9.72769C12.9959 11.8437 11.3437 13.4959 9.22769 13.9922C7.76245 14.3359 6.23755 14.3359 4.77231 13.9922C2.65631 13.4959 1.00412 11.8437 0.507775 9.72769C0.164075 8.26245 0.164075 6.73755 0.507775 5.27231C1.00412 3.15631 2.65631 1.50412 4.77231 1.00777ZM6.99998 6.06405C7.3965 6.06405 7.71795 5.74261 7.71795 5.34609C7.71795 4.94957 7.3965 4.62812 6.99998 4.62812C6.60346 4.62812 6.28202 4.94957 6.28202 5.34609C6.28202 5.74261 6.60346 6.06405 6.99998 6.06405ZM6.99998 6.60252C7.29737 6.60252 7.53845 6.84361 7.53845 7.141V10.0129C7.53845 10.3102 7.29737 10.5513 6.99998 10.5513C6.70259 10.5513 6.46151 10.3102 6.46151 10.0129V7.141C6.46151 6.84361 6.70259 6.60252 6.99998 6.60252Z" fill="#BFBFC1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p>
                                            0
                                        </p>
                                        <span>
                                            + 0
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Team
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77231 1.00777C6.23755 0.664075 7.76245 0.664075 9.22769 1.00777C11.3437 1.50412 12.9959 3.15631 13.4922 5.27231C13.8359 6.73755 13.8359 8.26245 13.4922 9.72769C12.9959 11.8437 11.3437 13.4959 9.22769 13.9922C7.76245 14.3359 6.23755 14.3359 4.77231 13.9922C2.65631 13.4959 1.00412 11.8437 0.507775 9.72769C0.164075 8.26245 0.164075 6.73755 0.507775 5.27231C1.00412 3.15631 2.65631 1.50412 4.77231 1.00777ZM6.99998 6.06405C7.3965 6.06405 7.71795 5.74261 7.71795 5.34609C7.71795 4.94957 7.3965 4.62812 6.99998 4.62812C6.60346 4.62812 6.28202 4.94957 6.28202 5.34609C6.28202 5.74261 6.60346 6.06405 6.99998 6.06405ZM6.99998 6.60252C7.29737 6.60252 7.53845 6.84361 7.53845 7.141V10.0129C7.53845 10.3102 7.29737 10.5513 6.99998 10.5513C6.70259 10.5513 6.46151 10.3102 6.46151 10.0129V7.141C6.46151 6.84361 6.70259 6.60252 6.99998 6.60252Z" fill="#BFBFC1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p>
                                            0
                                        </p>
                                        <span>
                                            + 0
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="links__info-stats-bot">
                                <div className="bot-info">
                                    <div>
                                        Profits
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.77231 1.00777C6.23755 0.664075 7.76245 0.664075 9.22769 1.00777C11.3437 1.50412 12.9959 3.15631 13.4922 5.27231C13.8359 6.73755 13.8359 8.26245 13.4922 9.72769C12.9959 11.8437 11.3437 13.4959 9.22769 13.9922C7.76245 14.3359 6.23755 14.3359 4.77231 13.9922C2.65631 13.4959 1.00412 11.8437 0.507775 9.72769C0.164075 8.26245 0.164075 6.73755 0.507775 5.27231C1.00412 3.15631 2.65631 1.50412 4.77231 1.00777ZM6.99998 6.06405C7.3965 6.06405 7.71795 5.74261 7.71795 5.34609C7.71795 4.94957 7.3965 4.62812 6.99998 4.62812C6.60346 4.62812 6.28202 4.94957 6.28202 5.34609C6.28202 5.74261 6.60346 6.06405 6.99998 6.06405ZM6.99998 6.60252C7.29737 6.60252 7.53845 6.84361 7.53845 7.141V10.0129C7.53845 10.3102 7.29737 10.5513 6.99998 10.5513C6.70259 10.5513 6.46151 10.3102 6.46151 10.0129V7.141C6.46151 6.84361 6.70259 6.60252 6.99998 6.60252Z" fill="#BFBFC1" />
                                        </svg>
                                    </div>
                                    <div>
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
                                            data={dataArea}
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
                            <div className="main-info__user-link user-link-stats" style={{ marginTop: 24 }}>
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
                                        <CopyToClipboard text={'http://localhost:3000/home-page?user_id=0'} onCopy={() => handleCopy(1)}>
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
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    </div>
}

export default Links;