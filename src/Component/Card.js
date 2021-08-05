import React from 'react';
import './Card.css';
import tachyons from 'tachyons';

const Card = ({name,placeAddress,id,placeOpeningHours,placeLocation}) => {
  return(
    <div className='cardd tc bg-light-green dib br3 pa3 grow ma2 shadow-2'>
      <div className="card_sty">
      <h2 className="sty">{name}</h2>                                               
        <p className="sty1">Place Address : {placeAddress}</p>
        <h4 className="sty2">Place Location : {placeLocation}</h4>
         <h5 className="sty2">Opening Timing : {placeOpeningHours}</h5>
         <button className="button">Save</button>
    </div>
    </div>
  )
}


export default Card;