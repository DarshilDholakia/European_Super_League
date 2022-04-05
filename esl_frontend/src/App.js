import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import AdminHub from './components/AdminHub';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import BuildTeam from './components/BuildTeam';
import Leaderboard from './components/Leaderboard';
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import InitialNavBar from './components/InitialNavBar';
import UserNavBar from './components/UserNavBar'
import AdminNavBar from './components/AdminNavBar';
import { UserContext } from './components/UserContext';
import FooterBar from './components/FooterBar';


function App() {

  const [userList, setUserList] = useState([])
  const [playerList, setPlayerList] = useState([])
  const { user,admin } = useContext(UserContext);

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

  // ADD NEW PLAYER 
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

  // ADD NEW USER 

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

  // DELETE PLAYER

  const deletePlayerById = (id) => {
    fetch(`http://localhost:8080/player/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchAllPlayers())
      .catch((error) => console.error(error))
  };

  // DELETE USER

  const deleteUserById = (id) => {
    fetch(`http://localhost:8080/user/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchAllUsers())
      .catch((error) => console.error(error))
  };

  // UPDATE PLAYER BY ID

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

  // UPDATE USER BY ID

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
        {user.auth ? <UserNavBar /> : admin.auth ? <AdminNavBar /> : <InitialNavBar />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin-hub" element={admin.auth ? <AdminHub
            userList={userList}
            playerList={playerList}
            addNewPlayer={addNewPlayer}
            addNewUser={addNewUser}
            deletePlayerById={deletePlayerById}
            deleteUserById={deleteUserById}
            updatePlayerById={updatePlayerById}
            updateUserById={updateUserById}
          /> : <Navigate replace to="/" />} />
          <Route exact path="/login" element={user.auth ? <Navigate replace to="/build-team" /> : admin.auth ? <Navigate replace to="/admin-hub" /> : <LoginPage userList={userList} />} />
    
          <Route exact path="/sign-up" element={user.auth ? <BuildTeam/> : <SignupPage userList={userList} addNewUser={addNewUser} />}/>
          <Route exact path="/build-team" element={user.auth ? <BuildTeam playerList={playerList} /> : <Navigate replace to="/" />} />
          <Route exact path="/leaderboard" element={user.auth ? <Leaderboard userList={userList}/> : <Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
      <FooterBar />
    </ div>
  );
}

export default App;