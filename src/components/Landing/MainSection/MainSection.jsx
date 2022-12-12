import { Link } from "react-router-dom";

import "./MainSection.scss";

const MainSection = ({ data, setClickedSignUp }) => {

    return <section className="main-section">
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
}

export default MainSection;