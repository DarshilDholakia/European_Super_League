import { UserContext } from "./UserContext"
import { useContext } from "react"
import './Leaderboard.css';

const Player = ({ player, handleTransferTablePlayerSelect, updateAssignmentById, currentAssignmentId, playerOnPitchChangeSelected, isPlayerKitNonSelectedState, addNewAssignment }) => {

    const { user } = useContext(UserContext)

    const updatedPlayer = {
        user_id: user.id,
        player_id: player.id
    }

    const select = <>{playerOnPitchChangeSelected === true ? <button onClick={() => {
        console.log("Assignment id: " + currentAssignmentId);
        !isPlayerKitNonSelectedState ? updateAssignmentById(currentAssignmentId, updatedPlayer) : addNewAssignment(updatedPlayer);
        // handleTransferTablePlayerSelect();
    }}>Select</button> : ""}</>

    const changeRankingInTable = () => {
        
    }
    

    return (
        <>
            <tr className="content-leaderboard">
                <td>{player.player_name}</td>
                <td>{player.player_position}</td>
                <td>{player.player_club}</td>
                <td>{player.points}</td>
                <td>{select}</td>
            </tr>
        </>
    )
}

export default Player;