import React from 'react';
import './Card.css'


const Search = ({searchChange}) => {
  return(
    <div>
    <input className="search pa3 ba bg-light-green "  type="search" placeholder="Search For Desired Place"
     onChange={searchChange} />  
    </div>
    )

}

export default Search;