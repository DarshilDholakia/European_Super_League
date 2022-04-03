import React from "react";

const User =({user})=> {

    return (
        <>
        <tr>
            <td>{user.id}</td>
            <td>{user.teamName}</td>
            <td>{user.totalPoints}</td>

        </tr>
        </>

    )
}
export default User;