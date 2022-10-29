/*
SODV 2201 Group 3 Term Project -- BVC Day Timer App 
Designed and programmed by    :   Candace Arriola and Paul K Kho
Course                        :   SOVD 2201 Web Programming Section 1 Group 3
Instructor                    :   Tigist B
Due                           :   December 14th 2022

*/
// Main Navigation Bar 

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
 state = { };
  render() { 
    return ( 
  <div className= "Link">
    <Link to= "/"> <button>  Welcome  </button> </Link>
    <Link to="/RegistrationPage"> <button>  Sign Up  </button> </Link>
    <Link to="/LogInPage" > <button>  Log In  </button> </Link>
    <Link to="/SchoolSchedule">  <button> School Schedule </button> </Link>   
    <Link to="/WorkSchedule">   <button> Work Schedule </button> </Link>
    <Link to="/FreeTimeSchedule">  <button> Free Time Schedule </button> </Link> 
    <Link to="/Feedback">  <button> Feedback </button> </Link>
    </div>
    
      );
  
  }
}
 
export default NavBar;
