import React, { useEffect, useState } from 'react';

const BuildTeam = () => {

    const [assignmentList, setAssignmentList] = useState([])
    const [playerNameFilter, setPlayerNameFilter] = useState([])
    const [playerPositionFilter, setPlayerPositionFilter] = useState([])
    const [playerClubFilter, setPlayerClubFilter] = useState([])

    const fetchAllAssignments = () => {
        fetch("http://localhost:8080/assignments/all")
            .then(response => response.json())
            .then(data => setAssignmentList(data))
            .catch((error) => console.error(error));

    }

    useEffect(fetchAllAssignments, [])


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

    const fetchPlayerbyName = (name) => {
        fetch(`http://localhost:8080/player/name/${name}`)
        .then((response) => response.json())
        .then(data => setPlayerNameFilter(data))
        .catch((error) => console.error(error))
    }


    const fetchPlayerbyPosition = (player_position) => {
        fetch(`http://localhost:8080/player/position/${player_position}`)
        .then((response) => response.json())
        .then(data => setPlayerPositionFilter(data))
        .catch((error) => console.error(error))
    }

    const fetchPlayerbyClub = (player_club) => {
        fetch(`http://localhost:8080/player/club/${player_club}`)
        .then((response) => response.json())
        .then(data => setPlayerClubFilter(data))
        .catch((error) => console.error(error))
    }
    
        

    
    






    return (
        <>
        <h1>Assemble your squad</h1>
        <div className='Main-container'>
            <div className="pitch-element"> </div>
            <table className='table-element'>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Club</th>
                    <th>Total Points</th>
                    <th>Select</th>
                </tr>
            </table>
    
        </div>
      
        </>
    )

}

export default BuildTeam;