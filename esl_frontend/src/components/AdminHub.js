import React from "react";
import { useState } from "react";

const AdminHub = ({addNewPlayer, deletePlayerById, updatePlayerById}) => {
    
        // ADD PLAYER STATES
        const [addPlayerName, setAddPlayerName] = useState("");
        const [addPlayerPosition, setAddPlayerPosition] = useState("");
        const [addPlayerClub, setAddPlayerClub] = useState("");
        const [addPlayerPrice, setAddPlayerPrice] = useState(0);
        const [addPlayerGoals, setAddPlayerGoals] = useState(0);
        const [addPlayerAssists, setAddPlayerAssists] = useState(0);
        const [addPlayerRed_cards, setAddPlayerRedCards] = useState(0);
        const [addPlayerYellow_cards, setAddPlayerYellowCards] = useState(0);
        const [addPlayerClean_sheets, setAddPlayerCleanSheets] = useState(0);

        // UPDATE PLAYER STATES
        const [updatePlayerId, setUpdatePlayerId] = useState(0);
        const [updatePlayerName, setUpdatePlayerName] = useState("");
        const [updatePlayerPosition, setUpdatePlayerPosition] = useState("");
        const [updatePlayerClub, setUpdatePlayerClub] = useState("");
        const [updatePlayerPrice, setUpdatePlayerPrice] = useState(0);
        const [updatePlayerGoals, setUpdatePlayerGoals] = useState(0);
        const [updatePlayerAssists, setUpdatePlayerAssists] = useState(0);
        const [updatePlayerRed_cards, setUpdatePlayerRedCards] = useState(0);
        const [updatePlayerYellow_cards, setUpdatePlayerYellowCards] = useState(0);
        const [updatePlayerClean_sheets, setUpdatePlayerCleanSheets] = useState(0);

        // DELETE PLAYER STATES
        const [deletePlayerId, setDeletePlayerId] = useState(0);
    
        // ADD PLAYER EVENT HANDLERS
        const handleAddNameChange = event => setAddPlayerName(event.target.value);
        const handleAddPositionChange = event => setAddPlayerPosition(event.target.value);
        const handleAddClubChange = event => setAddPlayerClub(event.target.value);
        const handleAddPriceChange = event => setAddPlayerPrice(event.target.value);
        const handleAddGoalsChange = event => setAddPlayerGoals(event.target.value);
        const handleAddAssistsChange = event => setAddPlayerAssists(event.target.value);
        const handleAddRedCardsChange = event => setAddPlayerRedCards(event.target.value);
        const handleAddYellowCardsChange = event => setAddPlayerYellowCards(event.target.value);
        const handleAddCleanSheetsChange = event => setAddPlayerCleanSheets(event.target.value);

        // UPDATE PLAYER EVENT HANDLERS
        const handleUpdatePlayerIdChange = event => setUpdatePlayerId(event.target.value);
        const handleUpdateNameChange = event => setUpdatePlayerName(event.target.value);
        const handleUpdatePositionChange = event => setUpdatePlayerPosition(event.target.value);
        const handleUpdateClubChange = event => setUpdatePlayerClub(event.target.value);
        const handleUpdatePriceChange = event => setUpdatePlayerPrice(event.target.value);
        const handleUpdateGoalsChange = event => setUpdatePlayerGoals(event.target.value);
        const handleUpdateAssistsChange = event => setUpdatePlayerAssists(event.target.value);
        const handleUpdateRedCardsChange = event => setUpdatePlayerRedCards(event.target.value);
        const handleUpdateYellowCardsChange = event => setUpdatePlayerYellowCards(event.target.value);
        const handleUpdateCleanSheetsChange = event => setUpdatePlayerCleanSheets(event.target.value);

        // DELETE PLAYER EVENT HANDLERS
        const handleDeletePlayerIdChange = event => setDeletePlayerId(event.target.value);


        // ==========ADD PLAYER FUNCTIONALITY==========
        const handleAddPlayerFormSubmit = event => {
            event.preventDefault();
    
            if(!addPlayerName || !addPlayerPosition || !addPlayerClub || !addPlayerPrice || !addPlayerGoals || !addPlayerAssists || !addPlayerRed_cards || !addPlayerYellow_cards || !addPlayerClean_sheets){
                alert("missing information");
            }
    
            const newPlayer = {
                player_name: addPlayerName,
                player_position: addPlayerPosition,
                player_club: addPlayerClub,
                price: addPlayerPrice,
                goals: addPlayerGoals,
                assists: addPlayerAssists,
                red_cards: addPlayerRed_cards,
                yellow_cards: addPlayerYellow_cards,
                clean_sheets: addPlayerClean_sheets
            }
            
            addNewPlayer(newPlayer)
    
            setAddPlayerName("");
            setAddPlayerPosition("");
            setAddPlayerClub("");
            setAddPlayerPrice(0);
            setAddPlayerGoals(0);
            setAddPlayerAssists(0);
            setAddPlayerRedCards(0);
            setAddPlayerYellowCards(0);
            setAddPlayerCleanSheets(0);
        }

        // =========UPDATE PLAYER FUNCTIONALITY============
        const handleUpdatePlayerFormSubmit = event => {
            event.preventDefault();
    
            if(!updatePlayerId || !updatePlayerName || !updatePlayerPosition || !updatePlayerClub || !updatePlayerPrice || !updatePlayerGoals || !updatePlayerAssists || !updatePlayerRed_cards || !updatePlayerYellow_cards || !updatePlayerClean_sheets){
                alert("missing information");
            }
    
            const updatedPlayer = {
                player_name: updatePlayerName,
                player_position: updatePlayerPosition,
                player_club: updatePlayerClub,
                price: updatePlayerPrice,
                goals: updatePlayerGoals,
                assists: updatePlayerAssists,
                red_cards: updatePlayerRed_cards,
                yellow_cards: updatePlayerYellow_cards,
                clean_sheets: updatePlayerClean_sheets
            }
            
            updatePlayerById(updatePlayerId, updatedPlayer)
    
            setUpdatePlayerId(0);
            setUpdatePlayerName("");
            setUpdatePlayerPosition("");
            setUpdatePlayerClub("");
            setUpdatePlayerPrice(0);
            setUpdatePlayerGoals(0);
            setUpdatePlayerAssists(0);
            setUpdatePlayerRedCards(0);
            setUpdatePlayerYellowCards(0);
            setUpdatePlayerCleanSheets(0);
        }

        // =========DELETE PLAYER FUNCTIONALITY============
        const handleDeletePlayerFormSubmit = event => {
            event.preventDefault();
    
            if(!deletePlayerId){
                alert("missing information");
            }

            deletePlayerById(deletePlayerId)

            setDeletePlayerId(0);
        }

    return(
        <div className="admin-page-container">
            {/* ADD PLAYER FORM */}
            <div className="add-player-container">
                <h3>Add player to database:</h3>
                <form onSubmit={handleAddPlayerFormSubmit} className="admin-player-forms">
                    <label htmlFor="name">Name:</label>
                    <input className="admin-form-field" type="text" id="name" value={addPlayerName} onChange={handleAddNameChange}/>

                    <label htmlFor="position">Position:</label>
                    <input className="admin-form-field" type="text" id="position" value={addPlayerPosition} onChange={handleAddPositionChange}/>

                    <label htmlFor="club">Club:</label>
                    <input className="admin-form-field" type="text" id="club" value={addPlayerClub} onChange={handleAddClubChange}/>

                    <label htmlFor="price">Price:</label>
                    <input className="admin-form-field" type="number" id="price" value={addPlayerPrice} onChange={handleAddPriceChange}/>

                    <label htmlFor="goals">Goals:</label>
                    <input className="admin-form-field" type="number" id="goals" value={addPlayerGoals} onChange={handleAddGoalsChange}/>

                    <label htmlFor="assists">Assists:</label>
                    <input className="admin-form-field" type="number" id="assists" value={addPlayerAssists} onChange={handleAddAssistsChange}/>

                    <label htmlFor="red_cards">Red Cards:</label>
                    <input className="admin-form-field" type="number" id="red_cards" value={addPlayerRed_cards} onChange={handleAddRedCardsChange}/>

                    <label htmlFor="yellow_cards">Yellow Cards:</label>
                    <input className="admin-form-field" type="number" id="yellow_cards" value={addPlayerYellow_cards} onChange={handleAddYellowCardsChange}/>

                    <label htmlFor="clean_sheets">Clean Sheets:</label>
                    <input className="admin-form-field" type="number" id="clean_sheets" value={addPlayerClean_sheets} onChange={handleAddCleanSheetsChange}/>

                    <input type="submit" value="Submit New Player"/>
                </form>
            </div>
            


            {/* UPDATE PLAYER FORM */}
            <div className= "update-player-container">
                <h3>Update existing player:</h3>
                <form onSubmit={handleUpdatePlayerFormSubmit} className="admin-player-forms">
                <label htmlFor="id">id:</label>
                <input className="admin-form-field" type="number" id="id" value={updatePlayerId} onChange={handleUpdatePlayerIdChange}/>
                
                <label htmlFor="name">Name:</label>
                <input className="admin-form-field" type="text" id="name" value={updatePlayerName} onChange={handleUpdateNameChange}/>

                <label htmlFor="position">Position:</label>
                <input className="admin-form-field" type="text" id="position" value={updatePlayerPosition} onChange={handleUpdatePositionChange}/>

                <label htmlFor="club">Club:</label>
                <input className="admin-form-field" type="text" id="club" value={updatePlayerClub} onChange={handleUpdateClubChange}/>

                <label htmlFor="price">Price:</label>
                <input className="admin-form-field" type="number" id="price" value={updatePlayerPrice} onChange={handleUpdatePriceChange}/>

                <label htmlFor="goals">Goals:</label>
                <input className="admin-form-field" type="number" id="goals" value={updatePlayerGoals} onChange={handleUpdateGoalsChange}/>

                <label htmlFor="assists">Assists:</label>
                <input className="admin-form-field" type="number" id="assists" value={updatePlayerAssists} onChange={handleUpdateAssistsChange}/>

                <label htmlFor="red_cards">Red Cards:</label>
                <input className="admin-form-field" type="number" id="red_cards" value={updatePlayerRed_cards} onChange={handleUpdateRedCardsChange}/>

                <label htmlFor="yellow_cards">Yellow Cards:</label>
                <input className="admin-form-field" type="number" id="yellow_cards" value={updatePlayerYellow_cards} onChange={handleUpdateYellowCardsChange}/>

                <label htmlFor="clean_sheets">Clean Sheets:</label>
                <input className="admin-form-field" type="number" id="clean_sheets" value={updatePlayerClean_sheets} onChange={handleUpdateCleanSheetsChange}/>

                <input type="submit" value="Update Player"/>
                </form>

            </div>
            
            {/* DELETE PLAYER FORM */}
            <div className="delete-player-container">
                <h3>Delete player:</h3>
                <form onSubmit={handleDeletePlayerFormSubmit} className="admin-player-forms">

                <label htmlFor="id">id:</label>
                <input className="admin-form-field" type="number" id="id" value={deletePlayerId} onChange={handleDeletePlayerIdChange}/>

                <input type="submit" value="Delete Player"/>
                </form>
            </div>
        </div>
        
    )
}

export default AdminHub;