import React, { useEffect, useState } from 'react';

const BuildTeam = () => {

    const [assignmentList, setAssignmentList] = useState([])

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






    return (
        <h1>Assemble your squad</h1>
    )

}

export default BuildTeam;