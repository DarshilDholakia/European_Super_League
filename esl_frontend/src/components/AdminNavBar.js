import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import bntaLogo from '../assets/bntaLogo.png'

const AdminNavBar = () => {

    const { admin, adminLogout } = useContext(UserContext);

    return (
        <ul className="navbar">
            <li>
                <img src={bntaLogo} alt="bnta logo" width="75" height="100" />
            </li>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/admin-hub"> AdminHub </Link>
            </li>
            <li>
                <button className="sign-out-button" onClick={adminLogout}>Sign Out</button>
            </li>
        </ul>
    )
}

export default AdminNavBar;