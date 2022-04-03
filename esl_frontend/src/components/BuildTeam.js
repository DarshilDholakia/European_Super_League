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

    const {user} = useContext(UserContext);

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
        if (club==="UNITED") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: unitedKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: unitedKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: unitedKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: unitedKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: unitedKit})
            }
            
        } else if (club==="PSG") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: psgKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: psgKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: psgKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: psgKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: psgKit})
            }

        } else if (club==="LIVERPOOL") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: liverpoolKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: liverpoolKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: liverpoolKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: liverpoolKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: liverpoolKit})
            }

        } else if (club==="REAL_MADRID") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: real_madridKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: real_madridKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: real_madridKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: real_madridKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: real_madridKit})
            }

        } else if (club==="JUVENTUS") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: juventusKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: juventusKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: juventusKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: juventusKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: juventusKit})
            }

        } else if (club==="CITY") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: cityKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: cityKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: cityKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: cityKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: cityKit})
            } 

        } else if (club==="INTER") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: interKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: interKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: interKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: interKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: interKit})
            } 

        } else if (club==="WEST_HAM") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: west_hamKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: west_hamKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: west_hamKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: west_hamKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: west_hamKit})
            } 

        } else if (club==="MILAN") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: milanKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: milanKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: milanKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: milanKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: milanKit})
            } 

        } else if (club==="ARSENAL") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: arsenalKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: arsenalKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: arsenalKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: arsenalKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: arsenalKit})
            } 

        } else if (club==="BARCELONA") {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: barcelonaKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: barcelonaKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: barcelonaKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: barcelonaKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: barcelonaKit})
            } 

        } else {
            if (forwardState.selected) {
                setForwardState({selected: true, kit: atleticoKit})
            } else if (midfielder1State.selected) {
                setMidfielder1State({selected: true, kit: atleticoKit})
            } else if (midfielder2State.selected) {
                setMidfielder2State({selected: true, kit: atleticoKit})
            } else if (defenderState.selected) {
                setDefenderState({selected: true, kit: atleticoKit})
            } else if (goalkeeperState.selected) {
                setGoalkeeperState({selected: true, kit: atleticoKit})
            } 
        }
    }

    const filteredPositionListMap = filteredPositionList.map(filteredPlayer => {
        return (
            <Player handlePlayerSelect={handlePlayerSelect} player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const filteredClubListMap = filteredClubList.map(filteredPlayer => {
        return (
            <Player handlePlayerSelect={handlePlayerSelect} player={filteredPlayer} key={filteredPlayer.id} />
        )
    })

    const playerMap = playerList.map(player => {
        return (
            <Player handlePlayerSelect={handlePlayerSelect} player={player} key={player.id} />
        )
    });

    const filteredCombinedMap = filteredClubList.map(clubPlayer => {
        for (let i = 0; i < filteredPositionList.length; i++) {
            if (clubPlayer.id === filteredPositionList[i].id) {
                return <Player handlePlayerSelect={handlePlayerSelect()} player={clubPlayer} key={clubPlayer.id} />
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

    const findUserPlayers = () => {
        for (let i = 0; i < userAssignmentList.length; i++) {
            if (userAssignmentList[i].player_position === "GOALKEEPER") {
                if (userAssignmentList[i].player_club==="UNITED") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: unitedKit})
                    
                } else if (userAssignmentList[i].player_club==="PSG") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: psgKit})
        
                } else if (userAssignmentList[i].player_club==="LIVERPOOL") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: liverpoolKit})
        
                } else if (userAssignmentList[i].player_club==="REAL_MADRID") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: real_madridKit})
        
                } else if (userAssignmentList[i].player_club==="JUVENTUS") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: juventusKit})
        
                } else if (userAssignmentList[i].player_club==="CITY") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: cityKit})
        
                } else if (userAssignmentList[i].player_club==="INTER") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: interKit})
        
                } else if (userAssignmentList[i].player_club==="WEST_HAM") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: west_hamKit})
        
                } else if (userAssignmentList[i].player_club==="MILAN") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: milanKit})
        
                } else if (userAssignmentList[i].player_club==="ARSENAL") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: arsenalKit})
        
                } else if (userAssignmentList[i].player_club==="BARCELONA") {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: barcelonaKit})
        
                } else {
                    setGoalkeeperState({selected: goalkeeperState.selected, kit: atleticoKit})
                }
                
            } else if (userAssignmentList[i].player_position === "DEFENDER") {
                if (userAssignmentList[i].player_club==="UNITED") {
                    setDefenderState({selected: defenderState.selected, kit: unitedKit})
                    
                } else if (userAssignmentList[i].player_club==="PSG") {
                    setDefenderState({selected: defenderState.selected, kit: psgKit})
        
                } else if (userAssignmentList[i].player_club==="LIVERPOOL") {
                    setDefenderState({selected: defenderState.selected, kit: liverpoolKit})
        
                } else if (userAssignmentList[i].player_club==="REAL_MADRID") {
                    setDefenderState({selected: defenderState.selected, kit: real_madridKit})
        
                } else if (userAssignmentList[i].player_club==="JUVENTUS") {
                    setDefenderState({selected: defenderState.selected, kit: juventusKit})
        
                } else if (userAssignmentList[i].player_club==="CITY") {
                    setDefenderState({selected: defenderState.selected, kit: cityKit})
        
                } else if (userAssignmentList[i].player_club==="INTER") {
                    setDefenderState({selected: defenderState.selected, kit: interKit})
        
                } else if (userAssignmentList[i].player_club==="WEST_HAM") {
                    setDefenderState({selected: defenderState.selected, kit: west_hamKit})
        
                } else if (userAssignmentList[i].player_club==="MILAN") {
                    setDefenderState({selected: defenderState.selected, kit: milanKit})
        
                } else if (userAssignmentList[i].player_club==="ARSENAL") {
                    setDefenderState({selected: defenderState.selected, kit: arsenalKit})
        
                } else if (userAssignmentList[i].player_club==="BARCELONA") {
                    setDefenderState({selected: defenderState.selected, kit: barcelonaKit})
        
                } else {
                    setDefenderState({selected: defenderState.selected, kit: atleticoKit})
                }
                
            } else if (userAssignmentList[i].player_position === "MIDFIELDER") {
                if (midfielder1State.kit === nonSelectedPlayer) {
                    if (userAssignmentList[i].player_club==="UNITED") {
                    setMidfielder1State({selected: defenderState.selected, kit: unitedKit})
                } else if (userAssignmentList[i].player_club==="PSG") {
                    setMidfielder1State({selected: defenderState.selected, kit: psgKit})
                } else if (userAssignmentList[i].player_club==="LIVERPOOL") {
                    setMidfielder1State({selected: defenderState.selected, kit: liverpoolKit})
                } else if (userAssignmentList[i].player_club==="REAL_MADRID") {
                    setMidfielder1State({selected: defenderState.selected, kit: real_madridKit})
                } else if (userAssignmentList[i].player_club==="JUVENTUS") {
                    setMidfielder1State({selected: defenderState.selected, kit: juventusKit})
                } else if (userAssignmentList[i].player_club==="CITY") {
                    setMidfielder1State({selected: defenderState.selected, kit: cityKit})
                } else if (userAssignmentList[i].player_club==="INTER") {
                    setMidfielder1State({selected: defenderState.selected, kit: interKit})
                } else if (userAssignmentList[i].player_club==="WEST_HAM") {
                    setMidfielder1State({selected: defenderState.selected, kit: west_hamKit})
                } else if (userAssignmentList[i].player_club==="MILAN") {
                    setMidfielder1State({selected: defenderState.selected, kit: milanKit})
                } else if (userAssignmentList[i].player_club==="ARSENAL") {
                    setMidfielder1State({selected: defenderState.selected, kit: arsenalKit})
                } else if (userAssignmentList[i].player_club==="BARCELONA") {
                    setMidfielder1State({selected: defenderState.selected, kit: barcelonaKit})
                } else {
                    setMidfielder1State({selected: defenderState.selected, kit: atleticoKit})
                }
                } else {
                    if (userAssignmentList[i].player_club==="UNITED") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: unitedKit})
                    } else if (userAssignmentList[i].player_club==="PSG") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: psgKit})
                    } else if (userAssignmentList[i].player_club==="LIVERPOOL") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: liverpoolKit})
                    } else if (userAssignmentList[i].player_club==="REAL_MADRID") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: real_madridKit})
                    } else if (userAssignmentList[i].player_club==="JUVENTUS") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: juventusKit})
                    } else if (userAssignmentList[i].player_club==="CITY") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: cityKit})
                    } else if (userAssignmentList[i].player_club==="INTER") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: interKit})
                    } else if (userAssignmentList[i].player_club==="WEST_HAM") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: west_hamKit})
                    } else if (userAssignmentList[i].player_club==="MILAN") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: milanKit})
                    } else if (userAssignmentList[i].player_club==="ARSENAL") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: arsenalKit})
                    } else if (userAssignmentList[i].player_club==="BARCELONA") {
                        setMidfielder2State({selected: midfielder2State.selected, kit: barcelonaKit})
                    } else {
                        setMidfielder2State({selected: midfielder2State.selected, kit: atleticoKit})
                    }
                }
                
                
            } else if (userAssignmentList[i].player_position === "FORWARD") {
                if (userAssignmentList[i].player_club==="UNITED") {
                    setForwardState({selected: forwardState.selected, kit: unitedKit})
                    
                } else if (userAssignmentList[i].player_club==="PSG") {
                    setForwardState({selected: forwardState.selected, kit: psgKit})
        
                } else if (userAssignmentList[i].player_club==="LIVERPOOL") {
                    setForwardState({selected: forwardState.selected, kit: liverpoolKit})
        
                } else if (userAssignmentList[i].player_club==="REAL_MADRID") {
                    setForwardState({selected: forwardState.selected, kit: real_madridKit})
        
                } else if (userAssignmentList[i].player_club==="JUVENTUS") {
                    setForwardState({selected: forwardState.selected, kit: juventusKit})
        
                } else if (userAssignmentList[i].player_club==="CITY") {
                    setForwardState({selected: forwardState.selected, kit: cityKit})
        
                } else if (userAssignmentList[i].player_club==="INTER") {
                    setForwardState({selected: forwardState.selected, kit: interKit})
        
                } else if (userAssignmentList[i].player_club==="WEST_HAM") {
                    setForwardState({selected: forwardState.selected, kit: west_hamKit})
        
                } else if (userAssignmentList[i].player_club==="MILAN") {
                    setForwardState({selected: forwardState.selected, kit: milanKit})
        
                } else if (userAssignmentList[i].player_club==="ARSENAL") {
                    setForwardState({selected: forwardState.selected, kit: arsenalKit})
        
                } else if (userAssignmentList[i].player_club==="BARCELONA") {
                    setForwardState({selected: forwardState.selected, kit: barcelonaKit})
        
                } else {
                    setForwardState({selected: forwardState.selected, kit: atleticoKit})
                }
                
            }
            
        }
    }
    useEffect(findUserPlayers, [userAssignmentList])

    // delete this to restore to this stage
    const [forwardState, setForwardState] = useState({selected: false, kit: nonSelectedPlayer});
    const [midfielder1State, setMidfielder1State] = useState({selected: false, kit: nonSelectedPlayer});
    const [midfielder2State, setMidfielder2State] = useState({selected: false, kit: nonSelectedPlayer});
    const [defenderState, setDefenderState] = useState({selected: false, kit: nonSelectedPlayer});
    const [goalkeeperState, setGoalkeeperState] = useState({selected: false, kit: nonSelectedPlayer});

    const manageForward = () => {
        if (forwardState.selected == false) {
            fetchPlayerByPosition("FORWARD");
            setForwardState({selected: true, kit: forwardState.kit});
            setMidfielder1State({selected: false, kit: midfielder1State.kit});
            setMidfielder2State({selected: false, kit: midfielder2State.kit});
            setDefenderState({selected: false, kit: defenderState.kit});
            setGoalkeeperState({selected: false, kit: goalkeeperState.kit});
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setForwardState({selected: false, kit: nonSelectedPlayer});
        }
    }

    const manageMidfielder1 = () => {
        if (midfielder1State.selected == false) {
            fetchPlayerByPosition("MIDFIELDER");
            setMidfielder1State({selected: true, kit: midfielder1State.kit});
            setForwardState({selected: false, kit: forwardState.kit});
            setMidfielder2State({selected: false, kit: midfielder2State.kit});
            setDefenderState({selected: false, kit: defenderState.kit});
            setGoalkeeperState({selected: false, kit: goalkeeperState.kit});
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder1State({selected: false, kit: nonSelectedPlayer});
        }
    }

    const manageMidfielder2 = () => {
        if (midfielder2State.selected == false) {
            fetchPlayerByPosition("MIDFIELDER");
            setMidfielder2State({selected: true, kit: midfielder2State.kit});
            setForwardState({selected: false, kit: forwardState.kit});
            setMidfielder1State({selected: false, kit: midfielder1State.kit});
            setDefenderState({selected: false, kit: defenderState.kit});
            setGoalkeeperState({selected: false, kit: goalkeeperState.kit});
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setMidfielder2State({selected: false, kit: nonSelectedPlayer});
        }
    }

    const manageDefender = () => {
        if (defenderState.selected == false) {
            fetchPlayerByPosition("DEFENDER");
            setDefenderState({selected: true, kit: defenderState.kit});
            setForwardState({selected: false, kit: forwardState.kit});
            setMidfielder1State({selected: false, kit: midfielder1State.kit});
            setMidfielder2State({selected: false, kit: midfielder2State.kit});
            setGoalkeeperState({selected: false, kit: goalkeeperState.kit});
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setDefenderState({selected: false, kit: nonSelectedPlayer});
        }
    }

    const manageGoalkeeper = () => {
        if (goalkeeperState.selected == false) {
            fetchPlayerByPosition("GOALKEEPER");
            setGoalkeeperState({selected: true, kit: goalkeeperState.kit});
            setForwardState({selected: false, kit: forwardState.kit});
            setMidfielder1State({selected: false, kit: midfielder1State.kit});
            setMidfielder2State({selected: false, kit: midfielder2State.kit});
            setDefenderState({selected: false, kit: defenderState.kit});
        } else {
            setFilteredPositionList([]);
            setFilteredClubList([])
            setGoalkeeperState({selected: false, kit: nonSelectedPlayer});
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