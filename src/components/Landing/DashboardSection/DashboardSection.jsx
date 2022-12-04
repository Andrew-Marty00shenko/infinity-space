import DashboardLaptop from "../../../assets/images/dashboard-laptop.png";
import DashboardLaptopopTablet from "../../../assets/images/dashboard-laptop-tablet.png";
import DashboardLaptopopMobile from "../../../assets/images/dashboard-laptop-mobile.png";

import "./DashboardSection.scss";

const DashboardSection = () => {
    return <section className="dashboard-section">
        <div className="dashboard-section__block">
            <img className="dashboard-laptop-desktop" src={DashboardLaptop} alt="laptop" />
            <img className="dashboard-laptop-tablet" src={DashboardLaptopopTablet} alt="laptop" />
            <img className="dashboard-laptop-mobile" src={DashboardLaptopopMobile} alt="laptop" />
            <svg className="icon-left" width="197" height="197" viewBox="0 0 197 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 98.4004L24.7122 73.6865L49.4243 98.4004L24.7122 123.114L0 98.4004ZM37.2022 61.2059L98.4021 0L123.114 24.7139L61.9109 85.9181L37.2022 61.2059ZM36.9394 135.346L135.348 36.93L160.061 61.6439L61.6499 160.058L36.9394 135.346ZM73.8789 172.288L172.288 73.872L197 98.5859L98.5893 197L73.8789 172.288Z" fill="url(#paint0_linear_8_593)" fill-opacity="0.2" />
                <defs>
                    <linearGradient id="paint0_linear_8_593" x1="105.359" y1="21.2443" x2="105.359" y2="228.59" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B9C8FF" />
                        <stop offset="1" stop-color="#2555FF" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div className="dashboard-section__block">
            <h2>
                Ergonomic <br /> dashboard
            </h2>
            <p>
                In your personal cabinet you will clearly see what`s going on with all your indicators and partners
            </p>
            <div className="buttons-block">
                <button>
                    Sign up
                </button>
                <button>
                    Log in
                </button>
            </div>
            <svg className="icon-right" width="151" height="197" viewBox="0 0 151 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 98.4004L24.7122 73.6865L49.4243 98.4004L24.7122 123.114L0 98.4004ZM37.2022 61.2059L98.4021 0L123.114 24.7139L61.9109 85.9181L37.2022 61.2059ZM36.9394 135.346L135.348 36.93L160.061 61.6439L61.6499 160.058L36.9394 135.346ZM73.8789 172.288L172.288 73.872L197 98.5859L98.5893 197L73.8789 172.288Z" fill="url(#paint0_linear_8_592)" fill-opacity="0.2" />
                <defs>
                    <linearGradient id="paint0_linear_8_592" x1="105.359" y1="21.2443" x2="105.359" y2="228.59" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B9C8FF" />
                        <stop offset="1" stop-color="#2555FF" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </section>
}

export default DashboardSection;