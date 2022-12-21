import PresentationPDF from "../../../../assets/pdfs/presentation.pdf";

import "./FirstSlide.scss";

const FirstSlide = () => {
    return <div className="presentation-first">
        <h2>
            SMART DEFI SOLUTION <br />
            <span>
                Worldwide DeFi <br /> platform for making <br /> money
            </span>
        </h2>
        <p>
            Powerful marketing based on smart contract technology gives unlimited possibilities
        </p>

        <a href={PresentationPDF} target="_blank">
            Check PDF presentation
        </a>
    </div>
}

export default FirstSlide;