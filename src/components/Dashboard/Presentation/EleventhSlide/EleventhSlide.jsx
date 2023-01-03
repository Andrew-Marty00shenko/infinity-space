import "./EleventhSlide.scss";

import Star from "../../../../assets/images/star.png"

const EleventhSlide = () => {
    return <div className="presentation-eleventh">

        <h3>
            Infinity's marketing program is described in detail below:
        </h3>
        <div>
            <img src={Star} alt="star" />
            After the activation of the 1st level, you are assigned a personal referral link for inviting partners
        </div>
        <div>
            <img src={Star} alt="star" />
            After the activation of the 1st level, you are assigned a personal referral link for inviting partners
        </div>
        <div>
            <img src={Star} alt="star" />
            No level can be frozen
        </div>
        <div>
            <img src={Star} alt="star" />
            Each level is bought only once and is valid for an indefinite period.
        </div>
        <div>
            <img src={Star} alt="star" />
            The next level can be activated only after the previous one is activated
        </div>

        <div>
            <img src={Star} alt="star" />
            Revenue from each level is enough to activate the next level
        </div>
        <div>
            <img src={Star} alt="star" />
            Automatic reinvestment and start of the next cycle on each level
        </div>
        <div>
            <img src={Star} alt="star" />
            Each next level brings 2 times more income than the previous one
        </div>
        <div>
            <img src={Star} alt="star" />
            Number of cycles is unlimited
        </div>
        <div>
            <img src={Star} alt="star" />
            Funds are never stored on the smart contract account itself
        </div>
    </div>
}

export default EleventhSlide;