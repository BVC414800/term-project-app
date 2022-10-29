/*
SODV 2201 Group 3 Term Project -- BVC Day Timer App 
Designed and programmed by    :   Candace Arriola and Paul K Kho
Course                        :   SOVD 2201 Web Programming Section 1 Group 3
Instructor                    :   Tigist B
Due                           :   December 14th 2022

*/

// Main Landing Page 

import React, { Component } from 'react';
import ProjectFooter from './component/ProjectFooter';
class WelcomePage extends Component {
  useState ={};
  render() {
    return  (
      <div>
      <h1> BVC Day Timer App  </h1>
     <p> This is your main entry point into our App. It is designed for users to enter their schedules. 
     Each schedule is divided into three main sections. School scheldule,
     work schedule and free time schedule.  Each schedule is linked to customized 
     database. Each database has customized settings the user can personalized to 
     their specific needs. More details are coming soon. </p>
    <div> 
    <ProjectFooter />

     </div>
    </div>
    )  
  };
}


export default WelcomePage;
