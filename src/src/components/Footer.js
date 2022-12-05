/*
    SODV 2201 Web Programming Assignment 2 
      Displaying data from backend (server) to the frontend (client) with React JS.
      This program is designed and coded by SODV 2201 Section 1 Group 3.
      Design and coding by :  Candace Arriola and Paul Kho
      Instructor           :   Tigis Beshe
      Due                  :   November 30 2022  
*/

import React from 'react'

const Footer = () => {
    const currentday = new Date();
  return (
     <footer> 
        <p> Designed and Programmed by SODV 2201 Group 3. All rights reserved.  &copy; {currentday.getFullYear()}. </p>
     </footer>
  )
}

export default Footer