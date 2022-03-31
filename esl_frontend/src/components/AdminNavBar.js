import React from "react";
import { Link } from "react-router-dom";

const AdminNavBar = () => {

    return(
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/admin-hub"> AdminHub </Link>
            </li>
        </ul>
    )

}

export default AdminNavBar;