import "./CardsSection.scss";

import Moon from "../../../assets/images/cards-section/moon.png";
import Moon2 from "../../../assets/images/cards-section/moon-2.png";
import Moon3 from "../../../assets/images/cards-section/moon-3.png";
import Card1 from "../../../assets/images/cards-section/card-1.png";
import Card2 from "../../../assets/images/cards-section/card-2.png";
import Card3 from "../../../assets/images/cards-section/card-3.png";
import { Fade } from "react-awesome-reveal";

const CardsSection = () => {
  return (
    <section className="cards-section">
      <img className="moon" src={Moon} alt="" />
      <img className="moon-2" src={Moon2} alt="" />
      <img className="moon-3" src={Moon3} alt="" />
      <div className="gradient-top"></div>
      <div className="cards-section__title">
        <h3>CARDS</h3>

        <h2>
          <Fade cascade triggerOnce damping={0.1}>
            Select your type of card
          </Fade>
        </h2>
        <p>
          Our project is a web 3.0 platform that combines blockchain,
          cryptocurrency
        </p>
      </div>
      <div className="gradient-bot"></div>
      <div className="cards-section__cards">
        <Fade direction="left" style={{ zIndex: 100, opacity: 0 }}>
          <div className="card-pack one">
            <div className="card-pack__top">
              <div className="circle-big one"></div>
              <div className="circle-small one"></div>
              <img className="card-1" src={Card1} alt="" />
            </div>
            <div className="card-pack__content">
              <h4>Gold card</h4>
              <p>We will release it soon</p>
            </div>

            <div className="card-pack__button">
              <button>COMING SOON</button>
            </div>
          </div>
        </Fade>
        <Fade direction="top" style={{ zIndex: 100, opacity: 0 }}>
          <div className="card-pack two">
            <div className="card-pack__top">
              <div className="circle-big two"></div>
              <div className="circle-small two"></div>
              <img className="card-2" src={Card2} alt="" />
            </div>
            <div className="card-pack__content">
              <h4>Gold card</h4>
              <p>We will release it soon</p>
            </div>

            <div className="card-pack__button">
              <button>COMING SOON</button>
            </div>
          </div>
        </Fade>
        <Fade direction="right" style={{ zIndex: 100, opacity: 0 }}>
          <div className="card-pack three">
            <div className="card-pack__top">
              <div className="circle-big three"></div>
              <div className="circle-small three"></div>
              <img className="card-3" src={Card3} alt="" />
            </div>
            <div className="card-pack__content">
              <h4>Gold card</h4>
              <p>We will release it soon</p>
            </div>

            <div className="card-pack__button">
              <button>COMING SOON</button>
            </div>
          </div>
        </Fade>
      </div>

      <div className="cards-section__buy">
        <div>
          <p>Want to try our product?</p>
          <span>Select simple membership</span>
        </div>

        <div className="cards-section__buy-button">
          <div>
            <span>$50,00</span>
            <span>per month</span>
          </div>
          <div>
            <button>Try now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
