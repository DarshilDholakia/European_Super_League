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

//test line to be able to commit and push after lunch on Monday

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
            // .then(() => fetchAllAssignments)
            .then(() => fetchAssignmentByUser(user.id))
            .then(() => {
                selectAssignmentByUserIdAndPlayerId(newAssignment.player_id)
            })
            .catch((error) => console.error(error))
            // setIsPlayerKitNonSelectedState('updating')
            // setSpecificUserAssignmentState([newAssignment]);
            // setCurrentAssignmentIdState(specificUserAssignmentState.id);
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
            // setIsPlayerKitNonSelectedState('initial')
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
            .then(data => {
                setSpecificUserAssignmentState(data)
                setIsPlayerKitNonSelectedState('updating')
            })
            .catch((error) => console.error(error));

    }

    const [forwardState, setForwardState] = useState({ selected: false, kit: nonSelectedPlayer });
    const [midfielder1State, setMidfielder1State] = useState({ selected: false, kit: nonSelectedPlayer });
    const [midfielder2State, setMidfielder2State] = useState({ selected: false, kit: nonSelectedPlayer });
    const [defenderState, setDefenderState] = useState({ selected: false, kit: nonSelectedPlayer });
    const [goalkeeperState, setGoalkeeperState] = useState({ selected: false, kit: nonSelectedPlayer });

    const [currentAssignmentIdState, setCurrentAssignmentIdState] = useState([])

    const [isPlayerKitNonSelectedState, setIsPlayerKitNonSelectedState] = useState('initial'); // line added for addAssignment

    useEffect(() => {
        if (specificUserAssignmentState.length > 0) {
            setCurrentAssignmentIdState((specificUserAssignmentState[0]).id)
            // ^ you need [0] above because the method returns an array of objects eventho its just 1 object
        }
    }, [specificUserAssignmentState])

    const manageForward = () => {   //when you press the + button on the forward player
        if (!forwardState.selected) {
            setForwardState({ selected: true, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
            fetchPlayersByPosition("FORWARD"); //shows the forward players on the transfer table

            if (forwardState.kit === nonSelectedPlayer) {
                setIsPlayerKitNonSelectedState('adding')
            } else {
                setIsPlayerKitNonSelectedState('updating')
            }
            setPlayerOnPitchChangeSelected(true);
            
            // if (forwardState.kit === nonSelectedPlayer && isPlayerKitNonSelectedState === 'updating') {
            //     setIsPlayerKitNonSelectedState('adding')
            // }

            if (isPlayerKitNonSelectedState === 'updating') { // line added for addAssignment
                console.log(isPlayerKitNonSelectedState)
                let userCurrentForwardPlayer = userPlayerList.find(player => player.player_position === "FORWARD");
                let userCurrentForwardPlayerId = userCurrentForwardPlayer.id;
                selectAssignmentByUserIdAndPlayerId(userCurrentForwardPlayerId);
                setCurrentAssignmentIdState(specificUserAssignmentState.id);
            }  // line added for addAssignment

        } else {
            setPlayerOnPitchChangeSelected(false);
            // setCurrentAssignmentIdState();
            setFilteredPositionList([]);
            setFilteredClubList([])
            setForwardState({ selected: false, kit: forwardState.kit });
        }
    }

    const manageMidfielder1 = () => {
        if (!midfielder1State.selected) {
            fetchPlayersByPosition("MIDFIELDER");
            setMidfielder1State({ selected: true, kit: midfielder1State.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });

            if (midfielder1State.kit === nonSelectedPlayer) {
                setIsPlayerKitNonSelectedState('adding')
            } else {
                setIsPlayerKitNonSelectedState('updating')
            }
            
            setPlayerOnPitchChangeSelected(true);
            // let userCurrentMidfielder1Player = "";
            if (isPlayerKitNonSelectedState === 'updating') {
                let userCurrentMidfielder1Player = userPlayerList.find(player => player.player_position === "MIDFIELDER");
                let userCurrentMidfielder1PlayerId = userCurrentMidfielder1Player.id;
                selectAssignmentByUserIdAndPlayerId(userCurrentMidfielder1PlayerId);
            }
        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
        }
    }

    const manageMidfielder2 = () => {
        if (!midfielder2State.selected) {
            fetchPlayersByPosition("MIDFIELDER");
            setMidfielder2State({ selected: true, kit: midfielder2State.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
            setPlayerOnPitchChangeSelected(true);

            if (midfielder2State.kit === nonSelectedPlayer) {
                setIsPlayerKitNonSelectedState('adding')
            } else {
                setIsPlayerKitNonSelectedState('updating')
            }

            let userCurrentMidfielder2Player = "";
            let midfielderNumber = 0;
            for (let i = 0; i < userPlayerList.length; i++) {
                if ((userPlayerList[i]).player_position === "MIDFIELDER") {
                    midfielderNumber++
                }
                if (midfielderNumber == 2) {
                    userCurrentMidfielder2Player = userPlayerList[i];
                    break;
                }
            }

            if (isPlayerKitNonSelectedState === 'updating') {
                let userCurrentMidfielder2PlayerId = userCurrentMidfielder2Player.id;
                console.log("current midfielder 2 player id: " + userCurrentMidfielder2PlayerId)
                selectAssignmentByUserIdAndPlayerId(userCurrentMidfielder2PlayerId);
            }
        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
        }
    }

    const manageDefender = () => {
        if (!defenderState.selected) {
            setDefenderState({ selected: true, kit: defenderState.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
            fetchPlayersByPosition("DEFENDER");

            if (defenderState.kit === nonSelectedPlayer) {
                setIsPlayerKitNonSelectedState('adding')
            } else {
                setIsPlayerKitNonSelectedState('updating')
            }

            setPlayerOnPitchChangeSelected(true);
            // if (defenderState.kit === nonSelectedPlayer && isPlayerKitNonSelectedState === 'updating') {
            //     setIsPlayerKitNonSelectedState('adding')
            // }

            if (isPlayerKitNonSelectedState === 'updating') {
                let userCurrentDefenderPlayer = userPlayerList.find(player => player.player_position === "DEFENDER");
                let userCurrentDefenderPlayerId = userCurrentDefenderPlayer.id;
                selectAssignmentByUserIdAndPlayerId(userCurrentDefenderPlayerId);
            }
        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([]);
            setDefenderState({ selected: false, kit: defenderState.kit });
        }
    }

    const manageGoalkeeper = () => {
        if (!goalkeeperState.selected) {
            setGoalkeeperState({ selected: true, kit: goalkeeperState.kit });
            setForwardState({ selected: false, kit: forwardState.kit });
            setMidfielder1State({ selected: false, kit: midfielder1State.kit });
            setMidfielder2State({ selected: false, kit: midfielder2State.kit });
            setDefenderState({ selected: false, kit: defenderState.kit });
            fetchPlayersByPosition("GOALKEEPER");

            if (goalkeeperState.kit === nonSelectedPlayer) {
                setIsPlayerKitNonSelectedState('adding')
            } else {
                setIsPlayerKitNonSelectedState('updating')
            }

            setPlayerOnPitchChangeSelected(true);
            // if (goalkeeperState.kit === nonSelectedPlayer && isPlayerKitNonSelectedState === 'updating') {
            //     setIsPlayerKitNonSelectedState('adding')
            // }

            if (isPlayerKitNonSelectedState === 'updating') {
                let userCurrentGoalkeeperPlayer = userPlayerList.find(player => player.player_position === "GOALKEEPER");
                let userCurrentGoalkeeperPlayerId = userCurrentGoalkeeperPlayer.id;
                selectAssignmentByUserIdAndPlayerId(userCurrentGoalkeeperPlayerId);
            }
        } else {
            setPlayerOnPitchChangeSelected(false);
            setFilteredPositionList([]);
            setFilteredClubList([])
            setGoalkeeperState({ selected: false, kit: goalkeeperState.kit });
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

    const handleTransferTablePlayerSelect = () => {

        for (var key in kitMap) {
            if (forwardState.selected) {
                setForwardState({ selected: true, kit: kitMap.get(key) })
            } else if (midfielder1State.selected) {
                setMidfielder1State({ selected: true, kit: kitMap.get(key) })
            } else if (midfielder2State.selected) {
                setMidfielder2State({ selected: true, kit: kitMap.get(key) })
            } else if (defenderState.selected) {
                setDefenderState({ selected: true, kit: kitMap.get(key) })
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({ selected: true, kit: kitMap.get(key) })
            }
        }
        setForwardState({ selected: false, kit: forwardState.kit });
        setMidfielder1State({ selected: false, kit: midfielder1State.kit })
        setMidfielder2State({ selected: false, kit: midfielder2State.kit })
        setDefenderState({ selected: false, kit: defenderState.kit })
        setForwardState({ selected: false, kit: forwardState.kit })
        setGoalkeeperState({ selected: false, kit: forwardState.kit })
        setPlayerOnPitchChangeSelected(false);
    }





    //check position states and see which one is selected
    //if the kit of that is non selected, setIsPlayerKitNonSelectedState(true)
    //currentAssignmentId={currentAssignmentIdState} is passed down in players - we only want to work that out if there is an existing assignment
    //in manage position functions, have an if statement where only if IsPlayerKitNonSelectedState is false, you do that stuff
    //otherwise, pass in add addNewAssignment as a prop for Player
    //also pass in IsPlayerKitNonSelectedState
    //in Player.js, if IsPlayerKitNonSelectedState is false, onclick on select will do normal stuff
    //otherwise, it needs to use addNewAssignment instead of updateAssignmentById


    const filteredPositionListMap = filteredPositionList.map(filteredPlayer => {
        return (
            <Player handleTransferTablePlayerSelect={handleTransferTablePlayerSelect}
                playerOnPitchChangeSelected={playerOnPitchChangeSelected}
                currentAssignmentId={currentAssignmentIdState}
                updateAssignmentById={updateAssignmentById}
                isPlayerKitNonSelectedState = {isPlayerKitNonSelectedState}
                addNewAssignment = {addNewAssignment}
                player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const filteredClubListMap = filteredClubList.map(filteredPlayer => {
        return (
            <Player handleTransferTablePlayerSelect={handleTransferTablePlayerSelect}
                playerOnPitchChangeSelected={playerOnPitchChangeSelected}
                currentAssignmentId={currentAssignmentIdState}
                updateAssignmentById={updateAssignmentById}
                isPlayerKitNonSelectedState = {isPlayerKitNonSelectedState}
                addNewAssignment = {addNewAssignment}
                player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const playerMap = playerList.map(player => {
        return (
            <Player handleTransferTablePlayerSelect={handleTransferTablePlayerSelect}
                playerOnPitchChangeSelected={playerOnPitchChangeSelected}
                currentAssignmentId={currentAssignmentIdState}
                updateAssignmentById={updateAssignmentById}
                isPlayerKitNonSelectedState = {isPlayerKitNonSelectedState}
                addNewAssignment = {addNewAssignment}
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
                        updateAssignmentById={updateAssignmentById}
                        isPlayerKitNonSelectedState = {isPlayerKitNonSelectedState}
                        addNewAssignment = {addNewAssignment}
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

    const[forwardName, setForwardName] = useState("");
    const[midfielder1Name, setMidfielder1Name] = useState("");
    const[midfielder2Name, setMidfielder2Name] = useState("");
    const[defenderName, setDefenderName] = useState("");
    const[goalkeeperName, setGoalkeeperName] = useState("");

    let midfielderCount = 1;

    const findUserPlayers = () => {
        for (let i = 0; i < userPlayerList.length; i++) {
            let position = userPlayerList[i].player_position
            let club = userPlayerList[i].player_club
            let kit = kitMap.get(club)
            if (position === "GOALKEEPER") {
                setGoalkeeperState({ selected: goalkeeperState.selected, kit: kit })
                setGoalkeeperName(userPlayerList[i].player_name)
            } else if (position === "DEFENDER") {
                setDefenderState({ selected: defenderState.selected, kit: kit })
                setDefenderName(userPlayerList[i].player_name)
            } else if (position === "MIDFIELDER") {
                if (midfielderCount === 1) {
                    setMidfielder1State({ selected: midfielder1State.selected, kit: kit })
                    setMidfielder1Name(userPlayerList[i].player_name)
                    midfielderCount++;
                } else {
                    setMidfielder2State({ selected: midfielder2State.selected, kit: kit })
                    setMidfielder2Name(userPlayerList[i].player_name)
                }
            } else if (position === "FORWARD") {
                setForwardState({ selected: forwardState.selected, kit: kit })
                setForwardName(userPlayerList[i].player_name)
            }
        }
    }


    useEffect(findUserPlayers, [userPlayerList])


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
            <h1 className='build-team-title'>Assemble Your Squad</h1>
            <div className='Main-container'>
                <div className="pitch-container">
                    <img className='pitch-image' src={pitchImage} alt='pitch image' width="100%"></img>

                    <div className="forward-container">
                        <div className="player-buttons">
                            <button onClick={manageForward}> {forwardState.selected && playerOnPitchChangeSelected === true ? "x" : "+"} </button>
                            {/* {forwardState.kit !== nonSelectedPlayer ? <button onClick={handleDelete}>Delete</button> : ""} */}
                        </div>
                        <img className={`forward${forwardState.selected ? " player-after-add" : ""}`} src={forwardState.kit} alt='Forward' width="80px" height="100px"></img>
                        <h6 className = "player-label">{forwardName}</h6>
                    </div>

                    <div className="midfielder1-container">
                        <div className="player-buttons">
                            <button onClick={manageMidfielder1}> {midfielder1State.selected && playerOnPitchChangeSelected === true ? "x" : "+"} </button>
                            {/* {midfielder1State.kit !== nonSelectedPlayer ? <button onClick={handleDelete}>Delete</button> : ""} */}
                        </div>
                        <img className={`midfielder1${midfielder1State.selected ? " player-after-add" : ""}`} src={midfielder1State.kit} alt='Midfielder1' width="80px" height="100px"></img>
                        <h6 className = "player-label">{midfielder1Name}</h6>
                    </div>

                    <div className="midfielder2-container">
                        <div className="player-buttons">
                            <button onClick={manageMidfielder2}> {midfielder2State.selected && playerOnPitchChangeSelected === true ? "x" : "+"} </button>
                            {/* {midfielder2State.kit !== nonSelectedPlayer ? <button onClick={handleDelete}>Delete</button> : ""} */}
                        </div>
                        <img className={`midfielder2${midfielder2State.selected ? " player-after-add" : ""}`} src={midfielder2State.kit} alt='Midfielder2' width="80px" height="100px"></img>
                        <h6 className = "player-label">{midfielder2Name}</h6>
                    </div>

                    <div className="defender-container">
                        <div className="player-buttons">
                            <button onClick={manageDefender}> {defenderState.selected && playerOnPitchChangeSelected === true ? "x" : "+"} </button>
                            {/* {defenderState.kit !== nonSelectedPlayer ? <button onClick={handleDelete}>Delete</button> : ""} */}
                        </div>
                        <img className={`defender${defenderState.selected ? " player-after-add" : ""}`} src={defenderState.kit} alt='Defender' width="80px" height="100px"></img>
                        <h6 className = "player-label">{defenderName}</h6>
                    </div>


                    <div className="goalkeeper-container">
                        <div className="player-buttons">
                            <button onClick={manageGoalkeeper}> {goalkeeperState.selected && playerOnPitchChangeSelected === true ? "x" : "+"} </button>
                            {/* {goalkeeperState.kit !== nonSelectedPlayer ? <button onClick={handleDelete}>Delete</button> : ""} */}
                        </div>
                        <img className={`goalkeeper${goalkeeperState.selected ? " player-after-add" : ""}`} src={goalkeeperState.kit} alt='Goalkeeper' width="80px" height="100px"></img>
                        <h6 className = "player-label">{goalkeeperName}</h6>
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
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Club</th>
                                <th>Total Points</th>
                                <th>{playerOnPitchChangeSelected === true ? "Select" : ""}</th>
                            </tr>
                            {(filteredClubList.length > 0) && (filteredPositionList.length > 0) ? filteredCombinedMap : filteredPositionList.length > 0 && filteredClubList.length === 0
                                ? filteredPositionListMap : filteredClubList.length > 0 && filteredPositionList.length === 0 ? filteredClubListMap : playerMap}
                    </table>
                </div>
            </div>
        </>
    )
}

export default BuildTeam;