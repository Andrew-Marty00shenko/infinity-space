import { Row, Col } from "react-bootstrap";

import SlideThirdteenOne from "../../../../assets/images/backgrounds/presentation-13-1.webp";
import SlideThirdteenTwo from "../../../../assets/images/backgrounds/presentation-13-2.webp";

import "./ThirdteenthSlide.scss";

const ThirdteenthSlide = () => {
    return <div className="presentation-thirdteenth">
        <div className="center">
            <Row>
                <Col md={6}>
                    <div>
                        <img src={SlideThirdteenOne} alt="slide" />
                    </div>
                </Col>
                <Col md={6}>
                    <div>
                        <img src={SlideThirdteenTwo} alt="slide" />
                    </div>
                </Col>
            </Row>
        </div>
        <div className="bot">
            <Row>
                <Col md={6}>
                    <p>
                        When any of your first      line partners invite new members, they are all placed in your second      line. For each second-level partner, you receive a reward of 30% of the cost of the level. The income from one cycle of your second      line is 270%.
                    </p>
                </Col>
                <Col md={6}>
                    <p>
                        When your 2nd       line partner invites new partners - they take place in the third line below you. The reward for each partner of the 3rd     level is 10%. The income from one cycle of your third     line is 270%.
                        The total income from one complete cycle is - 660%
                        Each partner takes his place in the matrix forever and it cannot be changed. Your superior partner cannot replace you and you cannot replace your junior partners. There is no limit to the number of partners or cycles.
                    </p>
                </Col>
            </Row>
        </div>
    </div>
}

export default ThirdteenthSlide;