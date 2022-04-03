import { UserContext } from "./UserContext"
import { useContext } from "react"

const Player = ({ player, handlePlayerSelect, updateAssignmentById, assignmentList }) => {

    const {user} = useContext(UserContext)
    

 const correctAssignment =
     assignmentList.find(assignment => {
         assignment.user_id = user.id
        assignment.player_id = player.id     

    })

    return (
        <>
            <tr>
                <td>{player.player_name}</td>
                <td>{player.player_position}</td>
                <td>{player.player_club}</td>
                <td>{player.points}</td>
                <td><button onClick={() => {
                                            updateAssignmentById(correctAssignment.id, {user_id: user.id, player_id: player.player_id})
                                            handlePlayerSelect(player.player_club)}}>Select</button></td>
            </tr>
        </>
    )
}

export default Player;