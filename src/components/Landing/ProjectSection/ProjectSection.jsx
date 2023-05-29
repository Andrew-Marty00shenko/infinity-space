import "./ProjectSection.scss";

import Img1 from "../../../assets/images/project-section/im-1.png";
import Img2 from "../../../assets/images/project-section/img-2.png";
import Img3 from "../../../assets/images/project-section/img-3.png";

const ProjectSection = () => {
  return (
    <section className="project-section">
      <h2>Our project is a web 3.0 platform</h2>
      <p>
        Our project is a web 3.0 platform that combines blockchain,
        cryptocurrency, and smart contracts technologies while allowing
        community members to make money easily and interestingly and to learn
        about how works the web 3.0.
      </p>

      <div className="project-section__buttons">
        <button>Sign up</button>
        <button>Log in</button>
      </div>

      <div className="project-section__blocks">
        <div className="block">
          <div>
            <img src={Img1} alt="" />
          </div>
          <h4>Cryptocurrency</h4>
          <p>Blockchain-based digital currency that has real tangible value…</p>
          <span>
            Learn more
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 8.5L4.75 5L1.25 1.5"
                stroke="#947CDF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="block">
          <div>
            <img src={Img2} alt="" />
          </div>
          <h4>Smart Contract</h4>
          <p>Smart contract is an automated algorithm…</p>
          <span>
            Learn more
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 8.5L4.75 5L1.25 1.5"
                stroke="#947CDF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <div className="block">
          <div>
            <img src={Img3} alt="" />
          </div>
          <h4>Blockchain</h4>
          <p>Blockchain technology is an advanced database mechanism…</p>
          <span>
            Learn more
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.25 8.5L4.75 5L1.25 1.5"
                stroke="#947CDF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
