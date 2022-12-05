// Main Landing Page 

/*
    SODV 2201 Web Programming Term Project
      Displaying data from backend (server) to the frontend (client) with React JS.
      This program is designed and coded by SODV 2201 Section 1 Group 3.
      Design and coding by :  Candace Arriola and Paul Kho
      Instructor           :   Tigis Beshe
      Due                  :   December 12 2022  
*/

import React, { Component } from 'react';
// import { useState } from 'react';
class Home extends Component {
  useState ={};
  render() {
    return  (
      <div className="spotlight">
      <h1> BVC Day Timer App  </h1>
     <p> This is your main entry point into our App. It is designed for users to enter their schedules. 
     Each schedule is divided into three main sections. School scheldule,
     work schedule and free time schedule.  Each schedule is linked to customized 
     database. Each database has customized settings the user can personalized to 
     their specific needs. Both client and server ports must be active for this app to function correctly.
      </p>
   
        
  </div>
    )  
  };
}


export default Home;


