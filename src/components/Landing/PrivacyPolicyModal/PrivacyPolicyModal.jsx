import { Modal } from 'react-bootstrap';

import Crystal from "../../../assets/images/crystal.png";

import "./PrivacyPolicyModal.scss";

const PrivacyPolicyModal = ({ show, setShow }) => {
    return <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        className="privacy-policy-modal"
    >
        <div className="close-btn">
            <svg onClick={() => setShow(false)} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 1L1 25M1 1L25 25" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>

        <h2>
            Privacy Policy
        </h2>

        <div className="update">
            Updated
            <div>
                12/09/2022
            </div>
        </div>

        <div className="text">
            Infinity Space (“us”, “we”, or “our”) operates the Infinity Space.cz website (hereinafter referred to as the “Service”). <br />
            This page informs you of our policies regarding the collection, use, and disclosure of personal data <br />
            when you use our Service and the choices you have associated with that data. The Privacy Policy for <br />
            Infinity Space has been created with the help of TermsFeed. <br />
            We use your data to provide and improve the Service. By using the Service, you agree to the collection <br />
            and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, <br />
            the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, <br />
            accessible from Infinity Space.cz
        </div>

        <h3>
            Information Collection and Use
        </h3>

        <div className="text">
            We collect several different types of information for various purposes to provide <br /> and improve our Service to you.
        </div>

        <h3 style={{ marginTop: 40 }}>
            Definitions
        </h3>

        <div className="block">
            <div>
                <img src={Crystal} alt="crystal" />
                Service Service is the forsaz.cz website operated by Infinity Space
            </div>
            <div>
                <img src={Crystal} alt="crystal" />
                Personal Data Personal Data means data about a living individual who can be identified from those data (or from those <br />
                and other information either in our <br />
                possession or likely to come into our possession).
            </div>
        </div>

        <h3 style={{ marginTop: 40 }}>
            Types of Data Collected
        </h3>

        <h3 style={{ marginTop: 24, fontSize: 28 }} className="personal">
            Personal Data
        </h3>

        <div className="text">
            While using our Service, we may ask you to provide us with certain personally identifiable information <br />
            that can be used to contact or identify you (“Personal Data”). Personally identifiable information <br />
            may include, but is not limited to:
        </div>

        <div className="block">
            <div>
                <img src={Crystal} alt="crystal" />
                E-mail address
            </div>
            <div>
                <img src={Crystal} alt="crystal" />
                First name and last name
            </div>
            <div>
                <img src={Crystal} alt="crystal" />
                Cookies and Usage Data
            </div>
        </div>

        <h3 style={{ marginTop: 40, fontSize: 28 }} className="personal">
            Usage Data
        </h3>

        <div className="text">
            We may also collect information how the Service is accessed and used (“Usage Data”). This Usage <br />
            Data may include information such as your computer’s Internet Protocol address (e.g. IP address), <br />
            browser type, browser version, the pages of our Service that you visit, the time and date of your visit, <br />
            the time spent on those pages, unique device identifiers and other diagnostic data.
        </div>

        <h3 style={{ marginTop: 40, fontSize: 28 }} className="personal">
            Tracking & Cookies Data
        </h3>

        <div className="text">
            We use cookies and similar tracking technologies to track the activity on our Service and we hold <br />
            certain information.
            <br /><br />
            Cookies are files with a small amount of data which may include an anonymous unique identifier.
            <br /><br />

            Cookies are sent to your browser from a website and stored on your device. Other tracking <br />
            technologies are also used such as beacons, tags and scripts to collect and track information and to <br />
            improve and analyse our Service.
            <br /><br />
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. <br />
            However, if you do not accept cookies, you may not be able to use some portions of our Service.
        </div>

    </Modal>
}

export default PrivacyPolicyModal;