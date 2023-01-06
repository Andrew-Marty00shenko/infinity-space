import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { searchUser } from "../../../redux/slices/userSlice";

import "./View.scss";

const View = () => {
    const [idValue, setIdValue] = useState("");
    const dispatch = useDispatch();

    const handleSearchUser = () => {
        if (idValue !== "") {
            dispatch(searchUser(idValue));
        } else {
            toast.error("Enter ID");
        }
    };

    return <div className="view">
        <input type="text"
            placeholder="enter id"
            value={idValue}
            onChange={e => setIdValue(e.target.value)}
        />

        <button onClick={handleSearchUser}>
            search
        </button>
    </div>
}

export default View;