import React, { useEffect, useState } from 'react';
import Player from './Player';
import pitchImage from '../assets/pitch.png';
import nonSelectedPlayer from '../assets/nonSelectedPlayer.png'
import arsenalKit from '../assets/arsenalKit.png'
import atleticoKit from '../assets/atleticoKit.png'
import barcelonaKit from '../assets/barcelonaKit.png'
import interKit from '../assets/interKit.png'
import milanKit from '../assets/milanKit.png'
import cityKit from '../assets/cityKit.png'
import liverpoolKit from '../assets/liverpoolKit.png'
import unitedKit from '../assets/unitedKit.png'
import real_madridKit from '../assets/real_madridKit.png'
import psgKit from '../assets/psgKit.png'
import juventusKit from '../assets/juventusKit.png'
import west_hamKit from '../assets/west_hamKit.png'

const BuildTeam = ({ playerList }) => {

    const [assignmentList, setAssignmentList] = useState([])

    const [filteredPositionList, setFilteredPositionList] = useState([]);
    const [filteredClubList, setFilteredClubList] = useState([]);

    const fetchAllAssignments = () => {
        fetch("http://localhost:8080/assignments/all")
            .then(response => response.json())
            .then(data => setAssignmentList(data))
            .catch((error) => console.error(error));

    }

    // ADD NEW ASSIGNMENT

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

    // DELETE ASSIGNMENT

    const deleteAssignmentById = (id) => {
        fetch(`http://localhost:8080/assignments/assignment_id/${id}`, {
            method: "DELETE",
        })
            .then(() => fetchAllAssignments())
            .catch((error) => console.error(error))
    };

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

    const filteredCombinedMap = filteredClubList.map(clubPlayer => {
        for (let i = 0; i < filteredPositionList.length; i++) {
            if (clubPlayer.id === filteredPositionList[i].id) {
                return <Player player={clubPlayer} key={clubPlayer.id} />
            }
        }
    })

    const handlePositionFilter = event => {
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

    const [forwardState, setForwardState] = useState(false);
    const [midfielder1State, setMidfielder1State] = useState(false);
    const [midfielder2State, setMidfielder2State] = useState(false);
    const [defenderState, setDefenderState] = useState(false);
    const [goalkeeperState, setGoalkeeperState] = useState(false);

    const manageForward = () => {
        if (forwardState == false) {
            fetchPlayerByPosition("FORWARD");
            setForwardState(true);
            setMidfielder1State(false);
            setMidfielder2State(false);
            setDefenderState(false);
            setGoalkeeperState(false);
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setForwardState(false);
        }
    }

    const manageMidfielder1 = () => {
        if (midfielder1State == false) {
            fetchPlayerByPosition("MIDFIELDER");
            setMidfielder1State(true);
            setForwardState(false);
            setMidfielder2State(false);
            setDefenderState(false);
            setGoalkeeperState(false);
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder1State(false);
        }
    }

    const manageMidfielder2 = () => {
        if (midfielder2State == false) {
            fetchPlayerByPosition("MIDFIELDER");
            setMidfielder2State(true);
            setForwardState(false);
            setMidfielder1State(false);
            setDefenderState(false);
            setGoalkeeperState(false);
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder2State(false);
        }
    }

    const manageDefender = () => {
        if (defenderState == false) {
            fetchPlayerByPosition("DEFENDER");
            setDefenderState(true);
            setForwardState(false);
            setMidfielder1State(false);
            setMidfielder2State(false);
            setGoalkeeperState(false);
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setDefenderState(false);
        }
    }

    const manageGoalkeeper = () => {
        if (goalkeeperState == false) {
            fetchPlayerByPosition("GOALKEEPER");
            setGoalkeeperState(true);
            setForwardState(false);
            setMidfielder1State(false);
            setMidfielder2State(false);
            setDefenderState(false);
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setGoalkeeperState(false);
        }
    }

    return (
        <>
            <h1>Assemble your squad</h1>
            <div className='Main-container'>
                <div className="pitch-container">
                    <img className='pitch-image' src={pitchImage} alt='pitch image' width="100%"></img>

                    <div className="forward-container">
                        <div className="player-buttons">
                            <button onClick={manageForward}> {forwardState ? "x" : "+"} </button>
                        </div>
                        <img className={`forward${forwardState ? " player-after-add" : ""}`} src={nonSelectedPlayer} alt='Forward'></img>
                    </div>

                    <div className="midfielder1-container">
                        <div className="player-buttons">
                            <button onClick={manageMidfielder1}> {midfielder1State ? "x" : "+"} </button>
                        </div>
                        <img className={`midfielder1${midfielder1State ? " player-after-add" : ""}`} src={nonSelectedPlayer} alt='Midfielder1'></img>
                    </div>

                    <div className="midfielder2-container">
                        <div className="player-buttons">
                            <button onClick={manageMidfielder2}> {midfielder2State ? "x" : "+"} </button>
                        </div>
                        <img className={`midfielder2${midfielder2State ? " player-after-add" : ""}`} src={nonSelectedPlayer} alt='Midfielder2'></img>
                    </div>

                    <div className="defender-container">
                        <div className="player-buttons">
                            <button onClick={manageDefender}> {defenderState ? "x" : "+"} </button>
                        </div>
                        <img className={`defender${defenderState ? " player-after-add" : ""}`} src={nonSelectedPlayer} alt='Defender'></img>
                    </div>


                    <div className="goalkeeper-container">
                        <div className="player-buttons">
                            <button onClick={manageGoalkeeper}> {goalkeeperState ? "x" : "+"} </button>
                        </div>
                        <img className={`goalkeeper${goalkeeperState ? " player-after-add" : ""}`} src={nonSelectedPlayer} alt='Goalkeeper'></img>
                    </div>
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
                            {(filteredClubList.length > 0) && (filteredPositionList.length > 0) ? filteredCombinedMap : filteredPositionList.length > 0 && filteredClubList.length === 0
                                ? filteredPositionListMap : filteredClubList.length > 0 && filteredPositionList.length === 0 ? filteredClubListMap : playerMap}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BuildTeam;