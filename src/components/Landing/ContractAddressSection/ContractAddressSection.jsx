import "./ContractAddressSection.scss";

const ContractAddressSection = () => {
    return <div className="contract-address-section">
        <p>
            Infinity Space contract:
            <span className="desktop">
                0x5acc84a3e955Bdd76467d3348077d003f00fFB97
            </span>
            <span className="mobile">
                0x2CAa...ae52
            </span>
        </p>
    </div>
}

export default ContractAddressSection;