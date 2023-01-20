import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import IntlTelInput from 'react-intl-tel-input';

import { getUserData } from '../../../redux/slices/userSlice';

import ContractImg1 from "../../../assets/images/contract-1.png";
import ContractImg2 from "../../../assets/images/contract-2.png";
import ContractImg3 from "../../../assets/images/contract-3.png";
import 'react-intl-tel-input/dist/main.css';
import './Airdrop.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import axios from 'axios';
import apiUser from '../../../api/apiServer/apiUser';
import Preloader from '../../Common/Preloader';

const Airdrop = () => {
    const user = useSelector(state => state.user.user);
    const wallet = useSelector(state => state.user.wallet);
    const viewer = useSelector(state => state.user.viewer);
    const dispatch = useDispatch();
    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const [phone, setPhone] = useState('');
    const [countryData, setCountryData] = useState({});
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        apiUser.getUserData(user?.id)
            .then(({ data }) => {
                setUpdated(false);
                setUserData(data);
                setLoading(false);
                reset({
                    full_name: data.name,
                    email: data.email
                });
                if (data.phone !== null) {
                    setPhone(data.phone);
                }
            })
    }, [user, updated]);

    useEffect(() => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                setCountryData({
                    ip: data.ip,
                    country: data.country_name
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        dispatch(getUserData(wallet));
    }, []);

    const onChange = (status, phoneNumber, country) => {
        setPhone(phoneNumber)
    }

    const onSubmit = data => {
        if (phone !== '') {
            apiUser.postUserData({
                wallet: wallet,
                email: data.email,
                phone: phone,
                ip: countryData.ip,
                name: data.full_name,
                country: countryData.country
            }).then(({ data }) => {
                if (data.status === 'success') {
                    toast.success("Your data has been sent");
                    setUpdated(true);
                }
            })
        } else {
            toast.error('Enter the phone number!')
        }
    }

    if (loading) {
        return <Preloader team={user !== null ? true : false} />
    }

    return <div className="airdrop">
        <div className="airdrop__header">
            <h2>
                Airdrop
            </h2>
            <div>
                ID {user?.id}
            </div>
        </div>
        <Row>
            <Col xl={6} className="form__active" style={{ position: 'relative' }}>
                <form className={classNames("airdrop-form", {
                    "airdrop-form--active": userData?.ip !== null,
                    "airdrop-form--viewer": viewer,
                })} onSubmit={handleSubmit(onSubmit)}>

                    <input
                        className={classNames({ "error": errors.full_name })}
                        type="text"
                        placeholder='|Full Name'
                        {...register("full_name", {
                            required: true
                        })}
                    />

                    {errors.full_name && <p className='error'>
                        *this field is required
                    </p>}

                    <br />
                    <IntlTelInput
                        preferredCountries={["br"]}
                        placeholder="|Phone number"
                        onPhoneNumberChange={onChange}
                        value={phone}
                        format
                        separateDialCode
                    />

                    <br />
                    <input type="email"
                        placeholder='|E-Mail'
                        className={classNames({ "error": errors.email })}
                        {...register("email", {
                            required: true
                        })}
                    />

                    {errors.email && <p className='error'>
                        *this field is required
                    </p>}

                    <br />
                    <div>
                        <p>
                            To get an airdrop, fill out the form
                        </p>
                        <button>
                            Done !
                        </button>
                    </div>
                </form>
                {userData?.ip !== null && user?.id !== '0' && <span className='text_filled'>
                    You have already filled out the necessary data
                </span>}
                {viewer && <span className='text_viewer'>
                    You are in viewer mode
                </span>}
                {user?.id === '0' && <span className='text_viewer'>
                    You should buy a level to post this form
                </span>}
            </Col>
            <Col xl={6} className='block'>
                <div className="airdrop-info-tokens">
                    <div className="block-under">

                    </div>
                    <div className="text">
                        You get tokens for activating levels:
                    </div>

                    <div className="info-tokens">
                        <div className="info-tokens-item">
                            <li>
                                LEVEL 1
                            </li>
                            <li>
                                150 tokens
                            </li>
                        </div>
                        <div className="info-tokens-item">
                            <li>
                                LEVEL 3
                            </li>
                            <li>
                                2300 tokens
                            </li>
                        </div>
                        <div className="info-tokens-item">
                            <li>
                                LEVEL 6
                            </li>
                            <li>
                                2500 tokens
                            </li>
                        </div>
                        <div className="info-tokens-item">
                            <li>
                                LEVEL 9
                            </li>
                            <li>
                                2500 tokens
                            </li>
                        </div>
                        <div className="info-tokens-item">
                            <li>
                                LEVEL 12
                            </li>
                            <li>
                                20000 tokens
                            </li>
                        </div>
                    </div>

                    <div className="info-tokens__total">
                        <p>
                            Total tokens:
                        </p>
                        <button onClick={() => alert('You can not claim tokens yet')}>
                            Go to claim !
                        </button>
                    </div>

                </div>
            </Col>
        </Row>
        <Row>
            <Col xxl={6}>
                <div className="contract-address">
                    <div className="contract-address__header">
                        <h3>
                            INSP TOKEN smart contract address:
                        </h3>
                        <p >
                            0x32c5f3E632F79282aEc6C2A1E607e90592F12Bb4
                            <CopyToClipboard text={'0x32c5f3E632F79282aEc6C2A1E607e90592F12Bb4'} onCopy={() => toast.success("Address copied", { autoClose: 1000 })}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 11.5V13.6C5.5 14.4401 5.5 14.8601 5.66349 15.181C5.8073 15.4632 6.03677 15.6927 6.31901 15.8365C6.63988 16 7.05992 16 7.9 16H13.6C14.4401 16 14.8601 16 15.181 15.8365C15.4632 15.6927 15.6927 15.4632 15.8365 15.181C16 14.8601 16 14.4401 16 13.6V7.9C16 7.05992 16 6.63988 15.8365 6.31901C15.6927 6.03677 15.4632 5.8073 15.181 5.66349C14.8601 5.5 14.4401 5.5 13.6 5.5H11.5M3.4 11.5H9.1C9.94008 11.5 10.3601 11.5 10.681 11.3365C10.9632 11.1927 11.1927 10.9632 11.3365 10.681C11.5 10.3601 11.5 9.94008 11.5 9.1V3.4C11.5 2.55992 11.5 2.13988 11.3365 1.81901C11.1927 1.53677 10.9632 1.3073 10.681 1.16349C10.3601 1 9.94008 1 9.1 1H3.4C2.55992 1 2.13988 1 1.81901 1.16349C1.53677 1.3073 1.3073 1.53677 1.16349 1.81901C1 2.13988 1 2.55992 1 3.4V9.1C1 9.94008 1 10.3601 1.16349 10.681C1.3073 10.9632 1.53677 11.1927 1.81901 11.3365C2.13988 11.5 2.55992 11.5 3.4 11.5Z" stroke="#AFC6FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </CopyToClipboard>
                        </p>
                    </div>
                    <div className="contract-address__blocks">
                        <div className="address__block">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_23_343)" />
                                <path d="M10.9915 6.72727V14H9.45383V8.18679H9.41122L7.74573 9.23082V7.86719L9.54616 6.72727H10.9915Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_23_343" x1="22.6316" y1="1.41994e-07" x2="-3.15789" y2="23.6842" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#184BFF" />
                                        <stop offset="1" stop-color="#A983D4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="text order-one">
                                To add INSP token to your Metamask, first you need to click on "Import tokens" and then choose "Custom token".
                            </p>
                            <img src={ContractImg1} alt="contract" />
                        </div>
                        <div className="address__block">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_23_346)" />
                                <path d="M7.12429 14V12.892L9.71306 10.495C9.93323 10.282 10.1179 10.0902 10.267 9.91974C10.4186 9.74929 10.5334 9.58239 10.6115 9.41903C10.6896 9.25331 10.7287 9.07457 10.7287 8.88281C10.7287 8.66974 10.6802 8.48627 10.5831 8.33239C10.486 8.17614 10.3535 8.05658 10.1854 7.97372C10.0173 7.88849 9.8267 7.84588 9.61363 7.84588C9.39109 7.84588 9.19697 7.89086 9.03125 7.98082C8.86553 8.07079 8.73768 8.19981 8.64772 8.3679C8.55776 8.53598 8.51278 8.73603 8.51278 8.96804H7.05326C7.05326 8.49219 7.16098 8.07907 7.37642 7.72869C7.59185 7.37831 7.8937 7.10724 8.28196 6.91548C8.67021 6.72372 9.11766 6.62784 9.62429 6.62784C10.1451 6.62784 10.5985 6.72017 10.9844 6.90483C11.3726 7.08712 11.6745 7.34044 11.8899 7.66477C12.1053 7.98911 12.2131 8.3608 12.2131 8.77983C12.2131 9.05445 12.1586 9.32552 12.0497 9.59304C11.9432 9.86056 11.7526 10.1577 11.478 10.4844C11.2034 10.8087 10.8163 11.1982 10.3168 11.6527L9.25497 12.6932V12.7429H12.3089V14H7.12429Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_23_346" x1="22.6316" y1="1.41994e-07" x2="-3.15789" y2="23.6842" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#184BFF" />
                                        <stop offset="1" stop-color="#A983D4" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <p className="text order-two">
                                After that, enter a contract address in the "Token contract address" line, press "Add custom token".
                            </p>
                            <img src={ContractImg2} alt="contract" />
                        </div>
                        <div className="address__block">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_23_349)" />
                                <path d="M9.66601 14.0994C9.13571 14.0994 8.66341 14.0083 8.24911 13.826C7.83718 13.6413 7.51165 13.388 7.27255 13.0661C7.0358 12.7417 6.91388 12.3677 6.90678 11.9439H8.45507C8.46454 12.1214 8.52255 12.2777 8.62908 12.4126C8.73798 12.5452 8.88239 12.6482 9.06232 12.7216C9.24224 12.795 9.44466 12.8317 9.66956 12.8317C9.90394 12.8317 10.1111 12.7902 10.291 12.7074C10.4709 12.6245 10.6118 12.5097 10.7136 12.3629C10.8154 12.2161 10.8663 12.0469 10.8663 11.8551C10.8663 11.661 10.8118 11.4893 10.7029 11.3402C10.5964 11.1887 10.4425 11.0703 10.2413 10.9851C10.0424 10.8999 9.80569 10.8572 9.53107 10.8572H8.8528V9.72798H9.53107C9.76308 9.72798 9.96786 9.68774 10.1454 9.60724C10.3253 9.52675 10.465 9.41548 10.5644 9.27344C10.6639 9.12902 10.7136 8.96094 10.7136 8.76918C10.7136 8.58688 10.6698 8.42708 10.5822 8.28977C10.497 8.15009 10.3762 8.04119 10.22 7.96307C10.0661 7.88494 9.88618 7.84588 9.68022 7.84588C9.47188 7.84588 9.2813 7.88376 9.10848 7.95952C8.93566 8.03291 8.79717 8.13826 8.693 8.27557C8.58883 8.41288 8.5332 8.57386 8.5261 8.75852H7.05237C7.05948 8.33949 7.17903 7.97017 7.41104 7.65057C7.64305 7.33097 7.95555 7.0812 8.34854 6.90128C8.7439 6.71899 9.19016 6.62784 9.68732 6.62784C10.1892 6.62784 10.6284 6.71899 11.0048 6.90128C11.3812 7.08357 11.6736 7.32978 11.8819 7.63991C12.0926 7.94768 12.1968 8.29332 12.1944 8.67685C12.1968 9.08404 12.0701 9.42377 11.8144 9.69602C11.5611 9.96828 11.2309 10.1411 10.8237 10.2145V10.2713C11.3587 10.34 11.7659 10.5258 12.0453 10.8288C12.327 11.1295 12.4667 11.5059 12.4643 11.9581C12.4667 12.3724 12.3471 12.7405 12.1056 13.0625C11.8665 13.3845 11.5363 13.6378 11.1149 13.8224C10.6935 14.0071 10.2105 14.0994 9.66601 14.0994Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_23_349" x1="22.6316" y1="1.41994e-07" x2="-3.15789" y2="23.6842" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#184BFF" />
                                        <stop offset="1" stop-color="#A983D4" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <p className="text order-three">
                                And then click on "Import tokens". Upon completing all these steps, INSP token will be displayed in your wallet.
                            </p>
                            <img src={ContractImg3} alt="contract" />
                        </div>
                    </div>
                </div>
            </Col>
            <Col xxl={6} className='block'>
                <div className='over' style={{ position: 'relative', zIndex: 20 }}>
                    <div className="links-block">
                        <h3>
                            Want to get 30 INSP tokens for free?!
                        </h3>
                        <div className="links-items">
                            <div className="link">
                                <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_83_907)" filter="url(#filter0_d_83_907)">
                                        <path d="M26.7835 2.02441L17.437 9.19903L19.1657 4.96597L26.7835 2.02441Z" fill="#E2761B" stroke="#E2761B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.20703 2.02441L14.4785 9.26693L12.8343 4.96597L5.20703 2.02441Z" fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M23.4205 18.6553L20.9313 22.5972L26.2575 24.1115L27.7887 18.7427L23.4205 18.6553Z" fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.2207 18.7427L5.74247 24.1115L11.0687 22.5972L8.57948 18.6553L4.2207 18.7427Z" fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.7681 11.995L9.28363 14.3158L14.572 14.5585L14.3844 8.68469L10.7681 11.995Z" fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.2225 11.995L17.5594 8.61676L17.437 14.5585L22.7164 14.3157L21.2225 11.995Z" fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.0687 22.5972L14.2436 20.995L11.5006 18.7813L11.0687 22.5972Z" fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.7469 20.995L20.9313 22.5972L20.4899 18.7813L17.7469 20.995Z" fill="#E4761B" stroke="#E4761B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.9313 22.5972L17.7469 20.9951L18.0007 23.1409L17.9724 24.0436L20.9313 22.5972Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.0687 22.5972L14.0276 24.0436L14.0087 23.1409L14.2436 20.9951L11.0687 22.5972Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.0744 17.3643L11.4255 16.5583L13.2946 15.6747L14.0744 17.3643Z" fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.9161 17.3643L18.6959 15.6747L20.5745 16.5583L17.9161 17.3643Z" fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.0686 22.5972L11.5195 18.6553L8.57947 18.7427L11.0686 22.5972Z" fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.4805 18.6553L20.9313 22.5972L23.4205 18.7427L20.4805 18.6553Z" fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M22.7164 14.3157L17.437 14.5585L17.9256 17.3643L18.7054 15.6747L20.584 16.5583L22.7164 14.3157Z" fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.4254 16.5583L13.304 15.6747L14.0744 17.3643L14.572 14.5585L9.28363 14.3157L11.4254 16.5583Z" fill="#CD6116" stroke="#CD6116" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.28363 14.3157L11.5006 18.7813L11.4254 16.5583L9.28363 14.3157Z" fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.584 16.5583L20.4899 18.7813L22.7163 14.3157L20.584 16.5583Z" fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.572 14.5585L14.0744 17.3643L14.6945 20.6746L14.8353 16.3156L14.572 14.5585Z" fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.437 14.5585L17.1837 16.3058L17.2961 20.6746L17.9256 17.3643L17.437 14.5585Z" fill="#E4751F" stroke="#E4751F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.9256 17.3643L17.2961 20.6746L17.7469 20.995L20.4899 18.7813L20.584 16.5583L17.9256 17.3643Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.4255 16.5583L11.5006 18.7813L14.2436 20.995L14.6944 20.6746L14.0744 17.3643L11.4255 16.5583Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.9724 24.0436L18.0007 23.1409L17.7659 22.9269H14.2247L14.0087 23.1409L14.0276 24.0436L11.0687 22.5972L12.1018 23.4706L14.1963 24.9756H17.7942L19.8982 23.4706L20.9313 22.5972L17.9724 24.0436Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.747 20.9951L17.2961 20.6746H14.6945L14.2436 20.9951L14.0087 23.1409L14.2247 22.9269H17.7659L18.0008 23.1409L17.747 20.9951Z" fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27.1781 9.66503L27.9764 5.70404L26.7835 2.02441L17.7469 8.95626L21.2224 11.995L26.1351 13.4805L27.2249 12.1699L26.7552 11.8206L27.5066 11.1119L26.9244 10.6459L27.6758 10.0534L27.1781 9.66503Z" fill="#763D16" stroke="#763D16" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.02362 5.70404L4.82184 9.66503L4.31474 10.0534L5.06617 10.6459L4.49338 11.1119L5.24482 11.8206L4.77505 12.1699L5.85541 13.4805L10.7681 11.995L14.2436 8.95626L5.20701 2.02441L4.02362 5.70404Z" fill="#763D16" stroke="#763D16" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M26.1351 13.4805L21.2225 11.9951L22.7163 14.3158L20.4899 18.7813L23.4205 18.7428H27.7887L26.1351 13.4805Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.7681 11.9951L5.85542 13.4805L4.2207 18.7428H8.57949L11.5006 18.7813L9.28366 14.3158L10.7681 11.9951Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.4369 14.5585L17.747 8.9563L19.1752 4.966H12.8343L14.2436 8.9563L14.572 14.5585L14.685 16.3253L14.6944 20.6746H17.2961L17.315 16.3253L17.4369 14.5585Z" fill="#F6851B" stroke="#F6851B" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_83_907" x="0" y="0" width="32" height="31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="2" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_83_907" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_83_907" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_83_907">
                                            <rect width="24" height="23" fill="white" transform="translate(4 2)" />
                                        </clipPath>
                                    </defs>
                                </svg>


                                Connecting Metamask
                            </div>
                            <div className="link">
                                <a href="https://twitter.com/InSpace_Web3" target="_blank">
                                    <svg width="32" height="31" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_90_370)" filter="url(#filter0_d_90_370)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.92188 0H21.0781C22.3824 0.00360791 23.6322 0.52332 24.5544 1.44557C25.4767 2.36782 25.9964 3.61762 26 4.92188V19.0781C25.9964 20.3824 25.4767 21.6322 24.5544 22.5544C23.6322 23.4767 22.3824 23.9964 21.0781 24H6.92188C5.61762 23.9964 4.36782 23.4767 3.44557 22.5544C2.52332 21.6322 2.00361 20.3824 2 19.0781L2 4.92188C2.00361 3.61762 2.52332 2.36782 3.44557 1.44557C4.36782 0.52332 5.61762 0.00360791 6.92188 0Z" fill="#1DA1F2" />
                                            <g filter="url(#filter1_d_90_370)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0469 7.62893C20.5184 7.86393 19.9573 8.01737 19.3828 8.08401C19.9849 7.72068 20.4362 7.15292 20.6543 6.4844C20.0866 6.82081 19.4658 7.05794 18.8184 7.18558C18.4214 6.76341 17.9069 6.47018 17.3414 6.34389C16.7758 6.2176 16.1854 6.26407 15.6466 6.47727C15.1078 6.69048 14.6455 7.06059 14.3195 7.53965C13.9935 8.01872 13.8189 8.58464 13.8184 9.16409C13.8172 9.38564 13.8421 9.60657 13.8926 9.82229C12.7439 9.76414 11.6203 9.46508 10.5947 8.94455C9.56915 8.42401 8.66448 7.69363 7.93945 6.80081C7.68376 7.24242 7.54903 7.74364 7.54883 8.25393C7.54827 8.72979 7.66551 9.19838 7.8901 9.61791C8.11468 10.0374 8.43963 10.3948 8.83594 10.6582C8.37679 10.6439 7.92762 10.5207 7.52539 10.2989V10.336C7.52517 11.0031 7.7557 11.6498 8.1779 12.1663C8.6001 12.6828 9.18797 13.0374 9.8418 13.17C9.59357 13.2377 9.33738 13.2719 9.08008 13.2715C8.89666 13.2705 8.71368 13.2535 8.5332 13.2207C8.71773 13.7958 9.07719 14.299 9.56142 14.66C10.0457 15.021 10.6305 15.2218 11.2344 15.2344C10.02 16.1815 8.48021 16.6098 6.95117 16.4258C8.27372 17.2754 9.81286 17.7263 11.3848 17.7246C16.7031 17.7246 19.6133 13.3184 19.6133 9.49808C19.6133 9.37112 19.6133 9.24808 19.6133 9.12503C20.1793 8.71729 20.6675 8.21121 21.0547 7.63089L21.0469 7.62893Z" fill="white" />
                                            </g>
                                        </g>
                                        <defs>
                                            <filter id="filter0_d_90_370" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="2" />
                                                <feGaussianBlur stdDeviation="1" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_370" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_90_370" result="shape" />
                                            </filter>
                                            <filter id="filter1_d_90_370" x="2.95117" y="6.27435" width="22.1035" height="19.4503" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_370" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_90_370" result="shape" />
                                            </filter>
                                            <clipPath id="clip0_90_370">
                                                <rect width="24" height="24" fill="white" transform="translate(2)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Subscribe + retweet on Twitter
                                </a>
                            </div>
                            <div className="link">
                                <a href="https://www.youtube.com/@Infinity-Space" target="_blank">
                                    <svg width="32" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_93_413)">
                                            <rect x="7" y="8.30768" width="14" height="10.3846" fill="#D9D9D9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7142 8.1016C27.7142 8.1016 27.4408 6.24054 26.5996 5.42333C25.5335 4.34854 24.3399 4.34166 23.7942 4.27929C19.8791 4.00421 13.9986 4.00421 13.9986 4.00421H13.9884C13.9884 4.00421 8.11065 4.00421 4.19331 4.27929C3.64546 4.34352 2.4535 4.34798 1.38796 5.42333C0.546107 6.24054 0.278567 8.1016 0.278567 8.1016C0.278567 8.1016 -6.10352e-05 10.2855 -6.10352e-05 12.4741V14.5205C-6.10352e-05 16.7045 0.278399 18.8928 0.278399 18.8928C0.278399 18.8928 0.551736 20.7539 1.38779 21.5725C2.45333 22.6473 3.85369 22.6124 4.47882 22.7271C6.72037 22.9334 14.0006 22.9956 14.0006 22.9956C14.0006 22.9956 19.886 22.9855 23.8013 22.7156C24.3491 22.6532 25.5406 22.6469 26.6066 21.5715C27.4484 20.7543 27.7212 18.8912 27.7212 18.8912C27.7212 18.8912 28 16.7073 28 14.5189V12.4726C27.9944 10.2887 27.7158 8.10031 27.7158 8.10031L27.7142 8.1016ZM11.0984 17.0033V9.4151L18.6622 13.2219L11.0984 17.0033Z" fill="#CD1F1F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_93_413">
                                                <rect width="28" height="27" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Subscribe + comment on YouTube
                                </a>
                            </div>
                            <div className="link">
                                <a href="https://t.me/InfinitySpaceWeb3" target="_blank">
                                    <svg width="31" height="31" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_83_461)">
                                            <path d="M13.5 26C20.9558 26 27 20.1797 27 13C27 5.8203 20.9558 0 13.5 0C6.04416 0 0 5.8203 0 13C0 20.1797 6.04416 26 13.5 26Z" fill="url(#paint0_linear_83_461)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9977 7.11398L17.5892 18.8076C17.5892 18.8076 17.2524 19.6185 16.3261 19.2291L10.768 15.1259L8.74693 14.1853L5.34478 13.0824C5.34478 13.0824 4.82265 12.9039 4.77219 12.5148C4.72165 12.1254 5.36163 11.9146 5.36163 11.9146L18.8862 6.8058C18.8862 6.8058 19.9977 6.33546 19.9977 7.11398H19.9977Z" fill="#FEFEFE" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3409 18.6763C10.3409 18.6763 10.1787 18.6616 9.97649 18.0453C9.77439 17.4291 8.74707 14.1854 8.74707 14.1854L16.9156 9.19002C16.9156 9.19002 17.3872 8.91429 17.3703 9.19002C17.3703 9.19002 17.4546 9.23861 17.2019 9.46567C16.9493 9.69273 10.7849 15.0286 10.7849 15.0286L10.341 18.6763H10.3409Z" fill="#D4E6F1" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8992 16.6993L10.7008 18.6294C10.7008 18.6294 10.5289 18.7549 10.3409 18.6763L10.7619 15.091L12.8992 16.6993Z" fill="#B6D0E5" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_83_461" x1="13.161" y1="23.9675" x2="13.7897" y2="2.03107" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#19A8DD" />
                                                <stop offset="0.678" stop-color="#2AB2E2" />
                                                <stop offset="1" stop-color="#3CBDE8" />
                                            </linearGradient>
                                            <clipPath id="clip0_83_461">
                                                <rect width="27" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Subscribe on Telegram
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="links-block__back">

                    </div>
                </div>

                <div className="button-block">
                    <button>
                        Get 30 tokens
                    </button>
                </div>
            </Col>
        </Row>
    </div >
}

export default Airdrop;