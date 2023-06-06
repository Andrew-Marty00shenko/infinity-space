import "./ResultsSection.scss";

import SideSplash from "../../../assets/images/results-section/side-splass.png";
import SideCircle from "../../../assets/images/results-section/circle.png";
import Moon from "../../../assets/images/results-section/moon.png";
import Blur from "../../../assets/images/results-section/blur.png";
import useBreakpoint from "../../../hooks/useBreakpoints";
import { Fade } from "react-awesome-reveal";

const ResultsSection = () => {
  const breakpoint = useBreakpoint();

  return (
    <section className="results-section">
      <div className="gradient"></div>
      <div className="results-section__side-circle">
        <img src={SideCircle} alt="" />
      </div>
      <div className="results-section__side-splash">
        <img src={SideSplash} alt="" />
      </div>

      <div className="results-section__title">
        <h4>RESULTS</h4>
        <h2>
          <Fade cascade triggerOnce damping={0.1}>
            User earnings
          </Fade>
        </h2>
        <p>
          Statistics are retrieved from the blockchain and displayed in real
          time
        </p>
      </div>

      <div className="results-section__blocks">
        <img className="moon" src={Moon} alt="" />
        <img className="blur" src={Blur} alt="" />

        <div className="block">
          <div>
            <p>2 351 937</p>
            <h5>Total result</h5>
          </div>
          <span>+ 392</span>
        </div>

        <div className="block">
          <div>
            <p>2 351 937</p>
            <h5>Quantity users</h5>
          </div>
          <span>+ 392</span>
        </div>
      </div>

      <div className="results-section__contract">
        <span>
          {breakpoint === "0" ? "SPACE CLUB:" : "SPACE CLUB contract:"}
        </span>
        <p>
          {breakpoint === "0"
            ? "0x5acc84a3..f00fFB97"
            : "0x5acc84a3e955Bdd76467d3348077d003f00fFB97"}
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
