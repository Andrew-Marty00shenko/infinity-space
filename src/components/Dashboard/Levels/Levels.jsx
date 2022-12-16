import classNames from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { buyingLevel, getLevelsInfo } from "../../../redux/slices/levelsSlice";
import { getUserData } from "../../../redux/slices/userSlice";
import contractAbi from "../../../utils/contract/contractAbi.json";
import contractBUSDAbi from "../../../utils/contract/contractBUSDAbi.json";

import Preloader from "../../Common/Preloader";
import Stats from "../Stats/Stats";
import ErrorModal from "./ErrorModal/ErrorModal";

import "./Levels.scss";

const Levels = () => {
    const user = useSelector(state => state.user.user);
    const levels = useSelector(state => state.levels.levels);
    const wallet = useSelector(state => state.user.wallet);
    const loading = useSelector(state => state.levels.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);
    const [hash, setHash] = useState(null);

    useEffect(() => {
        dispatch(getLevelsInfo(user.id));
    }, [user]);

    const handleClickBuyLevel = (level, levelId) => {
        if (levels[levelId - 2]?.status === false) {
            setModalShow(true);

            return;
        } else {
            const contract = new window.web3.eth.Contract(
                contractAbi.abi,
                contractAbi.address,
                { from: wallet }
            );

            const busdContract = new window.web3.eth.Contract(
                contractBUSDAbi.abi,
                contractBUSDAbi.address,
                { from: wallet }
            );

            if (wallet.toLowerCase() === user?.wallet.toLowerCase()) {
                busdContract.methods
                    .approve(contractAbi.address, level.price)
                    .send({
                        from: wallet
                    })
                    .on('transactionHash', hash => {

                        contract.methods[
                            'buyLevel(uint256)'
                        ](Number(levelId))
                            .send()
                            .on('transactionHash', hash => {
                                dispatch(buyingLevel());
                                setHash(hash)
                            })
                            .then(res => {
                                toast.success(`You have successfully purchased a level ${levelId}`)
                                dispatch(getUserData(wallet));
                            });
                    })
            } else {
                busdContract.methods
                    .approve(contractAbi.address, level.price)
                    .send({
                        from: wallet
                    })
                    .on('transactionHash', hash => {
                        contract.methods[
                            'buyLevel(uint256,uint256)'
                        ](Number(levelId), Number(localStorage.getItem("uplineId")))
                            .send()
                            .on('transactionHash', hash => {
                                dispatch(buyingLevel());
                            })
                            .then(res => {
                                toast.success('You have successfully purchased a level 1')
                                dispatch(getUserData(wallet));
                            });
                    })
            }
        }
    };


    if (loading) {
        if (hash !== null) {
            return <Preloader levels={true} />
        } else {
            return <Preloader team={true} />
        }
    }

    return <div className="levels">
        <div className="levels__info">
            <Link to="/dashboard"> ID {user?.id} </Link> &#62; <span>
                Levels
            </span>
        </div>
        <div className="levels__header">
            <h2>
                BUSD
            </h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.28718 1.17962C10.7293 0.606792 13.2707 0.606792 15.7128 1.17962C19.2395 2.00687 21.9931 4.76052 22.8204 8.28719C23.3932 10.7293 23.3932 13.2707 22.8204 15.7128C21.9931 19.2395 19.2395 21.9931 15.7128 22.8204C13.2707 23.3932 10.7293 23.3932 8.28719 22.8204C4.76052 21.9931 2.00687 19.2395 1.17962 15.7128C0.606792 13.2707 0.606792 10.7293 1.17962 8.28718C2.00687 4.76051 4.76052 2.00687 8.28718 1.17962ZM12 9.60675C12.6608 9.60675 13.1966 9.07101 13.1966 8.41014C13.1966 7.74928 12.6608 7.21354 12 7.21354C11.3391 7.21354 10.8034 7.74928 10.8034 8.41014C10.8034 9.07101 11.3391 9.60675 12 9.60675ZM12 10.5042C12.4956 10.5042 12.8974 10.906 12.8974 11.4017V16.1881C12.8974 16.6837 12.4956 17.0855 12 17.0855C11.5043 17.0855 11.1025 16.6837 11.1025 16.1881V11.4017C11.1025 10.906 11.5043 10.5042 12 10.5042Z" fill="#AFC6FF" />
            </svg>
            <svg width="140" height="39" viewBox="0 0 140 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="11" width="116" height="39" rx="19.5" fill="#42434A" />
                <path d="M28.8182 13.3636V25H27.4091V13.3636H28.8182ZM32.8026 19.75V25H31.4616V16.2727H32.7571V17.6364H32.8707C33.0753 17.1932 33.3859 16.8371 33.8026 16.5682C34.2192 16.2955 34.7571 16.1591 35.4162 16.1591C36.0071 16.1591 36.5241 16.2803 36.9673 16.5227C37.4105 16.7614 37.7552 17.125 38.0014 17.6136C38.2476 18.0985 38.3707 18.7121 38.3707 19.4545V25H37.0298V19.5455C37.0298 18.8598 36.8518 18.3258 36.4957 17.9432C36.1397 17.5568 35.651 17.3636 35.0298 17.3636C34.6018 17.3636 34.2192 17.4564 33.8821 17.642C33.5488 17.8277 33.2855 18.0985 33.0923 18.4545C32.8991 18.8106 32.8026 19.2424 32.8026 19.75ZM44.7074 16.2727V17.4091H40.0028V16.2727H44.7074ZM41.4119 25V15.0682C41.4119 14.5682 41.5294 14.1515 41.7642 13.8182C41.9991 13.4848 42.304 13.2348 42.679 13.0682C43.054 12.9015 43.4498 12.8182 43.8665 12.8182C44.196 12.8182 44.465 12.8447 44.6733 12.8977C44.8816 12.9508 45.0369 13 45.1392 13.0455L44.7528 14.2045C44.6847 14.1818 44.59 14.1534 44.4688 14.1193C44.3513 14.0852 44.196 14.0682 44.0028 14.0682C43.5597 14.0682 43.2396 14.1799 43.0426 14.4034C42.8494 14.6269 42.7528 14.9545 42.7528 15.3864V25H41.4119ZM49.7727 25.1818C48.9848 25.1818 48.2936 24.9943 47.6989 24.6193C47.108 24.2443 46.6458 23.7197 46.3125 23.0455C45.983 22.3712 45.8182 21.5833 45.8182 20.6818C45.8182 19.7727 45.983 18.9792 46.3125 18.3011C46.6458 17.6231 47.108 17.0966 47.6989 16.7216C48.2936 16.3466 48.9848 16.1591 49.7727 16.1591C50.5606 16.1591 51.25 16.3466 51.8409 16.7216C52.4356 17.0966 52.8977 17.6231 53.2273 18.3011C53.5606 18.9792 53.7273 19.7727 53.7273 20.6818C53.7273 21.5833 53.5606 22.3712 53.2273 23.0455C52.8977 23.7197 52.4356 24.2443 51.8409 24.6193C51.25 24.9943 50.5606 25.1818 49.7727 25.1818ZM49.7727 23.9773C50.3712 23.9773 50.8636 23.8239 51.25 23.517C51.6364 23.2102 51.9223 22.8068 52.108 22.3068C52.2936 21.8068 52.3864 21.2652 52.3864 20.6818C52.3864 20.0985 52.2936 19.5549 52.108 19.0511C51.9223 18.5473 51.6364 18.1402 51.25 17.8295C50.8636 17.5189 50.3712 17.3636 49.7727 17.3636C49.1742 17.3636 48.6818 17.5189 48.2955 17.8295C47.9091 18.1402 47.6231 18.5473 47.4375 19.0511C47.2519 19.5549 47.1591 20.0985 47.1591 20.6818C47.1591 21.2652 47.2519 21.8068 47.4375 22.3068C47.6231 22.8068 47.9091 23.2102 48.2955 23.517C48.6818 23.8239 49.1742 23.9773 49.7727 23.9773ZM55.7741 25V16.2727H57.0696V17.5909H57.1605C57.3196 17.1591 57.6075 16.8087 58.0241 16.5398C58.4408 16.2708 58.9105 16.1364 59.4332 16.1364C59.5317 16.1364 59.6548 16.1383 59.8026 16.142C59.9503 16.1458 60.062 16.1515 60.1378 16.1591V17.5227C60.0923 17.5114 59.9882 17.4943 59.8253 17.4716C59.6662 17.4451 59.4976 17.4318 59.3196 17.4318C58.8954 17.4318 58.5166 17.5208 58.1832 17.6989C57.8537 17.8731 57.5923 18.1155 57.3991 18.4261C57.2098 18.733 57.1151 19.0833 57.1151 19.4773V25H55.7741ZM61.7273 25V16.2727H63.0227V17.6364H63.1364C63.3182 17.1705 63.6117 16.8087 64.017 16.5511C64.4223 16.2898 64.9091 16.1591 65.4773 16.1591C66.053 16.1591 66.5322 16.2898 66.9148 16.5511C67.3011 16.8087 67.6023 17.1705 67.8182 17.6364H67.9091C68.1326 17.1856 68.4678 16.8277 68.9148 16.5625C69.3617 16.2936 69.8977 16.1591 70.5227 16.1591C71.303 16.1591 71.9413 16.4034 72.4375 16.892C72.9337 17.3769 73.1818 18.1326 73.1818 19.1591V25H71.8409V19.1591C71.8409 18.5152 71.6648 18.0549 71.3125 17.7784C70.9602 17.5019 70.5455 17.3636 70.0682 17.3636C69.4545 17.3636 68.9792 17.5492 68.642 17.9205C68.3049 18.2879 68.1364 18.7538 68.1364 19.3182V25H66.7727V19.0227C66.7727 18.5265 66.6117 18.1269 66.2898 17.8239C65.9678 17.517 65.553 17.3636 65.0455 17.3636C64.697 17.3636 64.3712 17.4564 64.0682 17.642C63.7689 17.8277 63.5265 18.0852 63.3409 18.4148C63.1591 18.7405 63.0682 19.1174 63.0682 19.5455V25H61.7273ZM78.2017 25.2045C77.6487 25.2045 77.1468 25.1004 76.696 24.892C76.2453 24.6799 75.8873 24.375 75.6222 23.9773C75.357 23.5758 75.2244 23.0909 75.2244 22.5227C75.2244 22.0227 75.3229 21.6174 75.5199 21.3068C75.7169 20.9924 75.9801 20.7462 76.3097 20.5682C76.6392 20.3902 77.0028 20.2576 77.4006 20.1705C77.8021 20.0795 78.2055 20.0076 78.6108 19.9545C79.1411 19.8864 79.571 19.8352 79.9006 19.8011C80.2339 19.7633 80.4763 19.7008 80.6278 19.6136C80.7831 19.5265 80.8608 19.375 80.8608 19.1591V19.1136C80.8608 18.553 80.7074 18.1174 80.4006 17.8068C80.0975 17.4962 79.6373 17.3409 79.0199 17.3409C78.3797 17.3409 77.8778 17.4811 77.5142 17.7614C77.1506 18.0417 76.8949 18.3409 76.7472 18.6591L75.4744 18.2045C75.7017 17.6742 76.0047 17.2614 76.3835 16.9659C76.7661 16.6667 77.1828 16.4583 77.6335 16.3409C78.0881 16.2197 78.535 16.1591 78.9744 16.1591C79.2547 16.1591 79.5767 16.1932 79.9403 16.2614C80.3078 16.3258 80.6619 16.4602 81.0028 16.6648C81.3475 16.8693 81.6335 17.178 81.8608 17.5909C82.0881 18.0038 82.2017 18.5568 82.2017 19.25V25H80.8608V23.8182H80.7926C80.7017 24.0076 80.5502 24.2102 80.3381 24.4261C80.1259 24.642 79.8438 24.8258 79.4915 24.9773C79.1392 25.1288 78.7093 25.2045 78.2017 25.2045ZM78.4062 24C78.9366 24 79.3835 23.8958 79.7472 23.6875C80.1146 23.4792 80.3911 23.2102 80.5767 22.8807C80.7661 22.5511 80.8608 22.2045 80.8608 21.8409V20.6136C80.804 20.6818 80.679 20.7443 80.4858 20.8011C80.2964 20.8542 80.0767 20.9015 79.8267 20.9432C79.5805 20.9811 79.34 21.0152 79.1051 21.0455C78.8741 21.072 78.6866 21.0947 78.5426 21.1136C78.1941 21.1591 77.8684 21.233 77.5653 21.3352C77.2661 21.4337 77.0237 21.5833 76.8381 21.7841C76.6563 21.9811 76.5653 22.25 76.5653 22.5909C76.5653 23.0568 76.7377 23.4091 77.0824 23.6477C77.4309 23.8826 77.8722 24 78.4062 24ZM88.4446 16.2727V17.4091H83.9219V16.2727H88.4446ZM85.2401 14.1818H86.581V22.5C86.581 22.8788 86.6359 23.1629 86.7457 23.3523C86.8594 23.5379 87.0033 23.6629 87.1776 23.7273C87.3556 23.7879 87.5431 23.8182 87.7401 23.8182C87.8878 23.8182 88.009 23.8106 88.1037 23.7955C88.1984 23.7765 88.2741 23.7614 88.331 23.75L88.6037 24.9545C88.5128 24.9886 88.3859 25.0227 88.223 25.0568C88.0601 25.0947 87.8537 25.1136 87.6037 25.1136C87.2249 25.1136 86.8537 25.0322 86.4901 24.8693C86.1302 24.7064 85.831 24.4583 85.5923 24.125C85.3575 23.7917 85.2401 23.3712 85.2401 22.8636V14.1818ZM90.4616 25V16.2727H91.8026V25H90.4616ZM91.1435 14.8182C90.8821 14.8182 90.6567 14.7292 90.4673 14.5511C90.2817 14.3731 90.1889 14.1591 90.1889 13.9091C90.1889 13.6591 90.2817 13.4451 90.4673 13.267C90.6567 13.089 90.8821 13 91.1435 13C91.4048 13 91.6283 13.089 91.8139 13.267C92.0033 13.4451 92.098 13.6591 92.098 13.9091C92.098 14.1591 92.0033 14.3731 91.8139 14.5511C91.6283 14.7292 91.4048 14.8182 91.1435 14.8182ZM97.804 25.1818C97.0161 25.1818 96.3248 24.9943 95.7301 24.6193C95.1392 24.2443 94.6771 23.7197 94.3438 23.0455C94.0142 22.3712 93.8494 21.5833 93.8494 20.6818C93.8494 19.7727 94.0142 18.9792 94.3438 18.3011C94.6771 17.6231 95.1392 17.0966 95.7301 16.7216C96.3248 16.3466 97.0161 16.1591 97.804 16.1591C98.5919 16.1591 99.2813 16.3466 99.8722 16.7216C100.467 17.0966 100.929 17.6231 101.259 18.3011C101.592 18.9792 101.759 19.7727 101.759 20.6818C101.759 21.5833 101.592 22.3712 101.259 23.0455C100.929 23.7197 100.467 24.2443 99.8722 24.6193C99.2813 24.9943 98.5919 25.1818 97.804 25.1818ZM97.804 23.9773C98.4025 23.9773 98.8949 23.8239 99.2812 23.517C99.6676 23.2102 99.9536 22.8068 100.139 22.3068C100.325 21.8068 100.418 21.2652 100.418 20.6818C100.418 20.0985 100.325 19.5549 100.139 19.0511C99.9536 18.5473 99.6676 18.1402 99.2812 17.8295C98.8949 17.5189 98.4025 17.3636 97.804 17.3636C97.2055 17.3636 96.7131 17.5189 96.3267 17.8295C95.9403 18.1402 95.6544 18.5473 95.4688 19.0511C95.2831 19.5549 95.1903 20.0985 95.1903 20.6818C95.1903 21.2652 95.2831 21.8068 95.4688 22.3068C95.6544 22.8068 95.9403 23.2102 96.3267 23.517C96.7131 23.8239 97.2055 23.9773 97.804 23.9773ZM105.146 19.75V25H103.805V16.2727H105.101V17.6364H105.214C105.419 17.1932 105.73 16.8371 106.146 16.5682C106.563 16.2955 107.101 16.1591 107.76 16.1591C108.351 16.1591 108.868 16.2803 109.311 16.5227C109.754 16.7614 110.099 17.125 110.345 17.6136C110.591 18.0985 110.714 18.7121 110.714 19.4545V25H109.374V19.5455C109.374 18.8598 109.196 18.3258 108.839 17.9432C108.483 17.5568 107.995 17.3636 107.374 17.3636C106.946 17.3636 106.563 17.4564 106.226 17.642C105.893 17.8277 105.629 18.0985 105.436 18.4545C105.243 18.8106 105.146 19.2424 105.146 19.75Z" fill="#BFBFC1" />
                <path d="M1.2893 19.6095C1.03891 19.8096 1.03891 20.1904 1.2893 20.3905L18.1878 33.8993C18.5152 34.1611 19 33.928 19 33.5088L19 6.4912C19 6.07204 18.5152 5.83892 18.1878 6.10066L1.2893 19.6095Z" fill="#42434A" stroke="#42434A" />
            </svg>
        </div>
        <div className="levels__stages">
            <Container fluid>
                <Row>
                    {levels?.map((level, index) => {
                        return <Col xs={6} sm={6} lg={4} xl={3} xxl={3} key={index}>
                            <div className={classNames("stage", {
                                "stage--active": level.status
                            })} >
                                <div className="background-active" />
                                <div className="stage__top"
                                    onClick={() => navigate(`${window.location.pathname}/${index + 1}`)}
                                >
                                    <p>
                                        Level {index + 1}
                                    </p>
                                    <div className="stage__top-price">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.5" width="24" height="24" rx="12" fill="#FFED4C" fillOpacity="0.08" />
                                            <path d="M4.86328 11.9922L6.77913 10.0762L8.69498 11.9922L6.77913 13.9081L4.86328 11.9922ZM7.74744 9.10861L12.4921 4.36353L14.4079 6.27951L9.66302 11.0245L7.74744 9.10861ZM7.72707 14.8564L15.3564 7.22658L17.2722 9.14256L9.64278 16.7723L7.72707 14.8564ZM10.5909 17.7204L18.2202 10.0906L20.136 12.0065L12.5066 19.6363L10.5909 17.7204Z" fill="#FFED4C" />
                                        </svg>
                                        {level.price}
                                    </div>
                                    <div className="stage__top-stats">
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 18.433C3 16.4308 4.45485 14.7254 6.43204 14.4098L6.61013 14.3814C8.19336 14.1287 9.80664 14.1287 11.3899 14.3814L11.568 14.4098C13.5451 14.7254 15 16.4308 15 18.433C15 19.2984 14.2984 20 13.433 20H4.56697C3.70156 20 3 19.2984 3 18.433Z" stroke="white" strokeWidth="1.5" />
                                                <path d="M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z" stroke="white" strokeWidth="1.5" />
                                                <path d="M15 11C16.933 11 18.5 9.433 18.5 7.5C18.5 5.567 16.933 4 15 4M17.3899 20H19.433C20.2984 20 21 19.2984 21 18.433C21 16.4308 19.5451 14.7254 17.568 14.4098V14.4098C17.4494 14.3909 17.3293 14.3814 17.2093 14.3814C16.8895 14.3814 16.7902 14.3814 16.2412 14.3814" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            {level.partnersCount}
                                            &nbsp;
                                        </div>
                                        <br />
                                        <div>
                                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.8074 7.79967H17.7528C17.3083 3.98019 13.9936 0.914062 10.0008 0.914062C7.7935 0.914062 5.78959 1.87835 4.40343 3.38504C4.03429 3.74665 4.04936 4.22879 4.3507 4.50753C4.65957 4.79381 5.10405 4.79381 5.48072 4.44727C6.60321 3.23438 8.21537 2.47349 10.0008 2.47349C13.1799 2.47349 15.7489 4.80134 16.1783 7.79967H15.0256C14.4456 7.79967 14.2874 8.22907 14.6264 8.69615L16.4269 11.2425C16.7056 11.6191 17.1275 11.6267 17.3987 11.2425L19.2067 8.70368C19.5457 8.22907 19.3951 7.79967 18.8074 7.79967ZM1.19417 9.61523H2.25639C2.70087 13.4347 6.0156 16.5008 10.0008 16.5008C12.2232 16.5008 14.2271 15.529 15.6133 14.0223C15.9749 13.6607 15.9598 13.1786 15.6585 12.8998C15.3496 12.6136 14.9126 12.6136 14.5284 12.9676C13.421 14.1805 11.8088 14.9414 10.0008 14.9414C6.82921 14.9414 4.2603 12.6136 3.83089 9.61523H4.97598C5.54852 9.61523 5.71426 9.18583 5.37525 8.71875L3.56722 6.17243C3.29601 5.79576 2.87414 5.78823 2.60293 6.17243L0.794895 8.71122C0.448354 9.18583 0.606558 9.61523 1.19417 9.61523Z" fill="#39EB8B" />
                                            </svg>
                                            {level.reinvestCount}
                                        </div>
                                    </div>
                                </div>
                                <button disabled={level.status} onClick={() => handleClickBuyLevel(level, index + 1)}>
                                    {level.status ? <>
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.52975 0.343699C8.4834 -0.114566 10.5166 -0.114566 12.4703 0.343699C15.2916 1.00549 17.4945 3.20842 18.1563 6.02975C18.6146 7.9834 18.6146 10.0166 18.1563 11.9703C17.4945 14.7916 15.2916 16.9945 12.4703 17.6563C10.5166 18.1146 8.4834 18.1146 6.52975 17.6563C3.70842 16.9945 1.5055 14.7916 0.8437 11.9703C0.385433 10.0166 0.385433 7.9834 0.8437 6.02974C1.5055 3.20841 3.70842 1.00549 6.52975 0.343699ZM12.5524 7.47731C12.7689 7.2454 12.7563 6.88195 12.5244 6.6655C12.2925 6.44906 11.9291 6.46159 11.7126 6.6935L8.76776 9.84869L7.27358 8.35451C7.04927 8.1302 6.6856 8.1302 6.4613 8.35451C6.23699 8.57882 6.23699 8.94249 6.4613 9.16679L8.37587 11.0814C8.48601 11.1915 8.63617 11.2522 8.79191 11.2495C8.94765 11.2468 9.09563 11.181 9.20191 11.0671L12.5524 7.47731Z" fill="#39EB8B" />
                                        </svg>
                                        Active
                                    </> : 'Activate level'}

                                </button>
                            </div>
                        </Col>
                    })}
                </Row>
            </Container>
        </div>
        {/* <div className="levels__transactions">
            <Stats levels={true} />
        </div> */}

        <ErrorModal setModalShow={setModalShow} modalShow={modalShow} />
    </div>
}

export default Levels;