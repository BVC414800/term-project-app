// Main Navigation Bar 

/*
    SODV 2201 Web Programming Assignment 2 
      Displaying data from backend (server) to the frontend (client) with React JS.
      This program is designed and coded by SODV 2201 Section 1 Group 3.
      Design and coding by :  Candace Arriola and Paul Kho
      Instructor           :   Tigis Beshe
      Due                  :   November 30 2022  
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
 state = { };
  render() { 
    return ( 
  <nav>
    <Link to= "/"> <button>  Home  </button> </Link>
    <Link to="./aboutUs"> <button> About Us </button>  </Link> 
    <Link to="./signupPage"> <button>  Sign Up  </button> </Link>
    <Link to="./loginPage" > <button>  Log In  </button> </Link>
    <Link to="./subpages/schoolSchedule">  <button> School Schedule </button> </Link>   
    <Link to="./subpages/workSchedule">   <button> Work Schedule </button> </Link>
    <Link to="./subpages/freetimeSchedule">  <button> Free Time Schedule </button> </Link> 
    <Link to="./contactPage">  <button> Contact Us </button> </Link>
  </nav>
    
    );
  
  }
}
 
export default NavBar;
