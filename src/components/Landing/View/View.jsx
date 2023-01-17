import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { searchUser } from "../../../redux/slices/userSlice";

import "./View.scss";

const View = () => {
    const [idValue, setIdValue] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        if (idValue !== "") {
            dispatch(searchUser(idValue));
        } else {
            toast.error("Enter ID");
        }
    };

    return <form className="view" onSubmit={onSubmit}>
        <input type="text"
            placeholder="enter id"
            value={idValue}
            onChange={e => setIdValue(e.target.value)}
        />

        <button onClick={onSubmit}>
            search
        </button>
    </form>
}

export default View;