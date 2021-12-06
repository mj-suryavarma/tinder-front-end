import React,{useState,useEffect} from 'react'
import './tinder-cards.css'
import TinderCard from 'react-tinder-card';
import axios from './axios';
 
function TinderCards() {


    const [people, setPeople] = useState([])


  useEffect(() => {
      async function fetchData() {
          try{ await axios.get("/tinder/cards")
            .then(res => setPeople(res.data))
            .catch(err => console.log(err))

        }
        catch (err){
            console.log(err)
        }
      }
   
      fetchData();
  },[])


    const swiped = (direction, nameToDelete) => {
            console.log("removing " + nameToDelete);
            // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="TinderCards"> 
        <div className="tinderCards_cardContainer">
            {people.map((person) => (
                    <TinderCard 
                    className="swipe"
                    key={person._id}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                       <div style={{backgroundImage :`url(${person.imgUrl})`}}
                       className="card"  >
                           <h3>{person.name}</h3>
                           </div>   
                    </TinderCard>
            ))}
                    </div>
        </div>
    )

}
 export default TinderCards
