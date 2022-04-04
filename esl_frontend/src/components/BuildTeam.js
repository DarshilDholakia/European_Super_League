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
    const [userPlayerList, setUserPlayerList] = useState([])

    const [filteredPositionList, setFilteredPositionList] = useState([]);
    const [filteredClubList, setFilteredClubList] = useState([]);

    const [specificUserAssignmentState, setSpecificUserAssignmentState] = useState([]);

    const [playerOnPitchChangeSelected, setPlayerOnPitchChangeSelected] = useState(false);

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
            .then(data => setUserPlayerList(data))
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

    const fetchPlayersByPosition = (player_position) => {
        fetch(`http://localhost:8080/player/position/${player_position}`)
            .then((response) => response.json())
            .then(data => setFilteredPositionList(data))
            .catch((error) => console.error(error))
    }

    const fetchPlayersByClub = (player_club) => {
        fetch(`http://localhost:8080/player/club/${player_club}`)
            .then((response) => response.json())
            .then(data => setFilteredClubList(data))
            .catch((error) => console.error(error))
    }

    // Specific assignment being found
    const selectAssignmentByUserIdAndPlayerId = (player_id) => {
        fetch(`http://localhost:8080/assignments/user_id/${user.id}/player_id/${player_id}`)
            .then((response) => response.json())
            // .then(data => console.log(data)) <this works, the state is just not updating in time below
            .then(data => setSpecificUserAssignmentState(data))
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        if (specificUserAssignmentState.length > 0) {
            setCurrentAssignmentIdState((specificUserAssignmentState[0]).id)    
        }
    }, [specificUserAssignmentState])

    //when user clicks + button on a player, we find the player id with that position
    //we then find the assignment id using that player id (and the user id) 
    // we set the changeState to assignment id and player id
    // now in handleTransferTablePlayerSelect, we have the player id selected at the top
    // we grab the assignment id from the changeState
    // and bish bash bosh

    const [forwardState, setForwardState] = useState({ selected: false, kit: nonSelectedPlayer });
    const [midfielder1State, setMidfielder1State] = useState({ selected: false, kit: nonSelectedPlayer });
    const [midfielder2State, setMidfielder2State] = useState({ selected: false, kit: nonSelectedPlayer });
    const [defenderState, setDefenderState] = useState({ selected: false, kit: nonSelectedPlayer });
    const [goalkeeperState, setGoalkeeperState] = useState({ selected: false, kit: nonSelectedPlayer });

    const [currentAssignmentIdState, setCurrentAssignmentIdState] = useState([])

    const manageForward = () => {   //when you press the + button on the forward player
        if (forwardState.selected == false) {
            setPlayerOnPitchChangeSelected(true);
            let userCurrentForwardPlayer = userPlayerList.find(player => player.player_position === "FORWARD");
            console.log({userCurrentForwardPlayer});
            let userCurrentForwardPlayerID = userCurrentForwardPlayer.id;
            console.log({userCurrentForwardPlayerID});

            selectAssignmentByUserIdAndPlayerId(userCurrentForwardPlayerID);
            // ^ this is the function that should set specificUserAssignmentState
            console.log({specificUserAssignmentState}); //this doesnt work on the first try - comes back as empty array in console
            // look at line 106 where specificUserAssignmentState should be set
            // async issue? 
            // setCurrentAssignmentIdState((specificUserAssignmentState[0]).id); 
            // ^ you need [0] above because the method returns an array of objects eventho its just 1 object





            // you want to get the forward player of the user
            // get the player id of that player
            // use player id (and user id) to find the assignment id
            // set currentChangeState to this assignment id
            // you get the newplayerstateid and use the assignment id to update it with that

            fetchPlayersByPosition("FORWARD"); //shows the forward players on the transfer table
            setForwardState({ selected: true, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });

        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([])
            setForwardState({ selected: false, kit: nonSelectedPlayer });
        }
    }

    const manageMidfielder1 = () => {
        if (midfielder1State.selected == false) {
            setPlayerOnPitchChangeSelected(true);
            fetchPlayersByPosition("MIDFIELDER");
            setMidfielder1State({ selected: true, kit: midfielder1State.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder1State({ selected: false, kit: nonSelectedPlayer });
        }
    }

    const manageMidfielder2 = () => {
        if (midfielder2State.selected == false) {
            setPlayerOnPitchChangeSelected(true);
            fetchPlayersByPosition("MIDFIELDER");
            setMidfielder2State({ selected: true, kit: midfielder2State.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder2State({ selected: false, kit: nonSelectedPlayer });
        }
    }

    const manageDefender = () => {
        if (defenderState.selected == false) {
            setPlayerOnPitchChangeSelected(true);
            fetchPlayersByPosition("DEFENDER");
            setDefenderState({ selected: true, kit: defenderState.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([])
            setDefenderState({ selected: false, kit: nonSelectedPlayer });
        }
    }

    const manageGoalkeeper = () => {
        if (goalkeeperState.selected == false) {
            setPlayerOnPitchChangeSelected(true);
            fetchPlayersByPosition("GOALKEEPER");
            setGoalkeeperState({ selected: true, kit: goalkeeperState.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([])
            setGoalkeeperState({ selected: false, kit: nonSelectedPlayer });
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

    const handleTransferTablePlayerSelect = (id, club) => {

        for (var key in kitMap){
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: kitMap.get(key)})
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: kitMap.get(key)})
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: kitMap.get(key)})
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: kitMap.get(key)})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: kitMap.get(key)})
            }
        }
        setForwardState({ selected: false, kit: forwardState.kit });
        setMidfielder1State({ selected: false, kit: midfielder1State.kit })
        setMidfielder2State({ selected: false, kit: midfielder2State.kit })
        setDefenderState({ selected: false, kit: defenderState.kit })
        setForwardState({ selected: false, kit: forwardState.kit })
        setPlayerOnPitchChangeSelected(false);
    }

    const filteredPositionListMap = filteredPositionList.map(filteredPlayer => {
        return (
            <Player handleTransferTablePlayerSelect={handleTransferTablePlayerSelect}
                playerOnPitchChangeSelected={playerOnPitchChangeSelected}
                currentAssignmentId={currentAssignmentIdState}
                assignmentList={assignmentList}
                updateAssignmentById={updateAssignmentById}
                player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const filteredClubListMap = filteredClubList.map(filteredPlayer => {
        return (
            <Player handleTransferTablePlayerSelect={handleTransferTablePlayerSelect}
                playerOnPitchChangeSelected={playerOnPitchChangeSelected}
                currentAssignmentId={currentAssignmentIdState}
                assignmentList={assignmentList}
                updateAssignmentById={updateAssignmentById}
                player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const playerMap = playerList.map(player => {
        return (
            <Player handleTransferTablePlayerSelect={handleTransferTablePlayerSelect}
                playerOnPitchChangeSelected={playerOnPitchChangeSelected}
                currentAssignmentId={currentAssignmentIdState}
                assignmentList={assignmentList}
                updateAssignmentById={updateAssignmentById}
                player={player} key={player.id} />
        )
    });

    const filteredCombinedMap = filteredClubList.map(clubPlayer => {
        for (let i = 0; i < filteredPositionList.length; i++) {
            if (clubPlayer.id === filteredPositionList[i].id) {
                return (
                    <Player handleTransferTablePlayerSelect={handleTransferTablePlayerSelect}
                        playerOnPitchChangeSelected={playerOnPitchChangeSelected}
                        currentAssignmentId={currentAssignmentIdState}
                        assignmentList={assignmentList}
                        updateAssignmentById={updateAssignmentById}
                        player={clubPlayer} key={clubPlayer.id} />
                )
            }
        }
    })

    const handlePositionFilter = event => {
        if (event.target.value === 'ALL') {
            setFilteredPositionList([])
            return playerList;
        } else {
            fetchPlayersByPosition(event.target.value)
        }
    }

    const handleClubFilter = event => {
        if (event.target.value === 'ALL') {
            setFilteredClubList([])
            return playerList;
        } else {
            fetchPlayersByClub(event.target.value)
        }
    }


    let midfielderCount = 1;

    const findUserPlayers = () => {
        for (let i = 0; i < userPlayerList.length; i++) {
            let position = userPlayerList[i].player_position
            let club = userPlayerList[i].player_club
            let kit = kitMap.get(club)
            if (position === "GOALKEEPER") {
                setGoalkeeperState({ selected: goalkeeperState.selected, kit: kit })
            } else if (position === "DEFENDER") {
                setDefenderState({ selected: defenderState.selected, kit: kit })
            } else if (position === "MIDFIELDER") {
                if (midfielderCount === 1) {
                    setMidfielder1State({ selected: midfielder1State.selected, kit: kit })
                    midfielderCount++;
                } else {
                    setMidfielder2State({ selected: midfielder2State.selected, kit: kit })
                }
            } else if (position === "FORWARD") {
                setForwardState({ selected: forwardState.selected, kit: kit })
            }
        }
    }


    useEffect(findUserPlayers, [userPlayerList])

    // const [currentAssignmentIdState, setCurrentAssignmentIdState] = useState([])

    // const manageForward = () => {   //when you press the + button on the forward player
    //     if (forwardState.selected == false) {

    //         let userCurrentForwardPlayer = userPlayerList.find(player => player.player_position === "FORWARD");
    //         let userCurrentForwardPlayerID = userCurrentForwardPlayer.id;
    //         selectAssignmentByUserIdAndPlayerId(userCurrentForwardPlayerID);
    //         setCurrentAssignmentIdState(specificUserAssignmentState.id);


    //         // you want to get the forward player of the user
    //         // get the player id of that player
    //         // use player id (and user id) to find the assignment id
    //         // set currentChangeState to this assignment id
    //         // you get the newplayerstateid and use the assignment id to update it with that

    //         fetchPlayersByPosition("FORWARD"); //shows the forward players on the transfer table
    //         setForwardState({ selected: true, kit: forwardState.kit });
    //         setMidfielder1State({ selected: false, kit: midfielder1State.kit });
    //         setMidfielder2State({ selected: false, kit: midfielder2State.kit });
    //         setDefenderState({ selected: false, kit: defenderState.kit });
    //         setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });

    //     } else {
    //         setFilteredPositionList([]);
    //         setFilteredClubList([])
    //         setForwardState({ selected: false, kit: nonSelectedPlayer });
    //     }
    // }

    // const manageMidfielder1 = () => {
    //     if (midfielder1State.selected == false) {
    //         fetchPlayersByPosition("MIDFIELDER");
    //         setMidfielder1State({ selected: true, kit: midfielder1State.kit });
    //         setForwardState({ selected: false, kit: forwardState.kit });
    //         setMidfielder2State({ selected: false, kit: midfielder2State.kit });
    //         setDefenderState({ selected: false, kit: defenderState.kit });
    //         setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
    //     } else {
    //         setFilteredPositionList([]);
    //         setFilteredClubList([])
    //         setMidfielder1State({ selected: false, kit: nonSelectedPlayer });
    //     }
    // }

    // const manageMidfielder2 = () => {
    //     if (midfielder2State.selected == false) {
    //         fetchPlayersByPosition("MIDFIELDER");
    //         setMidfielder2State({ selected: true, kit: midfielder2State.kit });
    //         setForwardState({ selected: false, kit: forwardState.kit });
    //         setMidfielder1State({ selected: false, kit: midfielder1State.kit });
    //         setDefenderState({ selected: false, kit: defenderState.kit });
    //         setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
    //     } else {
    //         setFilteredPositionList([]);
    //         setFilteredClubList([])
    //         setMidfielder2State({ selected: false, kit: nonSelectedPlayer });
    //     }
    // }

    // const manageDefender = () => {
    //     if (defenderState.selected == false) {
    //         fetchPlayersByPosition("DEFENDER");
    //         setDefenderState({ selected: true, kit: defenderState.kit });
    //         setForwardState({ selected: false, kit: forwardState.kit });
    //         setMidfielder1State({ selected: false, kit: midfielder1State.kit });
    //         setMidfielder2State({ selected: false, kit: midfielder2State.kit });
    //         setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
    //     } else {
    //         setFilteredPositionList([]);
    //         setFilteredClubList([])
    //         setDefenderState({ selected: false, kit: nonSelectedPlayer });
    //     }
    // }

    // const manageGoalkeeper = () => {
    //     if (goalkeeperState.selected == false) {
    //         fetchPlayersByPosition("GOALKEEPER");
    //         setGoalkeeperState({ selected: true, kit: goalkeeperState.kit });
    //         setForwardState({ selected: false, kit: forwardState.kit });
    //         setMidfielder1State({ selected: false, kit: midfielder1State.kit });
    //         setMidfielder2State({ selected: false, kit: midfielder2State.kit });
    //         setDefenderState({ selected: false, kit: defenderState.kit });
    //     } else {
    //         setFilteredPositionList([]);
    //         setFilteredClubList([])
    //         setGoalkeeperState({ selected: false, kit: nonSelectedPlayer });
    //     }
    // }

    const positionFilterDropDown = <>{playerOnPitchChangeSelected === false ?
        <>
            <label htmlFor='positions'>Position</label>
            <select onChange={handlePositionFilter} name="positions">
                <option value="ALL">All</option>
                <option value="GOALKEEPER">GOALKEEPER</option>
                <option value="DEFENDER">DEFENDER</option>
                <option value="MIDFIELDER">MIDFIELDER</option>
                <option value="FORWARD">FORWARD</option>
            </select>
        </>
        : ""}</> //shouldnt be able to change filter if a player on the pitch is selected

    return (
        <>
            <h1>Assemble your squad</h1>
            <div className='Main-container'>
                <div className="pitch-container">
                    <img className='pitch-image' src={pitchImage} alt='pitch image' width="100%"></img>

                    <div className="forward-container">
                        <div className="player-buttons">
                            <button onClick={manageForward}> {forwardState.selected && playerOnPitchChangeSelected === true ? "x" : "+"} </button>
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
                    {positionFilterDropDown}
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