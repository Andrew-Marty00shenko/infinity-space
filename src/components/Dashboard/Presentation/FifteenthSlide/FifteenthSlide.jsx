import { Row, Col } from "react-bootstrap";

import SlideFifteenOne from "../../../../assets/images/backgrounds/presentation-14-1.webp";
import SlideFifteenTwo from "../../../../assets/images/backgrounds/presentation-14-2.webp";

import "./FifteenthSlide.scss";

const FifteenthSlide = () => {
    return <div className="presentation-fifteenth">
        <div className="top">
            <Row>
                <Col md={6}>
                    <h3>
                        Missed profit
                    </h3>

                </Col>
                <Col md={6}>
                    <h3>
                        How the levels work
                    </h3>
                </Col>
            </Row>
        </div>
        <div className="center">
            <Row>
                <Col md={6}>
                    <div>
                        <img src={SlideFifteenOne} alt="slide" />
                    </div>
                </Col>
                <Col md={6}>
                    <div>
                        <img src={SlideFifteenTwo} alt="slide" />
                    </div>
                </Col>
            </Row>
        </div>
        <div className="bot">
            <Row>
                <Col md={6}>
                    <p>
                        If your junior partner activates a level that is not activated by you, you will miss the payout and it will go to your senior partner. That is, if your invited partner activates, for example, the sixth level, and you have activated only 5 levels, the reward will go up in the structure, and your superior partner will receive 60%, which was intended for you and 30%, which was intended for him. And if he also does not have the right level activated, but his superior partner has it, then this partner will receive all 3 rewards - 10%, 30% and 60%. In this regard, we strongly recommend to keep track of what levels are already activated in your referrals in time to activate the next levels and not to miss the profits you rely on.
                    </p>
                </Col>
                <Col md={6}>
                    <p>
                        All 12 levels in Infinity Space operate on the same principle. The only difference is their cost and profit. Each successive level brings twice as much profit as the previous one, and, accordingly, its activation costs twice as much. For example, if the first level activation costs 16 BUSD, while one cycle's profit is 105.6 BUSD, the fourth level activation costs 128 BUSD, while one cycle's profit is 844.8 BUSD. Also, you should understand that if you activate several levels at the beginning, you can activate the next levels with the profits of the previous ones.
                    </p>
                </Col>
            </Row>
        </div>
    </div>
}

export default FifteenthSlide;