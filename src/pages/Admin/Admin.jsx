import { Routes, Route } from "react-router-dom";

import AddContent from "../../components/Admin/AddContent/AddContent";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import WhiteList from "../../components/Admin/WhiteList/WhiteList";

import "./Admin.scss";

const Admin = () => {
    return <div className="admin">
        <Sidebar />
        <Routes>
            <Route path='/admin' element={<WhiteList />} />
            <Route path='/admin/add-content' element={<AddContent />} />
        </Routes>
    </div>
}

export default Admin;