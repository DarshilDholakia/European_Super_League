import React from "react";
import { Link } from "react-router-dom";

const InitialNavBar = () => {

    return(
        <ul className="navbar">
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/login"> Login </Link>
            </li>
            <li>
                <Link to="/sign-up"> Sign Up </Link>
            </li>
        </ul>
    )

}

export default InitialNavBar;