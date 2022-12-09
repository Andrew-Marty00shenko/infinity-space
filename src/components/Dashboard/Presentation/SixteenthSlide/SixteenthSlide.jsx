import { Row, Col } from "react-bootstrap";

import SlideSixteen from "../../../../assets/images/backgrounds/presentation-16.png";

import "./SixteenthSlide.scss";

const SixteenthSlide = () => {
    return <div className="presentation-sixteenth">
        <Row className="align-items-center justify-content-center">
            <Col lg={6}>
                <h2>
                    <span>
                        How automatic <br /> reinvesting works
                    </span>
                </h2>
                <p>
                    Initially, in the first line of your structure, there are three places where your invited partners are placed. When you invite three partners, they occupy these places and complete the cycle of the first line.
                    <br /><br />
                    Without reinvestment, for you to continue to invite new partners and receive rewards for them, you would have to reactivate the level. But with Reinvest, re-activation is done automatically when the 3rd person in your first line takes his place. After that, you have an additional new structure and can invite partners without interruption or extra control.
                </p>
            </Col>
            <Col lg={6}>
                <img style={{ marginLeft: -30 }} src={SlideSixteen} alt="" />
            </Col>
        </Row>
    </div>
}

export default SixteenthSlide;