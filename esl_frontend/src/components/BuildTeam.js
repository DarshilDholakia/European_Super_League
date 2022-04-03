import React, { useContext, useEffect, useState } from 'react';
import Player from './Player';
import pitchImage from '../assets/pitch.png';
import nonSelectedPlayer from '../assets/kits/nonSelectedPlayer.png'
import arsenalKit from '../assets/kits/arsenalKit.png'
import atleticoKit from '../assets/kits/atleticoKit.png'
import barcelonaKit from '../assets/kits/barcelonaKit.png'
import interKit from '../assets/kits/interKit.png'
import milanKit from '../assets/kits/milanKit.png'
import cityKit from '../assets/kits/cityKit.png'
import liverpoolKit from '../assets/kits/liverpoolKit.png'
import unitedKit from '../assets/kits/unitedKit.png'
import real_madridKit from '../assets/kits/real_madridKit.png'
import psgKit from '../assets/kits/psgKit.png'
import juventusKit from '../assets/kits/juventusKit.png'
import west_hamKit from '../assets/kits/west_hamKit.png'
import { UserContext } from './UserContext';

const BuildTeam = ({ playerList }) => {

    const { user } = useContext(UserContext);

    const [assignmentList, setAssignmentList] = useState([])
    const [userAssignmentList, setUserAssignmentList] = useState([])

    const [filteredPositionList, setFilteredPositionList] = useState([]);
    const [filteredClubList, setFilteredClubList] = useState([]);

    const fetchAllAssignments = () => {
        fetch("http://localhost:8080/assignments/all")
            .then(response => response.json())
            .then(data => setAssignmentList(data))
            .catch((error) => console.error(error));
    }
    useEffect(fetchAllAssignments, []);

    const fetchAssignmentByUser = () => {
        fetch(`http://localhost:8080/assignments/user_id/${user.id}`)
            .then(response => response.json())
            .then(data => setUserAssignmentList(data))
            .catch((error) => console.error(error));
    }
    useEffect(fetchAssignmentByUser, []);

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

    // UPDATE ASSIGNMENT

    const updateAssignmentById = (assignment_id, updatedAssignment) => {
        fetch(`http://localhost:8080/assignments/assignment_id/${assignment_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
            .then(() => fetchAssignmentByUser(user.id))
            .catch((error) => console.error(error))
    }

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

    const handlePlayerSelect = (club) => {
        if (club === "UNITED") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: unitedKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: unitedKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: unitedKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: unitedKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: unitedKit })
            }

        } else if (club === "PSG") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: psgKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: psgKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: psgKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: psgKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: psgKit })
            }

        } else if (club === "LIVERPOOL") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: liverpoolKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: liverpoolKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: liverpoolKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: liverpoolKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: liverpoolKit })
            }

        } else if (club === "REAL_MADRID") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: real_madridKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: real_madridKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: real_madridKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: real_madridKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: real_madridKit })
            }

        } else if (club === "JUVENTUS") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: juventusKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: juventusKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: juventusKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: juventusKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: juventusKit })
            }

        } else if (club === "CITY") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: cityKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: cityKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: cityKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: cityKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: cityKit })
            }

        } else if (club === "INTER") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: interKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: interKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: interKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: interKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: interKit })
            }

        } else if (club === "WEST_HAM") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: west_hamKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: west_hamKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: west_hamKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: west_hamKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: west_hamKit })
            }

        } else if (club === "MILAN") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: milanKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: milanKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: milanKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: milanKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: milanKit })
            }

        } else if (club === "ARSENAL") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: arsenalKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: arsenalKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: arsenalKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: arsenalKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: arsenalKit })
            }

        } else if (club === "BARCELONA") {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: barcelonaKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: barcelonaKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: barcelonaKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: barcelonaKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: barcelonaKit })
            }

        } else {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: atleticoKit })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: atleticoKit })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: atleticoKit })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: atleticoKit })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: atleticoKit })
            }
        }
    }

    const filteredPositionListMap = filteredPositionList.map(filteredPlayer => {
        return (
            <Player handlePlayerSelect={handlePlayerSelect}
                assignmentList={assignmentList}
                updateAssignmentById={updateAssignmentById}
                player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const filteredClubListMap = filteredClubList.map(filteredPlayer => {
        return (
            <Player handlePlayerSelect={handlePlayerSelect}
                assignmentList={assignmentList}
                updateAssignmentById={updateAssignmentById}
                player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const playerMap = playerList.map(player => {
        return (
            <Player handlePlayerSelect={handlePlayerSelect}
                assignmentList={assignmentList}
                updateAssignmentById={updateAssignmentById}
                player={player} key={player.id} />
        )
    });

    const filteredCombinedMap = filteredClubList.map(clubPlayer => {
        for (let i = 0; i < filteredPositionList.length; i++) {
            if (clubPlayer.id === filteredPositionList[i].id) {
                return <Player handlePlayerSelect={handlePlayerSelect()} player={clubPlayer} key={clubPlayer.id}
                assignmentList={assignmentList} />
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

    let kitMap = new Map([
        ["UNITED", unitedKit],
        ["PSG", psgKit],
        ["LIVERPOOL", liverpoolKit],
        ["REAL_MADRID", real_madridKit],
        ["JUVENTUS", juventusKit],
        ["CITY", cityKit],
        ["INTER", interKit],
        ["WEST_HAM", west_hamKit],
        ["MILAN", milanKit],
        ["ARSENAL", arsenalKit],
        ["BARCELONA", barcelonaKit],
        ["ATLETICO", atleticoKit]
    ]);

    const findUserPlayers = () => {
        for (let i = 0; i < userAssignmentList.length; i++) {
            let position = userAssignmentList[i].player_position
            let club = userAssignmentList[i].player_club
            let kit = kitMap.get(club)
            if (position === "GOALKEEPER") {
                setGoalkeeperState({selected: goalkeeperState.selected, kit: kit})
            } else if (position === "DEFENDER") {
                setDefenderState({selected: defenderState.selected, kit: kit})
            } else if (position === "MIDFIELDER") {
                if (midfielder1State.kit === nonSelectedPlayer) {
                    setMidfielder1State({selected: midfielder1State.selected, kit: kit})
                } else{
                    setMidfielder2State({selected: midfielder2State.selected, kit: kit})
                }
            } else if (position === "FORWARD") {
                setForwardState({selected: forwardState.selected, kit: kit})
            }
        }
    }


    useEffect(findUserPlayers, [userAssignmentList])

    // delete this to restore to this stage
    const [forwardState, setForwardState] = useState({ selected: false, kit: nonSelectedPlayer });
    const [midfielder1State, setMidfielder1State] = useState({ selected: false, kit: nonSelectedPlayer });
    const [midfielder2State, setMidfielder2State] = useState({ selected: false, kit: nonSelectedPlayer });
    const [defenderState, setDefenderState] = useState({ selected: false, kit: nonSelectedPlayer });
    const [goalkeeperState, setGoalkeeperState] = useState({ selected: false, kit: nonSelectedPlayer });

    const manageForward = () => {
        if (forwardState.selected == false) {
            fetchPlayerByPosition("FORWARD");
            setForwardState({ selected: true, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setForwardState({ selected: false, kit: nonSelectedPlayer });
        }
    }

    const manageMidfielder1 = () => {
        if (midfielder1State.selected == false) {
            fetchPlayerByPosition("MIDFIELDER");
            setMidfielder1State({ selected: true, kit: midfielder1State.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder1State({ selected: false, kit: nonSelectedPlayer });
        }
    }

    const manageMidfielder2 = () => {
        if (midfielder2State.selected == false) {
            fetchPlayerByPosition("MIDFIELDER");
            setMidfielder2State({ selected: true, kit: midfielder2State.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder2State({ selected: false, kit: nonSelectedPlayer });
        }
    }

    const manageDefender = () => {
        if (defenderState.selected == false) {
            fetchPlayerByPosition("DEFENDER");
            setDefenderState({ selected: true, kit: defenderState.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setDefenderState({ selected: false, kit: nonSelectedPlayer });
        }
    }

    const manageGoalkeeper = () => {
        if (goalkeeperState.selected == false) {
            fetchPlayerByPosition("GOALKEEPER");
            setGoalkeeperState({ selected: true, kit: goalkeeperState.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setGoalkeeperState({ selected: false, kit: nonSelectedPlayer });
        }
    }

    function dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }

    return (
        <>
            <h1>Assemble your squad</h1>
            <div className='Main-container'>
                <div className="pitch-container">
                    <img className='pitch-image' src={pitchImage} alt='pitch image' width="100%"></img>

                    <div className="forward-container">
                        <div className="player-buttons">
                            <button onClick={manageForward}> {forwardState.selected ? "x" : "+"} </button>
                        </div>
                        <img className={`forward${forwardState.selected ? " player-after-add" : ""}`} src={forwardState.kit} alt='Forward'></img>
                    </div>

                    <div className="midfielder1-container">
                        <div className="player-buttons">
                            <button onClick={manageMidfielder1}> {midfielder1State.selected ? "x" : "+"} </button>
                        </div>
                        <img className={`midfielder1${midfielder1State.selected ? " player-after-add" : ""}`} src={midfielder1State.kit} alt='Midfielder1'></img>
                    </div>

                    <div className="midfielder2-container">
                        <div className="player-buttons">
                            <button onClick={manageMidfielder2}> {midfielder2State.selected ? "x" : "+"} </button>
                        </div>
                        <img className={`midfielder2${midfielder2State.selected ? " player-after-add" : ""}`} src={midfielder2State.kit} alt='Midfielder2'></img>
                    </div>

                    <div className="defender-container">
                        <div className="player-buttons">
                            <button onClick={manageDefender}> {defenderState.selected ? "x" : "+"} </button>
                        </div>
                        <img className={`defender${defenderState.selected ? " player-after-add" : ""}`} src={defenderState.kit} alt='Defender'></img>
                    </div>


                    <div className="goalkeeper-container">
                        <div className="player-buttons">
                            <button onClick={manageGoalkeeper}> {goalkeeperState.selected ? "x" : "+"} </button>
                        </div>
                        <img className={`goalkeeper${goalkeeperState.selected ? " player-after-add" : ""}`} src={goalkeeperState.kit} alt='Goalkeeper'></img>
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