import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Home.js';
import History from './History.js';
import Character from './Character.js';
import Profiles from './Profiles.js'
import Map from './Map.js'

import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {

  const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
      fetch("/api").then(
        res => res.json()
      ).then(
        data => setCharacters(data)
      ).then(
        console.log(characters)
      )
    }, [])

  return (
    <div>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Navigate to="/profiles" />} />
          <Route path="/profiles" element={<Profiles characters={characters} />} />
          <Route path="/map" element={<Map characters={characters} />} />
        </Route>
        <Route path="/character/:id" element={<Character />} />
        <Route path="/character/:char_id/history" element={<History />} />
      </Routes>
    </div>
  );
}
