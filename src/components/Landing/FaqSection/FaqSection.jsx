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
                    All actions and transactions are controlled by a smart contract. No one is able to influence its operation from outside. Consequently, it is completely secure.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How many levels should I activate at the beginning?</Accordion.Header>
                <Accordion.Body>
                    All actions and transactions are controlled by a smart contract. No one is able to influence its operation from outside. Consequently, it is completely secure.
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
                    All actions and transactions are controlled by a smart contract. No one is able to influence its operation from outside. Consequently, it is completely secure.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>КWhat is the role of the smart contract?</Accordion.Header>
                <Accordion.Body>
                    All actions and transactions are controlled by a smart contract. No one is able to influence its operation from outside. Consequently, it is completely secure.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>How much can I earn?</Accordion.Header>
                <Accordion.Body>
                    All actions and transactions are controlled by a smart contract. No one is able to influence its operation from outside. Consequently, it is completely secure.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>How do I withdraw money?</Accordion.Header>
                <Accordion.Body>
                    All actions and transactions are controlled by a smart contract. No one is able to influence its operation from outside. Consequently, it is completely secure.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </section>
}

export default FaqSection;