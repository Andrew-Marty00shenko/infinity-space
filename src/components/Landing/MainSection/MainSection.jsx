import "./MainSection.scss";

import Image1 from "../../../assets/images/main-section/image-1.png";
import Image2 from "../../../assets/images/main-section/image-2.png";
import Image3 from "../../../assets/images/main-section/image-3.svg";
import Image4 from "../../../assets/images/main-section/image-4.svg";
import Image5 from "../../../assets/images/main-section/image-5.png";
import Image6 from "../../../assets/images/main-section/image-6.svg";
import Image from "../../../assets/images/backgrounds/Image.png";

const MainSection = () => {
    return <section className="main-section">
        <div className="main-section__content">
            {/* <div className="main-section__back"></div>
        <div className="images">
            <img className="img-1" src={Image1} alt="" />
            <div className="round"></div>
            <img className="img-2" src={Image2} alt="" />
            <img className="img-3" src={Image3} alt="" />
            <img className="img-4" src={Image4} alt="" />
            <img className="img-5" src={Image5} alt="" />
            <img className="img-6" src={Image6} alt="" />
        </div> */}

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
            <button>
                Try now
            </button>

            <div className="main-section__stats">
                <div>
                    <p> &#62;2 350 008</p>
                    <p>Quantity users</p>
                </div>
                <div>
                    <p> &#62;2 350</p>
                    <p>Joined within 24 hours</p>
                </div>
                <div>
                    <p>$1 068 633 089</p>
                    <p>Earned all the time</p>
                </div>
            </div>
        </div>
    </section>
}

export default MainSection;