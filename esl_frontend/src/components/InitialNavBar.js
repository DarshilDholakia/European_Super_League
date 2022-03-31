import React from "react";
import { Link } from "react-router-dom";

const InitialNavBar = () => {

    return(
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/login"> LoginPage </Link>
            </li>
            <li>
                <Link to="/sign-up"> SignupPage </Link>
            </li>
        </ul>
    )

}

export default InitialNavBar;