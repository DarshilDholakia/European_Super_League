import React from "react";
import '../App.css';
const User =({user})=> {

    return (
        <>
        <tr className="leaderboard-content">
            <td className="leaderboard-element">{user.id}</td>
            <td className="leaderboard-element">{user.teamName}</td>
            <td className="leaderboard-element">{user.totalPoints}</td>
        </tr>
        </>

    )
}
export default User;