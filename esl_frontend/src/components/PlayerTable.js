import React from 'react';

const PlayerTable = (playerList) => {

    const player = playerList.map((player, index) => {
        return(
            <li key={index}>{player}</li>
        )
      });
    
      return (
        <div className="film-container">
          <h2>{film.title}</h2>
          <h3>{film.duration}</h3>
          <h3>{film.rating}</h3>
          <h3>{cast}</h3>
          <h3>{film.director.name}</h3>
        </div>
      );

    return(
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
    )
}


export default PlayerTable;