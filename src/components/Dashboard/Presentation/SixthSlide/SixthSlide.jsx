import { Row, Col } from "react-bootstrap";

import "./SixthSlide.scss";

const SixthSlide = () => {
    return <div className="presentation-sixth">
        <p>
            A few words on the technical side of the issue for further understanding:
        </p>
        <div>
            <Row>
                <Col md={4}>
                    <div className="block one">
                        <h5>Blockchain</h5>
                        <span>  Blockchain technology is an advanced database mechanism that enables the open, decentralized exchange of information, powered by multiple blockchain-connected computers around the world. A blockchain database stores data in blocks linked together in a chain. The data is chronologically consistent because the chain cannot be deleted or changed without consensus on the part of the network, that is, without the consent of the majority of the network's computers, the validators.</span>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="block two">
                        <h5>Cryptocurrency</h5>
                        <span> A blockchain-based digital currency that has real tangible value in the marketplace. It is the cryptocurrency that makes blockchain use possible because it gives participants in the blockchain network a fee for confirming transactions and entering information into the blockchain itself. These activities consume energy and computing power and thus require a reward and incentive to keep the validators working. Cryptocurrency transactions are recorded on the blockchain and are publicly available.</span>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="block three">
                        <h5>Decentralized Smart Contract</h5>
                        <span> Smart contract technology is also based on blockchain. A smart contract is an automated algorithm. This algorithm and all its mechanisms are written inside the smart contract and are displayed in its code, which cannot be changed after launch. The code is freely available on the smart contract page in BSC Scan, and everyone can read it. It performs the actions that were prescribed in it before it was published on the blockchain network. Once published, a smart contract cannot be changed, deleted, or disabled. It will perform its functions as long as the blockchain exists.</span>
                    </div>
                </Col >
            </Row>
        </div>
    </div>
}

export default SixthSlide;