import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Profiles from './Profiles.js';
import Map from './Map.js';
import Character from './Character.js';

function App(){

  const [characters, setCharacters] = useState([]);
  const [profilesMode, setProfilesMode] = useState(true);

  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => setCharacters(data)
    ).then(
      console.log(characters)
    )
  }, [])

  var profileStyle = {'background-color' : profilesMode? 'blue' : 'red'};
  var mapStyle = {'background-color' : profilesMode? 'red' : 'blue'};

  function toggleMode(val){
    setProfilesMode(prevMode => val);
  }

  return (
    <div className="container-fluid vh-100 d-flex flex-column text-center py-3 px-5">
      {character.name? <Character {...character} /> : 
      <>
      <h1 className="mb-5">Profile Grid App</h1>
      <div className="mb-5 rounded-1 d-flex mx-auto toggle gap-3 justify-content-center">
        <div className = "p-1" style = {profileStyle} onClick = {() => toggleMode(true)}>Character Profiles</div>
        <div className = "p-1" style = {mapStyle} onClick = {() => toggleMode(false)}>Character Map</div>
      </div>
      {
        profilesMode? <Profiles characters = {characters} setCharacterFn = {setCharacter}/> : 
        <Map characters = {characters} />
      }
      </>
      }
    </div>
  )
}

export default App;
