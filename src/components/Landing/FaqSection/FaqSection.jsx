import { Accordion } from "react-bootstrap";

import "./FaqSection.scss";

const FaqSection = () => {
    return <section className="faq-section">
        <h2>
            FAQ
        </h2>
        <p>
            If you have any questions, you may find the answer below. If not, you can contact support and ask your question
        </p>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Where can I get a metamask wallet?</Accordion.Header>
                <Accordion.Body>
                    You can register a metamask wallet by using the metamask extension for the Google Chrome browser. You can download the extension here
                    Or download the metamask app on your phone and register your wallet there.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How many levels should I activate at the beginning?</Accordion.Header>
                <Accordion.Body>
                    You can activate any number of levels, but for the best start we recommend activating at least the first 3 levels.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How secure is it?</Accordion.Header>
                <Accordion.Body>
                    All actions and transactions are controlled by a smart contract. No one is able to influence its operation from outside. Consequently, it is completely secure.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Can my money disappear?</Accordion.Header>
                <Accordion.Body>
                    All transactions are allocated to participants' personal wallets. The balance of the smart contract itself never contains funds and is always zero. Therefore, your funds can disappear only if you give someone access to your wallet.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>КWhat is the role of the smart contract?</Accordion.Header>
                <Accordion.Body>
                    A smart contract coordinates and distributes transactions and activates your tiers. It enables all processes on the platform to happen automatically.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>How much can I earn?</Accordion.Header>
                <Accordion.Body>
                    Your earnings are not limited to anything. It depends on the number of completed cycles. And they, in turn, depend on how many new participants you and your partners have invited.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>How do I withdraw money?</Accordion.Header>
                <Accordion.Body>
                    All your rewards go straight to your personal Metamask wallet. Then you can exchange BUSD to any other currency through any cryptocurrency exchange.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </section>
}

export default FaqSection;