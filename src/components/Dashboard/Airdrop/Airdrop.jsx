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

const Airdrop = () => {
    const user = useSelector(state => state.user.user);
    const wallet = useSelector(state => state.user.wallet);
    const dispatch = useDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm();

    const [phone, setPhone] = useState('')

    useEffect(() => {
        dispatch(getUserData(wallet));
    }, []);

    const onChange = (status, phoneNumber, country) => {
        // console.log(phoneNumber, status, country)
        setPhone(phoneNumber)
    }

    const onSubmit = data => {
        console.log(data)
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
            <Col xl={6}>
                <form className="airdrop-form" onSubmit={handleSubmit(onSubmit)}>
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
                        preferredCountries={['ua']}
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
                                After that, enter a contract address in the "Token contract address" line, press "Add custom token" and then click on "Import tokens".
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
                                Upon completing all these steps, INSP token will be displayed in your wallet.
                            </p>
                            <img src={ContractImg3} alt="contract" />
                        </div>
                    </div>
                </div>
            </Col>
            <Col xxl={6} className='block'>
                <div className="links-block">
                    <h3>
                        Want to get 30 INSP tokens for free?!
                    </h3>
                    <div className="links-items">
                        <div className="link">

                            Connecting Metamask
                        </div>
                        <div className="link">

                            Subscribe + retweet on Twitter
                        </div>
                        <div className="link">

                            Subscribe + comment on YouTube
                        </div>
                        <div className="link">

                            Subscribe on Telegram
                        </div>
                    </div>
                    <button>
                        GET 30 TOKENS
                    </button>
                </div>
            </Col>
        </Row>
    </div >
}

export default Airdrop;