import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import "../App.css";

const LoginPage = ({userList}) => {

    const [id, setId] = useState();
    const {user, login, admin, adminLogin} = useContext(UserContext);

    // const handleIdChange = (event) => {
    //     setId(event.target.value); 
    // }

    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value); 
    }

    const [password, setPassword] = useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value); 
    }
    
    const doesUserExist = () => {
        const found_user = userList.find(user => user.email === email)
        if (found_user) {
            login(found_user.id, email, password)
        } else {
            alert("Please enter a valid email and password")
        }
    }

    //============ADMIN FUNCTIONALITY===================
    const [adminUsername, setAdminUsername] = useState('');
    const handleAdminUsernameChange = (event) => {
        setAdminUsername(event.target.value)
    }

    const [adminPassword, setAdminPassword] = useState('');
    const handleAdminPasswordChange = (event) => {
        setAdminPassword(event.target.value)
    }

    const doesAdminExist = () => {
        if (adminUsername === "admin" && adminPassword === "admin") {
            adminLogin(adminUsername, adminPassword)
        } else {
            alert("Please enter valid admin credentials, u wassio")
        }
    }

    return(
        <>
            <div className="center">
            <h1>Player Login here</h1>
            <div className="txt_field">
            <form onSubmit={doesUserExist}>
                {/* <input type="number" placeholder="Enter User ID..." min={1} onChange={handleIdChange} required /> */}
                <input type="email" className="email-login" placeholder="Enter Email..." onChange={handleEmailChange} required />
                <input type="password" placeholder="Enter Password..." onChange={handlePasswordChange} required />
                <input type="submit" value="Login"/>
                  <div className="signup_link">
                    Not a member? <a href="/sign-up">Signup</a>
                </div>
            </form>
            </div>

            <h1>Admin Login here</h1>
            <div className="txt_field">
                <form onSubmit={doesAdminExist}>
                <input type="text" placeholder="Enter Admin Username..." onChange={handleAdminUsernameChange} required /> 
                <input type="password" placeholder="Enter Admin Password..." onChange={handleAdminPasswordChange} required />
                <input type="submit" value="Login"/>
                </form>
            </div>
            </div>
        </>
    )
}

export default LoginPage;