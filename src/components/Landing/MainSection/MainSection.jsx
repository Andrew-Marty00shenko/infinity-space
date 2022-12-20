import { Link } from "react-router-dom";
import { useEffect } from "react";
import Parallax from "parallax-js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { loginUser } from "../../../redux/slices/userSlice";
import { connectWallet } from "../../../utils/contract/contract";

import PresentationPDF from "../../../assets/pdfs/presentation.pdf";

import Preloader from "../../Common/Preloader";
import ModalRegister from "../ModalRegister/ModalRegister";

import ChainImg from "../../../assets/images/chain.png";
import CryptoCurrencyImg from "../../../assets/images/cryptocurrency.png";
import SmartContractImg from "../../../assets/images/smart-contract.png";
import Circle from "../../../assets/images/img/circle.png";
import Space from "../../../assets/images/img/space.png";
import logo1 from "../../../assets/images/img/logo-1.png";
import logo2 from "../../../assets/images/img/logo-2.png";
import Moon from "../../../assets/images/img/moon.png";
import Coin2 from "../../../assets/images/img/coin-2.png";
import Main from "../../../assets/images/img/main.png";
import Coin1 from "../../../assets/images/img/coin-1.png";
import DotsLeft from "../../../assets/images/img/dots-left.png";
import DotsRight from "../../../assets/images/img/dots-right.png";
import BigCircle1 from "../../../assets/images/img/big-circle-1.png";
import BigCircle2 from "../../../assets/images/img/big-circle-2.png";
import Polygon from "../../../assets/images/img/polygon.png";
import CircleLight from "../../../assets/images/img/circle-light.png";
// import AnimationLogo from "../../../assets/animation/animation-logo.gif";

import "./MainSection.scss";

