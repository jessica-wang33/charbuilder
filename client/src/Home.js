import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, Outlet } from 'react-router-dom';

function Home(){
    const [profilesMode, setProfilesMode] = useState(true);

    var profileStyle = {'background-color' : profilesMode? 'blue' : 'red'};
  var mapStyle = {'background-color' : profilesMode? 'red' : 'blue'};

  function toggleMode(val){
    setProfilesMode(prevMode => val);
  }

  return (
    <div className="container-fluid vh-100 d-flex flex-column text-center py-3 px-5">
      <h1 className="mb-5">Profile Grid App</h1>
      <div className="mb-5 rounded-1 d-flex mx-auto toggle gap-3 justify-content-center">
      <div className = "p-1" style = {profileStyle} onClick = {() => toggleMode(true)}>
        <NavLink to="/profiles" style={{ display: "block", width: "100%", height: "100%" }}>Character Profiles</NavLink>
      </div>
      <div className = "p-1" style = {mapStyle} onClick = {() => toggleMode(false)}>
        <NavLink to="/map" style={{ display: "block", width: "100%", height: "100%" }}>Character Map</NavLink>
      </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Home;