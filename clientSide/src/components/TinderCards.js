import React, { useContext, useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from '../axios';
import AuthContext from '../auth/authContext';
import { Link } from 'react-router-dom';

const TinderCards = () => {
    const [people, setPeople ] = useState([])
    const { user } = useContext(AuthContext);
    useEffect(()=>{
     async function fetchData(){
       const req = await axios.get("/tinder/card");
       setPeople(req.data);
     }
     fetchData();
     console.log(user.i.u);
    },[])
    console.log(people);
    const swiped = (direction, nameToDelete)=>{
      console.log("removing" + nameToDelete);
    }
    const outOfFrame = (name)=>{
      console.log(name + " left the screen")
    }
    return (
    <div className="tinder-card">
         <div className="card-container">
         {people.map(person =>{
           return(
             <TinderCard
             className="swipe"
             key={person.name}
             preventSwipe={["up","down"]}
             onSwipe={(dir)=> swiped(dir, person.name)}
             onCardLeftScreen={()=> outOfFrame(person.name)}
             >
              
              <div className="card" style={{ backgroundImage: "url(" + person.url + ")"}}>
                 <Link to={`/card/name#${person.name}`}><h3>{person.name}</h3></Link> 
              </div>
              
             </TinderCard>
           )
          })}
        </div>
    </div>
    )
}

export default TinderCards
