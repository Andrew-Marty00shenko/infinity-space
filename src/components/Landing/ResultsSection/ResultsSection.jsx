import "./ResultsSection.scss";

import SideSplash from "../../../assets/images/results-section/side-splass.png";
import SideCircle from "../../../assets/images/results-section/circle.png";
import Moon from "../../../assets/images/results-section/moon.png";
import Blur from "../../../assets/images/results-section/blur.png";

const ResultsSection = () => {
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
        <h2>User earnings</h2>
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
    </section>
  );
};

export default ResultsSection;
