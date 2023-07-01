import "./BenefitsSection.scss";

import Human from "../../../assets/images/benefits-section/human.png";
import Substract from "../../../assets/images/benefits-section/subtract.png";
import Circle1 from "../../../assets/images/benefits-section/circle-1.png";
import First from "../../../assets/images/benefits-section/first-img.png";
import Second from "../../../assets/images/benefits-section/second-img.png";
import Third from "../../../assets/images/benefits-section/third-img.png";
import Fourth from "../../../assets/images/benefits-section/fourth-img.png";
import Fifth from "../../../assets/images/benefits-section/fifth-img.png";
import Sixth from "../../../assets/images/benefits-section/sixth-img.png";
import Seventh from "../../../assets/images/benefits-section/seventh-img.png";
import Eigth from "../../../assets/images/benefits-section/eighth-img.png";
import Circle2 from "../../../assets/images/benefits-section/circle-2.png";

import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";
import { useState } from "react";

const BenefitsSection = () => {
  const [showTextOne, setShowTextOne] = useState(false);
  const [showTextTwo, setShowTextTwo] = useState(false);
  const [showThreeThree, setShowTextThree] = useState(false);
  const [showTextFour, setShowTextFour] = useState(false);
  const [showTextFive, setShowTextFive] = useState(false);
  const [showTextSix, setShowTextSix] = useState(false);
  const [showTextSeven, setShowTextSeven] = useState(false);
  const [showTextEight, setShowTextEight] = useState(false);

  return (
    <>
      <Element name="values"></Element>
      <section className="benefits">
        <div className="benefits__content">
          <div className="gradient"></div>
          <Fade
            direction="top"
            triggerOnce
            duration={1000}
            style={{ opacity: 0 }}
          >
            <h1>IN SPACE</h1>

            <p>Aspects of life</p>
          </Fade>

          <div className="benefits__content-images">
            <Fade cascade damping={0.1} style={{ opacity: 0 }} triggerOnce>
              <img className="human" src={Human} alt="" />
              <img className="circle-1" src={Circle1} alt="" />
              <img className="circle-2" src={Circle2} alt="" />
              <img className="substract" src={Substract} alt="" />
              <div
                className="block one"
                onMouseEnter={() => setShowTextOne(true)}
                onMouseLeave={() => {
                  setShowTextOne(false);
                }}
              >
                <img src={First} alt="" />
                {showTextOne && (
                  <div>
                    <span className="char-1">c</span>
                    <span className="char-2">o</span>
                    <span className="char-3">s</span>
                    <span className="char-4">m</span>
                    <span className="char-5">i</span>
                    <span className="char-6">c</span>

                    <span className="char-7">g</span>
                    <span className="char-8">v</span>
                    <span className="char-9">a</span>
                    <span className="char-10">r</span>
                    <span className="char-11">d</span>
                    <span className="char-12">i</span>
                    <span className="char-13">o</span>
                    <span className="char-14">n</span>
                  </div>
                )}
              </div>
              <div
                className="block two"
                onMouseEnter={() => setShowTextTwo(true)}
                onMouseLeave={() => {
                  setShowTextTwo(false);
                }}
              >
                <img src={Second} alt="" />
                {showTextTwo && (
                  <div>
                    <span className="char-1">s</span>
                    <span className="char-2">p</span>
                    <span className="char-3">a</span>
                    <span className="char-4">c</span>
                    <span className="char-5">e</span>

                    <span className="char-6">a</span>
                    <span className="char-7">r</span>
                    <span className="char-8">t</span>
                    <span className="char-9">i</span>
                    <span className="char-10">s</span>
                    <span className="char-11">t</span>
                  </div>
                )}
              </div>
              <div
                className="block three"
                onMouseEnter={() => setShowTextThree(true)}
                onMouseLeave={() => {
                  setShowTextThree(false);
                }}
              >
                <img src={Third} alt="" />
                {showThreeThree && (
                  <div>
                    <span className="char-1">g</span>
                    <span className="char-2">a</span>
                    <span className="char-3">l</span>
                    <span className="char-4">a</span>
                    <span className="char-5">c</span>
                    <span className="char-6">t</span>
                    <span className="char-7">i</span>
                    <span className="char-8">c</span>

                    <span className="char-9">i</span>
                    <span className="char-10">n</span>
                    <span className="char-11">v</span>
                    <span className="char-12">e</span>
                    <span className="char-13">s</span>
                    <span className="char-14">t</span>
                    <span className="char-15">o</span>
                    <span className="char-16">r</span>
                  </div>
                )}
              </div>
              <div
                className="block four"
                onMouseEnter={() => setShowTextFour(true)}
                onMouseLeave={() => {
                  setShowTextFour(false);
                }}
              >
                <img src={Fourth} alt="" />
                {showTextFour && (
                  <div>
                    <span className="char-1">u</span>
                    <span className="char-2">n</span>
                    <span className="char-3">i</span>
                    <span className="char-4">v</span>
                    <span className="char-5">e</span>
                    <span className="char-6">r</span>
                    <span className="char-7">s</span>
                    <span className="char-8">e</span>

                    <span className="char-9">e</span>
                    <span className="char-10">n</span>
                    <span className="char-11">e</span>
                    <span className="char-12">r</span>
                    <span className="char-13">g</span>
                    <span className="char-14">y</span>
                  </div>
                )}
              </div>
              <div
                className="block five"
                onMouseEnter={() => setShowTextFive(true)}
                onMouseLeave={() => {
                  setShowTextFive(false);
                }}
              >
                <img src={Fifth} alt="" />
                {showTextFive && (
                  <div>
                    <span className="char-1">s</span>
                    <span className="char-2">t</span>
                    <span className="char-3">a</span>
                    <span className="char-4">r</span>

                    <span className="char-5">t</span>
                    <span className="char-6">e</span>
                    <span className="char-7">a</span>
                    <span className="char-8">c</span>
                    <span className="char-9">h</span>
                    <span className="char-10">e</span>
                    <span className="char-11">r</span>
                  </div>
                )}
              </div>
              <div
                className="block six"
                onMouseEnter={() => setShowTextSix(true)}
                onMouseLeave={() => {
                  setShowTextSix(false);
                }}
              >
                <img src={Sixth} alt="" />
                {showTextSix && (
                  <div>
                    <span className="char-1">s</span>
                    <span className="char-2">p</span>
                    <span className="char-3">a</span>
                    <span className="char-4">c</span>
                    <span className="char-5">e</span>

                    <span className="char-6">e</span>
                    <span className="char-7">x</span>
                    <span className="char-8">p</span>
                    <span className="char-9">l</span>
                    <span className="char-10">o</span>
                    <span className="char-11">r</span>
                    <span className="char-12">e</span>
                    <span className="char-13">r</span>
                  </div>
                )}
              </div>
              <div
                className="block seven"
                onMouseEnter={() => setShowTextSeven(true)}
                onMouseLeave={() => {
                  setShowTextSeven(false);
                }}
              >
                <img src={Seventh} alt="" />
                {showTextSeven && (
                  <div>
                    <span className="char-1">s</span>
                    <span className="char-2">p</span>
                    <span className="char-3">a</span>
                    <span className="char-4">c</span>
                    <span className="char-5">e</span>

                    <span className="char-6">t</span>
                    <span className="char-7">r</span>
                    <span className="char-8">a</span>
                    <span className="char-9">v</span>
                    <span className="char-10">e</span>
                    <span className="char-11">l</span>
                    <span className="char-12">e</span>
                    <span className="char-13">r</span>
                  </div>
                )}
              </div>
              <div
                className="block eight"
                onMouseEnter={() => setShowTextEight(true)}
                onMouseLeave={() => {
                  setShowTextEight(false);
                }}
              >
                <img src={Eigth} alt="" />

                {showTextEight && (
                  <div>
                    <span className="char-1">s</span>
                    <span className="char-2">p</span>
                    <span className="char-3">a</span>
                    <span className="char-4">c</span>
                    <span className="char-5">e</span>

                    <span className="char-6">p</span>
                    <span className="char-7">h</span>
                    <span className="char-8">i</span>
                    <span className="char-9">l</span>
                    <span className="char-10">o</span>
                    <span className="char-11">s</span>
                    <span className="char-12">o</span>
                    <span className="char-13">p</span>
                    <span className="char-14">h</span>
                    <span className="char-15">e</span>
                  </div>
                )}
              </div>
            </Fade>
          </div>

          <div className="gradient-bot"></div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
