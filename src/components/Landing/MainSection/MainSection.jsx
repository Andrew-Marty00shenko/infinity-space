import { Link } from "react-router-dom";

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

import "./MainSection.scss";

import { useEffect } from "react";
import Parallax from "parallax-js";

const MainSection = ({ data, setClickedSignUp }) => {

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

    return <>
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
                <Link to="/home-page">
                    <button onClick={setClickedSignUp(true)}>
                        Try now
                    </button>
                </Link>

                <div className="main-section__stats">
                    <div>
                        <p> &#62;{data.totalUsers}</p>
                        <p>Quantity users</p>
                    </div>
                    <div>
                        <p> &#62;2 350</p>
                        <p>Joined within 24 hours</p>
                    </div>
                    <div>
                        <p>${data.totalProfit}</p>
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
                            <div>Learn more &#62;</div>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="info-block__img">
                            <img src={CryptoCurrencyImg} alt="cryptocurrency" />
                        </div>
                        <div className="info-block__text">
                            <p>Cryptocurrency</p>
                            <p>Blockchain-based digital currency that has real tangible value…</p>
                            <div>Learn more &#62;</div>
                        </div>
                    </div>
                    <div className="info-block">
                        <div className="info-block__img">
                            <img src={SmartContractImg} alt="smart-contract" />
                        </div>
                        <div className="info-block__text">
                            <p>Smart Contract</p>
                            <p>Smart-contract is really an automated algorithm…</p>
                            <div>Learn more &#62;</div>
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
                            <div>+ 392</div>
                        </div>
                        <p className="result-block__bottom-text">
                            Quantity users
                        </p>
                    </div>
                    <div className="result-block">
                        <div>
                            <p className="result-block__top-text">{data.totalProfit}</p>
                            <div>+ 392</div>
                        </div>
                        <p className="result-block__bottom-text">
                            Total result
                        </p>
                    </div>

                    <div className="result-block__mobile">
                        <div>
                            <div>
                                <p className="result-block__mobile__top-text">{data.totalUsers}</p>
                                <div>+ 392</div>
                            </div>
                            <p className="result-block__mobile__bottom-text">
                                Quantity users
                            </p>
                        </div>
                        <div>
                            <div>
                                <p className="result-block__mobile__top-text">{data.totalProfit}</p>
                                <div>+ 392</div>
                            </div>
                            <p className="result-block__mobile__bottom-text">
                                Total result
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default MainSection;