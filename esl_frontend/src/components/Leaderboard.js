import React from "react";
import User from "./User";

const Leaderboard = ({userList}) => {

    const userMap = userList.map(user => {
        return (
            <User user={user} key={user.id}/>
        )
    })

        return(
            <table className='leaderboard-table'>
            <thead>
                <tr className="leaderboard-headings">
                    <th>Rank</th>
                    <th>Team Name</th>
                    <th>Total Points</th>
                </tr>
            </thead>
            <tbody>
                {userMap}
            </tbody>
        </table>
        )
    }
    export default Leaderboard;