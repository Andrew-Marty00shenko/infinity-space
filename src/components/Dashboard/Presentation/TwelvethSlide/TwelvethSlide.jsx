import { Row, Col } from "react-bootstrap";

import SlideTwelveOne from "../../../../assets/images/backgrounds/presentation-12-1.png";
import SlideTwelveTwo from "../../../../assets/images/backgrounds/presentation-12-2.png";

import "./TwelvethSlide.scss";

const TwelvethSlide = () => {
    return <div className="presentation-twelveth">
        <div className="top">
            <Row>
                <Col md={6}>
                    <h3>
                        The distribution is as follows:
                    </h3>

                </Col>
                <Col md={6}>
                    <p>
                        After activation, you take your place in the structure of your upline manager and begin to form your own structure:
                    </p>

                </Col>
            </Row>
        </div>
        <div className="center">
            <Row>
                <Col md={6}>
                    <div>
                        <img src={SlideTwelveOne} alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <div>
                        <img src={SlideTwelveTwo} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
        <div className="bot">
            <Row>
                <Col md={6}>
                    <p>
                        When you activate the 1st, the level reward is distributed among the three participants. The one who invited you – the upline partner – instantly receives a reward of 60% of the cost of the level to their personal metamask wallet. The one who invited your upline partner – the second level upline partner – receives 30%. The third level upline partner receives 10%.
                    </p>
                </Col>
                <Col md={6}>
                    <p>
                        Each person you invite becomes your junior partner and takes his place in your first line. For the activation of a level by your first      invited partner you get a reward of 60% of the value of the level. For activation by your second     invited partner, you also get 60%. When your third partner activates his level, reinvestment takes place, the reward goes to your higher partners and the cycle starts again. The income from one cycle of your first line is 120%. The number of cycles is unlimited.
                    </p>
                </Col>
            </Row>
        </div>
    </div>
}

export default TwelvethSlide;