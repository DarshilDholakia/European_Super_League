const Player = ({ player }) => {

    return (
        <>
            <tr>
                <td>{player.player_name}</td>
                <td>{player.player_position}</td>
                <td>{player.player_club}</td>
                <td>{player.points}</td>
                <td>Select</td>
            </tr>
        </>
    )
}

export default Player;