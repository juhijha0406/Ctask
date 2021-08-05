import React from 'react';
import Card from './Card';
import './Card.css';



const CardList = ({place}) => {
  return (
     
    <div>
     {place.map((places,i) => {
        return <Card id={places.id} name={places.name} placeAddress={places.placeAddress} key={i}
        placeLocation = {places.placeLocation}
        placeOpeningHours = {places.placeOpeningHours}
        />
      })
      }
      
    </div>
   
  )
}


export default CardList;