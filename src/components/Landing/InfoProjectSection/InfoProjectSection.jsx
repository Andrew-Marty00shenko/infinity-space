import "./InfoProjectSection.scss";

// import BackgroundImage from "../../../assets/images/backgrounds/info-project-background.png";
import ChainImg from "../../../assets/images/chain.png";
import CryptoCurrencyImg from "../../../assets/images/cryptocurrency.png";
import SmartContractImg from "../../../assets/images/smart-contract.png";

const InfoProjectSection = () => {
    return <section className="info-project-section">
        <div className="info-project-section__top">
            <h2>
                Our project is a web 3.0 <span> platform</span>
            </h2>
            <h3>
                Our project is a web 3.0 platform that combines blockchain, cryptocurrency, and smart contracts technologies while allowing community members to make money easily and interestingly and to learn about how works the web 3.0.
            </h3>
            <div className="info-project-section__info">
                <div className="info-block">
                    <img src={ChainImg} alt="chain" />
                    <p>Blockchain</p>
                    <p>Blockchain technology is an advanced database mechanism…</p>
                    <div>Learn more &#62;</div>
                </div>
                <div className="info-block">
                    <img src={CryptoCurrencyImg} alt="cryptocurrency" />
                    <p>Cryptocurrency</p>
                    <p>Blockchain-based digital currency that has real tangible value…</p>
                    <div>Learn more &#62;</div>
                </div>
                <div className="info-block">
                    <img src={SmartContractImg} alt="smart-contract" />
                    <p>Smart Contract</p>
                    <p>Smart contract is an automated algorithm…</p>
                    <div>Learn more &#62;</div>
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
                        <p className="result-block__top-text">2 351 937</p>
                        <div>+ 392</div>
                    </div>
                    <p className="result-block__bottom-text">
                        Quantity users
                    </p>
                </div>
                <div className="result-block">
                    <div>
                        <p className="result-block__top-text">2 351 937</p>
                        <div>+ 392</div>
                    </div>
                    <p className="result-block__bottom-text">
                        Total result
                    </p>
                </div>

                <div className="result-block__mobile">
                    <div>
                        <div>
                            <p className="result-block__mobile__top-text">2 351 937</p>
                            <div>+ 392</div>
                        </div>
                        <p className="result-block__mobile__bottom-text">
                            Quantity users
                        </p>
                    </div>
                    <div>
                        <div>
                            <p className="result-block__mobile__top-text">2 351 937</p>
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
}

export default InfoProjectSection;