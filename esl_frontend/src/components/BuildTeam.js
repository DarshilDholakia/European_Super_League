import React, { useEffect, useState } from 'react';
import Player from './Player';
import pitchImage from '../assets/pitch.png'

const BuildTeam = ({ playerList }) => {

    const [assignmentList, setAssignmentList] = useState([])
    // const [playerNameFilter, setPlayerNameFilter] = useState([])
    // const [playerPositionFilter, setPlayerPositionFilter] = useState([])
    // const [playerClubFilter, setPlayerClubFilter] = useState([])

    const [filteredPositionList, setFilteredPositionList] = useState([]);
    const [filteredClubList, setFilteredClubList] = useState([]); 

    const fetchAllAssignments = () => {
        fetch("http://localhost:8080/assignments/all")
            .then(response => response.json())
            .then(data => setAssignmentList(data))
            .catch((error) => console.error(error));

    }

    //ADD NEW ASSIGNMENT

    const addNewAssignment = (newAssignment) => {
        fetch("http://localhost:8080/assignments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAssignment),
        })
            .then(() => fetchAllAssignments)
            .catch((error) => console.error(error))
    };

    //DELETE ASSSIGNMENT

    const deleteAssignmentById = (id) => {
        fetch(`http://localhost:8080/assignments/assignment_id/${id}`, {
            method: "DELETE",
        })
            .then(() => fetchAllAssignments())
            .catch((error) => console.error(error))
    };

    //PLAYER FUNCTIONS 

    // const fetchPlayerByName = (name) => {
    //     fetch(`http://localhost:8080/player/name/${name}`)
    //         .then((response) => response.json())
    //         .then(data => setFilteredList(data))
    //         .catch((error) => console.error(error))
    // }

    const fetchPlayerByPosition = (player_position) => {
        fetch(`http://localhost:8080/player/position/${player_position}`)
            .then((response) => response.json())
            .then(data => setFilteredPositionList(data))
            .catch((error) => console.error(error))
    }

    const fetchPlayerByClub = (player_club) => {
        fetch(`http://localhost:8080/player/club/${player_club}`)
            .then((response) => response.json())
            .then(data => setFilteredClubList(data))
            .catch((error) => console.error(error))
    }

    const filteredPositionListMap = filteredPositionList.map(filteredPlayer => {
        return (
            <Player player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const filteredClubListMap = filteredClubList.map(filteredPlayer => {
        return (
            <Player player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const playerMap = playerList.map(player => {
        return (
            <Player player={player} key={player.id} />
        )
    });

    const filteredCombinedList = filteredClubList.map(clubPlayer => {
        for (let i = 0; i < filteredPositionList.length; i++) {
            if (clubPlayer === filteredPositionList[i]) {
                return <Player player={clubPlayer} key={clubPlayer.id}/>
            }
        }
    })

    // const filteredCombinedMap = filteredCombinedList.map(combinedPlayer => {
    //     return (
    //         <Player player={combinedPlayer} key={combinedPlayer.id} />
    //     )
    // })

    const handlePositionFilter = event => {
        console.log(filteredCombinedList);
        if (event.target.value === 'ALL') {
            setFilteredPositionList([])
            return playerList;
        } else {
            fetchPlayerByPosition(event.target.value)
        }
    }

    const handleClubFilter = event => {
        if (event.target.value === 'ALL') {
            setFilteredClubList([])
            return playerList;
        } else {
            fetchPlayerByClub(event.target.value)
        }
    }

    return (
        <>
            <h1>Assemble your squad</h1>
            <div className='Main-container'>
                <div className="pitch-element">
                    <img className='pitch-image' src={pitchImage} alt='Pitch image' width="200" height="200"></img>
                </div>
                <div className='table-and-filter'>

                    <label htmlFor='positions'>Position</label>
                    <select onChange={handlePositionFilter} name="positions">
                        <option value="ALL">All</option>
                        <option value="GOALKEEPER">GOALKEEPER</option>
                        <option value="DEFENDER">DEFENDER</option>
                        <option value="MIDFIELDER">MIDFIELDER</option>
                        <option value="FORWARD">FORWARD</option>
                    </select>

                    <label htmlFor='clubs'>Clubs</label>
                    <select onChange={handleClubFilter} name="clubs">
                        <option value="ALL">All</option>
                        <option value="UNITED">UNITED</option>
                        <option value="PSG">PSG</option>
                        <option value="LIVERPOOL">LIVERPOOL</option>
                        <option value="REAL_MADRID">REAL MADRID</option>
                        <option value="JUVENTUS">JUVENTUS</option>
                        <option value="CITY">CITY</option>
                        <option value="MILAN">MILAN</option>
                        <option value="WEST_HAM">WEST HAM</option>
                        <option value="INTER">INTER</option>
                        <option value="ARSENAL">ARSENAL</option>
                        <option value="BARCELONA">BARCELONA</option>
                        <option value="ATLETICO">ATLETICO</option>
                    </select>

                    <table className='table-element'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Club</th>
                                <th>Total Points</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(filteredClubList.length > 0) && (filteredPositionList.length > 0) ? filteredCombinedList : filteredPositionList.length > 0 && filteredClubList.length === 0 
                            ? filteredPositionListMap : filteredClubList.length > 0 && filteredPositionList.length === 0 ? filteredClubListMap : playerMap}
                            {/* {filteredCombinedMap} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BuildTeam;