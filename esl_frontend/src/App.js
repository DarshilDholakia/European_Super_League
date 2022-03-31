import React from 'react';
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
  return (
    <div className="App">
      <BrowserRouter>
        <InitialNavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin-hub" element={<AdminHub />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/sign-up" element={<SignupPage />} />
          <Route exact path="/build-team" element={<BuildTeam />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </ div>

  );
}

export default App;
