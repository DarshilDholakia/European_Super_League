import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import AdminHub from './components/AdminHub';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import BuildTeam from './components/BuildTeam';
import Leaderboard from './components/Leaderboard';
import { Route, Link, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import InitialNavBar from './components/InitialNavBar';


function App() {

  const [userList, setUserList] = useState([])
  const [playerList, setPlayerList] = useState([])

  const fetchAllPlayers = () => {
    fetch("http://localhost:8080/player/all")
      .then(response => response.json())
      .then(data => setPlayerList(data))
      .catch((error) => console.error(error));

  }

  useEffect(fetchAllPlayers, [])

  const fetchAllUsers = () => {
    fetch("http://localhost:8080/user/all")
      .then(response => response.json())
      .then(data => setUserList(data))
      .catch((error) => console.error(error));

  }

  useEffect(fetchAllUsers, [])

  //ADD NEW PLAYER 
  const addNewPlayer = (newPlayer) => {
    fetch("http://localhost:8080/player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    })
      .then(() => fetchAllPlayers())
      .catch((error) => console.error(error))
  };

  //ADD NEW USER 

  const addNewUser = (newUser) => {
    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then(() => fetchAllUsers())
      .catch((error) => console.error(error))
  };

  //DELETE PLAYER

  const deletePlayerById = (id) => {
    fetch(`http://localhost:8080/player/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchAllPlayers())
      .catch((error) => console.error(error))
  };

  //DELETE USER

  const deleteUserById = (id) => {
    fetch(`http://localhost:8080/user/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchAllUsers())
      .catch((error) => console.error(error))
  };

  //UPDATE PLAYER BY ID

  const updatePlayerById = (id, updatedPlayer) => {
    fetch(`http://localhost:8080/player/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlayer)
    })
      .then(() => fetchAllPlayers())
      .catch((error) => console.error(error))
  }

  //UPDATE USER BY ID

  const updateUserById = (id, updatedUser) => {
    fetch(`http://localhost:8080/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser)
    })
      .then(() => fetchAllUsers())
      .catch((error) => console.error(error))
  }




  return (
    <div className="App">
      <BrowserRouter>
        <InitialNavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin-hub" element={<AdminHub
            userList={userList}
            playerList={playerList}
            addNewPlayer={addNewPlayer}
            addNewUser={addNewUser}
            deletePlayerById={deletePlayerById}
            deleteUserById={deleteUserById}
            updatePlayerById={updatePlayerById}
            updateUserById={updateUserById}
          />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/sign-up" element={<SignupPage />} />
          <Route exact path="/build-team" element={<BuildTeam
            playerList={playerList}
          />} />
          <Route exact path="/leaderboard" element={<Leaderboard
            userList={userList}
          />} />
        </Routes>
      </BrowserRouter>
    </ div>
  );
}

export default App;