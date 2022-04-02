import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const UserNavBar = () => {

    const {user,logout} = useContext(UserContext);

    return(
        <ul className="navbar">
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
                <button onClick={logout}>Sign Out</button>
            </li>
        </ul>
    )
}

export default UserNavBar;