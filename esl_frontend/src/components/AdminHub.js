import React from "react";
import { useState } from "react";

const AdminHub = ({addNewPlayer, deletePlayerById, updatePlayerById}) => {
    
        const [name, setName] = useState("");
        const [position, setPosition] = useState("");
        const [club, setClub] = useState("");
        const [price, setPrice] = useState(0);
        const [goals, setGoals] = useState(0);
        const [assists, setAssists] = useState(0);
        const [red_cards, setRedCards] = useState(0);
        const [yellow_cards, setYellowCards] = useState(0);
        const [clean_sheets, setCleanSheets] = useState(0);
    
        const handleNameChange = event => setName(event.target.value);
    
        const handlePositionChange = event => setPosition(event.target.value);
    
        const handleClubChange = event => setClub(event.target.value);
    
        const handlePriceChange = event => setPrice(event.target.value);

        const handleGoalsChange = event => setGoals(event.target.value);

        const handleAssistsChange = event => setAssists(event.target.value);

        const handleRedCardsChange = event => setRedCards(event.target.value);

        const handleYellowCardsChange = event => setYellowCards(event.target.value);
    
        const handleCleanSheetsChange = event => setCleanSheets(event.target.value);

        const handleFormSubmit = event => {
            event.preventDefault();
    
            if(!name || !position || !club || !price || !goals || !assists || !red_cards || !yellow_cards || !clean_sheets){
                alert("missing information");
            }
    
            const newPlayer = {
                name: name,
                position: position,
                club: club,
                price: price,
                goals: goals,
                assists: assists,
                red_cards: red_cards,
                yellow_cards: yellow_cards,
                clean_sheets: clean_sheets
            }
            
            addNewPlayer(newPlayer)
    
            setName("");
            setPosition("");
            setClub("");
            setPrice("");
            setGoals("");
            setAssists("");
            setRedCards("");
            setYellowCards("");
            setCleanSheets("");
        }

    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange}/>

            <label htmlFor="position">Position:</label>
            <input type="text" id="position" value={position} onChange={handlePositionChange}/>

            <label htmlFor="club">Club:</label>
            <input type="text" id="club" value={club} onChange={handleClubChange}/>

            <label htmlFor="price">Price:</label>
            <input type="number" id="price" value={price} onChange={handlePriceChange}/>

            <label htmlFor="goals">Goals:</label>
            <input type="number" id="goals" value={goals} onChange={handleGoalsChange}/>

            <label htmlFor="assists">Assists:</label>
            <input type="number" id="assists" value={assists} onChange={handleAssistsChange}/>

            <label htmlFor="red_cards">Red Cards:</label>
            <input type="number" id="red_cards" value={red_cards} onChange={handleRedCardsChange}/>

            <label htmlFor="yellow_cards">Yellow Cards:</label>
            <input type="number" id="yellow_cards" value={yellow_cards} onChange={handleYellowCardsChange}/>

            <label htmlFor="clean_sheets">Clean Sheets:</label>
            <input type="number" id="clean_sheets" value={clean_sheets} onChange={handleCleanSheetsChange}/>

            <input type="submit" value="Submit New Player"/>
        </form> 
    )
}

export default AdminHub;