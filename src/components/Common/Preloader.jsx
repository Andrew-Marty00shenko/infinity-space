import "./Preloader.scss";

import { Player } from '@lottiefiles/react-lottie-player';
import Animation from "../../assets/amimation/animation.json";

const Preloader = () => {
    return <div className="preloader">
        <div className="circle-1">

        </div>
        <div className="circle-2">

        </div>
        <div className="preloader__block">
            <Player
                src={Animation}
                loop
                autoplay
                style={{ height: '90px', width: '120px' }}
            />
            <div>
                <p>
                    Loading...
                </p>
                <span>
                    Please, wait a minute
                </span>
            </div>
        </div>
    </div>
}

export default Preloader;