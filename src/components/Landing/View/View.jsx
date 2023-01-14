import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { searchUser } from "../../../redux/slices/userSlice";

import "./View.scss";

const View = () => {
    const [idValue, setIdValue] = useState("");
    const { handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (idValue !== "") {
            dispatch(searchUser(idValue));
        } else {
            toast.error("Enter ID");
        }
    };

    return <form className="view" onSubmit={handleSubmit(onSubmit)}>
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