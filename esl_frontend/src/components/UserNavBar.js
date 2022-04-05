import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import bntaLogo from '../assets/bntaLogo.png'

const UserNavBar = () => {

    const { user, logout } = useContext(UserContext);

    return (
        <ul className="navbar">
            <li>
                <img src={bntaLogo} alt="bnta logo" width="75" height="100" />
            </li>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/build-team"> Build Team </Link>
            </li>
            <li>
                <Link to="/leaderboard"> Leaderboard </Link>
            </li>
            <li>
                <button className="sign-out-button" onClick={logout}>Sign Out</button>
            </li>
        </ul>
    )
}

export default UserNavBar;