const MainSection = ({ data, loadingData }) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [showModalRegister, setShowModalRegister] = useState(false);
    const [uplineId, setUplineId] = useState("");

    let currentDate = new Date();
    let launchDate = new Date("12/20/2022");
    let timeDiff = Math.abs(launchDate.getTime() - currentDate.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    useEffect(() => {
        if (window.innerWidth > 768) {
            var scene1 = document.querySelector('.js-parallax');
            var scene2 = document.querySelector('.js-parallax-1');
            var scene3 = document.querySelector('.js-parallax-2');

            new Parallax(scene1, {
                selector: '.layer'
            });
            new Parallax(scene2, {
                selector: '.layer'
            });
            new Parallax(scene3, {
                selector: '.layer'
            });
        }
    }, []);

    const handleClickConnectWallet = async () => {
        if (window.web3) {
            const account = await connectWallet();
            setLoading(true);
            if (account) {
                dispatch(loginUser(account)).then(({ payload }) => {
                    if (!payload.response) {
                        setShowModalRegister(true);
                    };

                    setLoading(false);
                });
            }
        } else {
            toast.error('Metamask is not intalled');
        }
    };

    return <>
        {loadingData && <Preloader />}
        <section className="main-section">
            <div className="lan">

                <div class="bg-sections-wrapper">
                    <img src={Circle} alt="" class="img-circle" />

                    <section class="section-bg section-bg-1">
                        <img src={Space} alt="" class="space" />

                        <div class="parallax js-parallax">
                            <div class="img logo-1"><img src={logo1} alt="" data-depth="0.12" class="layer part" /></div>
                            <div class="img logo-2"><img src={logo2} alt="" data-depth="0.1" class="layer part" /></div>
                            <div class="img moon"><img src={Moon} alt="" data-depth="0.08" class="layer part" /></div>
                            <div class="img coin-2"><img src={Coin2} alt="" data-depth="0.05" class="layer part" /></div>
                            <div class="img lead"><img src={Main} alt="" data-depth="0.02" class="layer part" /></div>
                            <div class="img coin-1"><img src={Coin1} alt="" data-depth="0.2" class="layer part" /></div>
                        </div>
                    </section>

                    <section class="section-bg section-bg-2">
                        <div class="parallax js-parallax-1">
                            <div class="img dots-left"><img src={DotsLeft} alt="" data-depth="0.04" class="layer part" /></div>
                            <div class="img dots-right"><img src={DotsRight} alt="" data-depth="0.04" class="layer part" /></div>
                        </div>

                        <div class="imgs-wrap">
                            <img src={BigCircle1} alt="" class="big-circle-1" />
                            <img src={BigCircle2} alt="" class="big-circle-2" />
                        </div>

                        <div class="parallax js-parallax-2">
                            <div class="img polygon"><img src={Polygon} alt="" data-depth="0.01" class="layer part" /></div>
                        </div>

                        <div class="imgs-wrap">
                            <img src={CircleLight} alt="" class="circle-light left" />
                            <img src={CircleLight} alt="" class="circle-light right" />
                        </div>
                    </section>
                </div>
            </div>
            <div className="main-section__content">
                {/* <img src={AnimationLogo} alt="logo" /> */}
                <h1>
                    <span>
                        Smart defi solution
                    </span>
                    <br />
                    Worldwide DeFi <br /> platform for making <br /> money
                </h1>
                <h2>
                    Powerful marketing based on smart contract <br /> technology gives unlimited possibilities
                </h2>
                <Link to="/">
                    <button onClick={handleClickConnectWallet}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : ' Connect wallet'}
                    </button>
                </Link>

                <div className="main-section__stats">
                    <div>
                        <p> &#62;{data.totalUsers}</p>
                        <p>Quantity users</p>
                    </div>
                    <div>
                        <p> {diffDays}</p>
                        <p>{diffDays === 1 ? 'Day' : 'Days'} from launch</p>
                    </div>

                    <div>
                        <p>${Math.ceil(data.totalProfit / 1e18)}</p>
                        <p>Earned all the time</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="info-project-section">
            <div className="info-project-section__top">
                <h2>
                    Our project is a web 3.0 <span> platform</span>
                </h2>
                <h3>
                    Our project is a web 3.0 platform that combines blockchain, cryptocurrency, and smart contracts technologies while allowing community members to make money easily and interestingly and to learn about how works the web 3.0.
                </h3>
                <div className="info-project-section__info">
                    <div className="info-block">
                        <div className="info-block__img">
                            <img src={ChainImg} alt="chain" />
                        </div>
                        <div className="info-block__text">
                            <p>Blockchain</p>
                            <p>Blockchain technology is an advanced database mechanism…</p>
                            <div><a href={`${PresentationPDF}#page=6`} target="_blank">Learn more &#62;</a> </div>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="info-block__img">
                            <img src={CryptoCurrencyImg} alt="cryptocurrency" />
                        </div>
                        <div className="info-block__text">
                            <p>Cryptocurrency</p>
                            <p>Blockchain-based digital currency that has real tangible value…</p>
                            <div><a href={`${PresentationPDF}#page=6`} target="_blank">Learn more &#62;</a></div>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="info-block__img">
                            <img src={SmartContractImg} alt="smart-contract" />
                        </div>
                        <div className="info-block__text">
                            <p>Smart Contract</p>
                            <p>Smart-contract is really an automated algorithm…</p>
                            <div><a href={`${PresentationPDF}#page=6`} target="_blank">Learn more &#62;</a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-project-section__results">
                <h2>
                    RESULTS
                </h2>
                <h3>
                    User earnings
                </h3>
                <h4>
                    Statistics are retrieved from the blockchain and displayed in real time
                </h4>
                <div className="info-project-section__results-blocks">
                    <div className="result-block">
                        <div>
                            <p className="result-block__top-text">{data.totalUsers}</p>
                            {/* <div>+ 392</div> */}
                        </div>
                        <p className="result-block__bottom-text">
                            Quantity users
                        </p>
                    </div>
                    <div className="result-block">
                        <div>
                            <p className="result-block__top-text">{data.totalProfit / 1e18}</p>
                            {/* <div>+ 392</div> */}
                        </div>
                        <p className="result-block__bottom-text">
                            Total result
                        </p>
                    </div>

                    <div className="result-block__mobile">
                        <div>
                            <div>
                                <p className="result-block__mobile__top-text">{data.totalUsers}</p>
                                {/* <div>+ 392</div> */}
                            </div>
                            <p className="result-block__mobile__bottom-text">
                                Quantity users
                            </p>
                        </div>
                        <div>
                            <div>
                                <p className="result-block__mobile__top-text">{data.totalProfit / 1e18}</p>
                                {/* <div>+ 392</div> */}
                            </div>
                            <p className="result-block__mobile__bottom-text">
                                Total result
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <ModalRegister
                showModalRegister={showModalRegister}
                setShowModalRegister={setShowModalRegister}
                uplineId={uplineId}
                setUplineId={setUplineId}
            />

        </section>
    </>
}

export default MainSection;