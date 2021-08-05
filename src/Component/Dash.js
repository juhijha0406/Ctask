import React,{Component} from 'react';
import CardList from './CardList';
import Search from './Search';
import {place} from './Place';
import fire from '../fire';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Places from '../pages/Places';
import Profile from '../pages/Profile';
import './Navbar.css';

class Dash extends Component {
    constructor(){
        super();
        this.state = {
          place : place,
          searchfield : '',
        }
    }
    
      onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
      }
    
      
     handlelogout = ()=>{
        fire.auth().signOut();
    };

     
    
      render(){
    
        const filteredPlace = this.state.place.filter((places) => {
          return places.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    
        return(
          <div>
           <section className="hero">
           <nav >
               <Router>
                <Navbar />
                </Router>
        <h1  onChange={this.onChange}>Welcome</h1>
       <button onClick={this.handlelogout}>Logout</button>
        </nav> 
        <Search searchChange = {this.onSearchChange}/>
        <div>
        <CardList place={filteredPlace}/>
      </div>
      </section>
     </div> 
        )
      }
    
}
export default Dash;

