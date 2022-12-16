import { Row, Col } from "react-bootstrap";

import "./EighthSlide.scss";

const EighthSlide = () => {
    return <div className="presentation-eighth">
        <div>
            <Row>
                <Col>
                    <div className="block">
                        <h3>
                            Our project is a web 3.0 platform
                        </h3>
                        <p>
                            To register, you'll need a cryptocurrency wallet called metamask. You can download the metamask extension for google chrome at this <a href="https://metamask.io/download/" target="_blank">link</a> to register from your computer. You can also download metamask from the App Store or Google Play to register from your smartphone.
                            You can see more information on creating a metamask wallet here:
                        </p>
                    </div>
                    <div className="video">
                        video
                    </div>
                </Col>
                <Col>
                    <div className="block">
                        <p>
                            When registering, you will need to activate Level 1 of Infinity Space, which costs 16 BUSD ($16). So, your wallet must have 16 BUSD and some BNB to pay the commission. More details about BUSD, BNB, and depositing options will talk a little later. <br />
                            After you have downloaded and funded metamask, you need to paste the invitation link into your google chrome browser if you are registering from your computer, or open the metamask app on your phone, click on the "browser" tab and paste the link there.
                            Then you need to click "connect wallet" and confirm the connection of metamask to our platform. Once connected, metamask will ask you to confirm the transaction.
                            And here we are! You are registered on the platform and you are on the 1st level of the Infinity Space game!
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
}

export default EighthSlide;