import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const LoginPage = ({userList}) => {

    const [id, setId] = useState();
    const {user, login} = useContext(UserContext);

    const handleIdChange = (event) => {
        setId(event.target.value);
    }

    return(
        <>
            <h1>Player Login here</h1>
            <form onSubmit={() => login(id)}>
                <input placeholder="Enter User ID..." onChange={handleIdChange} min={1} max={userList.length} required/>
                <input type="submit" value="Login"/>
            </form>

            <h1>Admin Login here</h1>
        </>
        
    )
}

export default LoginPage;