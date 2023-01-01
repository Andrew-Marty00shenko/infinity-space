import { Link } from "react-router-dom";

import "./NotFound.scss";

const NotFound = () => {

    return <div className="not-found">
        <h2>
            Error 404
        </h2>
        <p>
            Page does not exist
        </p>
        <Link to="/">
            <button>
                Home page
            </button>
        </Link>
    </div>
};

export default NotFound;