import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios';
import Header from './Header';
import './Component.css';

const Profile = (props) => {
    const location = useLocation();
    const data = location.hash.toString().slice(1)
    const [ profile, setProfile ] = useState({});
    useEffect(()=>{
     axios.get(`http://localhost:5000/tinder/card/${data}`)
     .then(res => {
         setProfile(res.data);
         console.log(res.data.address);
     }).catch(err=> console.log(err));
    },[])
    return (
       <>
       <Header />
       <div className="profile-container">
         <div className="profile-grid">
          <h1>{profile.name}</h1>
          <img src={profile.url} alt="" className="profile-img" />
          <div className="profile-list">
           <h1></h1> 
          </div>
         </div>
       </div>
       <footer className="profile-footer">
        
       </footer>
       </>

    )
}

export default Profile
