import "./Preloader.scss";

import { Player } from '@lottiefiles/react-lottie-player';
import Animation from "../../assets/amimation/animation.json";
import classNames from "classnames";

const Preloader = ({ team, levels }) => {
    return <div className={classNames("preloader", {
        "preloader--side": team || levels
    })}    >
        <div className={classNames("circle-1", {
            "circle-1--side": team || levels
        })}   >

        </div>
        <div className={classNames("circle-2", {
            "circle-2--side": team || levels
        })}>

        </div>
        <div className={classNames("preloader__block", {
            "preloader__block--side": team || levels
        })}  >
            <Player
                src={Animation}
                loop
                autoplay
                style={{ height: '90px', width: '120px' }}
            />
            <div>
                <p>
                    {levels ? 'Loading level activation...' : 'Loading...'}

                </p>
                <span>
                    Please, wait a minute
                </span>
            </div>
        </div>
    </div>
}

export default Preloader;