import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const AdminNavBar = () => {

    const {admin, adminLogout} = useContext(UserContext);

    return(
        <ul className="navbar">
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/admin-hub"> AdminHub </Link>
            </li>
            <li>
                <button onClick={adminLogout}>Sign Out</button>
            </li>
        </ul>
    )
}

export default AdminNavBar;