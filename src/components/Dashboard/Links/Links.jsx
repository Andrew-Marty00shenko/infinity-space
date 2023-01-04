import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Links.scss";

import {
    BarChart,
    Bar,
    AreaChart,
    Area,
    YAxis,
    XAxis,
    ResponsiveContainer
} from "recharts";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import apiUser from "../../../api/apiServer/apiUser";
import { getUserData } from "../../../redux/slices/userSlice";

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
    const [userData, setUserData] = useState(null);
    const [clickLinks, setClickLinks] = useState({
        totalClicks: 0,
        lastDayClicks: 0
    });
    const [activeMonthBtn, setActiveMonthBtn] = useState(true);
    const [activeYearBtn, setActiveYearBtn] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('2023-01-01');
    const [selectedYear, setSelectedYear] = useState('2023');
    const [data, setData] = useState([])

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const wallet = useSelector(state => state.user.wallet);
    const slicedAddressWallet = wallet.substring(0, 5)
        + "..."
        + wallet.substring(
            wallet.length - 5,
            wallet.length
        );

    useEffect(() => {
        dispatch(getUserData(wallet));
    }, []);

    useEffect(() => {
        if (user !== null) {
            apiUser.getUserData(user?.id)
                .then(({ data }) => setUserData(data))
                .catch(err => console.log(err));

            apiUser.getLinksClicked(user?.id)
                .then(({ data }) => {
                    setClickLinks({
                        totalClicks: data.total_clicks,
                        lastDayClicks: data.last_day_clicks
                    });
                });

            if (activeMonthBtn) {
                let date = new Date(selectedMonth);
                let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

                apiUser.getUserProfit(user?.id, firstDay.getTime() / 1000, lastDay.getTime() / 1000)
                    .then((res) => {
                        setData(res.data)
                    });
            }

            if (activeYearBtn) {
                let date = new Date(selectedYear);
                let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                let lastDay = new Date(date.getFullYear(), date.getMonth() + 12, 0);

                apiUser.getUserProfit(user?.id, firstDay.getTime() / 1000, lastDay.getTime() / 1000)
                    .then((res) => {
                        setData(res.data);
                    });
            }
        }
    }, [user, selectedMonth, selectedYear, activeYearBtn, activeMonthBtn]);

    const graphMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const graphYear = Array.from({ length: 12 }, (_, i) => i + 1);

    if (activeMonthBtn) {
        if (data.length > 0) {
            for (let i = 1; i <= graphMonth.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (graphMonth[i]?.toString() === (data[j].tx_date.slice(-2) < 10 ? data[j].tx_date.slice(-1) : data[j].tx_date.slice(-2))) {
                        graphMonth[i] = {
                            name: i,
                            uv: data[j]?.total_amount / 1e18,
                            pv: data[j]?.total_amount / 1e18,
                            amt: 0
                        }
                    }
                }
            }
        }
    } else if (activeYearBtn) {
        if (data.length > 0) {
            let sumJanuary = 0;
            let sumFebruary = 0;
            let sumMarch = 0;
            let sumApril = 0;
            let sumMay = 0;
            let sumJune = 0;
            let sumJuly = 0;
            let sumAugust = 0;
            let sumSeptember = 0;
            let sumOctober = 0;
            let sumNovember = 0;
            let sumDecember = 0;

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 1) {
                    sumJanuary += data[i].total_amount / 1e18;
                };
            }

            graphYear[0] = {
                name: 1,
                uv: sumJanuary.toFixed(0),
                pv: sumJanuary.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 2) {
                    sumFebruary += data[i].total_amount / 1e18;
                };
            }

            graphYear[1] = {
                name: 2,
                uv: sumFebruary.toFixed(0),
                pv: sumFebruary.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 3) {
                    sumMarch += data[i].total_amount / 1e18;
                };
            }

            graphYear[2] = {
                name: 3,
                uv: sumMarch.toFixed(0),
                pv: sumMarch.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 4) {
                    sumApril += data[i].total_amount / 1e18;
                };
            }

            graphYear[3] = {
                name: 4,
                uv: sumApril.toFixed(0),
                pv: sumApril.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 5) {
                    sumMay += data[i].total_amount / 1e18;
                };
            }

            graphYear[4] = {
                name: 5,
                uv: sumMay.toFixed(0),
                pv: sumMay.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 6) {
                    sumJune += data[i].total_amount / 1e18;
                };
            }

            graphYear[5] = {
                name: 6,
                uv: sumJune.toFixed(0),
                pv: sumJune.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 7) {
                    sumJuly += data[i].total_amount / 1e18;
                };
            }

            graphYear[6] = {
                name: 7,
                uv: sumJuly.toFixed(0),
                pv: sumJuly.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 8) {
                    sumAugust += data[i].total_amount / 1e18;
                };
            }

            graphYear[7] = {
                name: 8,
                uv: sumAugust.toFixed(0),
                pv: sumAugust.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 9) {
                    sumSeptember += data[i].total_amount / 1e18;
                };
            }

            graphYear[8] = {
                name: 9,
                uv: sumSeptember.toFixed(0),
                pv: sumSeptember.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 10) {
                    sumOctober += data[i].total_amount / 1e18;
                };
            }

            graphYear[9] = {
                name: 10,
                uv: sumOctober.toFixed(0),
                pv: sumOctober.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 11) {
                    sumNovember += data[i].total_amount / 1e18;
                };
            }

            graphYear[10] = {
                name: 11,
                uv: sumNovember.toFixed(0),
                pv: sumNovember.toFixed(0),
                amt: 0
            }

            for (let i = 0; i < data.length; i++) {
                if (data[i].tx_date.slice(5, 7) == 12) {
                    sumDecember += data[i].total_amount / 1e18;
                };
            }

            graphYear[11] = {
                name: 12,
                uv: sumDecember.toFixed(0),
                pv: sumDecember.toFixed(0),
                amt: 0
            }
        }
    }

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
                ID {user?.id}
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
                                        {window.innerWidth < 690 ? 'M' : 'Month'}
                                    </button>
                                    <button className={classNames({ "active": activeYearBtn })}
                                        onClick={handleClickYear}
                                    >
                                        {window.innerWidth < 690 ? 'Y' : 'Year'}
                                    </button>
                                </div>
                                {!activeYearBtn && <select defaultValue={'January'} value={selectedMonth} onChange={e => {
                                    setSelectedMonth(e.target.value);
                                }}>
                                    <option value={selectedYear === '2023' ? '2023-01-01' : '2022-01-01'}>
                                        January
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-02-01' : '2022-02-01'}>
                                        February
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-03-01' : '2022-03-01'}>
                                        March
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-04-01' : '2022-04-01'}>
                                        April
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-05-01' : '2022-05-01'}>
                                        May
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-06-01' : '2022-06-01'}>
                                        June
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-07-01' : '2022-07-01'}>
                                        July
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-08-01' : '2022-08-01'}>
                                        August
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-09-01' : '2022-09-01'}>
                                        September
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-10-01' : '2022-10-01'}>
                                        October
                                    </option >
                                    <option value={selectedYear === '2023' ? '2023-11-01' : '2022-11-01'}>
                                        November
                                    </option>
                                    <option value={selectedYear === '2023' ? '2023-12-01' : '2022-12-01'}>
                                        December
                                    </option>
                                </select>}
                                <select value={selectedYear} onChange={e => {
                                    setSelectedYear(e.target.value);
                                    setSelectedMonth(`${e.target.value}${selectedMonth.slice(4)}`);
                                }} defaultValue={'2023'}>
                                    <option value="2022">
                                        2022
                                    </option>
                                    <option value="2023">
                                        2023
                                    </option>
                                </select>
                            </div>

                            {data.length === 0
                                ? <p className="no-data">
                                    No data yet
                                </p>
                                : <ResponsiveContainer>
                                    <BarChart
                                        data={activeMonthBtn ? graphMonth : graphYear}
                                        margin={{
                                            top: 21,
                                            right: 0,
                                            left: 0,
                                            bottom: 50
                                        }}
                                    >
                                        <YAxis />
                                        <XAxis dataKey="name" />
                                        <Bar dataKey="pv" fill="#6083FF" />
                                    </BarChart>
                                </ResponsiveContainer>}
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
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    Number of clicks on your referral link
                                                </Tooltip>
                                            }
                                        >
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z" fill="#BFBFC1" />
                                            </svg>
                                        </OverlayTrigger>
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
                                    <div>
                                        <p>
                                            {user?.userData.refCount}
                                        </p>
                                        <span>
                                            + {userData?.partnersAtLatestDay || 0}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
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
                                    <div>
                                        <p>
                                            {userData?.team || 0}
                                        </p>
                                        <span>
                                            + {userData?.TeamAtLatestDay || 0}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="links__info-stats-bot">
                                <div className="bot-info">
                                    <div>
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
                                    <div>
                                        <p>
                                            {`${(user?.userData.earned / 1e18).toLocaleString('ru')} $` || 0}
                                        </p>
                                        <span>
                                            + {(userData?.profitAtLatestDay / 1e18) || 0}
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
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip>
                                                        Your referral link for inviting new partners. <br />
                                                        Your link will become available after the purchase of the first level.
                                                    </Tooltip>
                                                }
                                            >
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.77231 2.50777C8.23755 2.16408 9.76245 2.16408 11.2277 2.50777C13.3437 3.00412 14.9959 4.65631 15.4922 6.77231C15.8359 8.23755 15.8359 9.76245 15.4922 11.2277C14.9959 13.3437 13.3437 14.9959 11.2277 15.4922C9.76245 15.8359 8.23755 15.8359 6.77231 15.4922C4.65631 14.9959 3.00412 13.3437 2.50777 11.2277C2.16408 9.76245 2.16408 8.23755 2.50777 6.77231C3.00412 4.65631 4.65631 3.00412 6.77231 2.50777ZM8.99998 7.56405C9.3965 7.56405 9.71795 7.24261 9.71795 6.84609C9.71795 6.44957 9.3965 6.12812 8.99998 6.12812C8.60346 6.12812 8.28202 6.44957 8.28202 6.84609C8.28202 7.24261 8.60346 7.56405 8.99998 7.56405ZM8.99998 8.10252C9.29737 8.10252 9.53845 8.34361 9.53845 8.641V11.5129C9.53845 11.8102 9.29737 12.0513 8.99998 12.0513C8.70259 12.0513 8.46151 11.8102 8.46151 11.5129V8.641C8.46151 8.34361 8.70259 8.10252 8.99998 8.10252Z" fill="#BFBFC1" />
                                                </svg>
                                            </OverlayTrigger>
                                        </div>
                                        <div className="user-link__bottom">
                                            {`in-space.io/${user?.id}`}
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
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    </div >
}

export default Links;