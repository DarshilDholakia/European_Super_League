import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const LoginPage = ({userList}) => {

    const [id, setId] = useState();
    const {user, login} = useContext(UserContext);

    const handleIdChange = (event) => {
        setId(event.target.value); 
    }

    const doesUserExist = () => {
        const found_user = userList.find(user => user.id === parseInt(id))
        if (found_user) {
            login(id)
        } else {
            alert("Please enter a valid ID")
        }
    }



    return(
        <>
            <h1>Player Login here</h1>
            <form onSubmit={doesUserExist}>
                <input type="number" placeholder="Enter User ID..." min={1} onChange={handleIdChange} required />
                <input type="submit" value="Login"/>
            </form>

            <h1>Admin Login here</h1>
        </>
        
    )
}

export default LoginPage;