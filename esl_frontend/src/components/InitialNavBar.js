import React from "react";
import { Link } from "react-router-dom";
import bntaLogo from '../assets/bntaLogo.png'

const InitialNavBar = () => {

    return(
        <ul className="navbar">
            <li>
                <img src={bntaLogo} alt="bnta logo" width="75" height="100" />
            </li>
           
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