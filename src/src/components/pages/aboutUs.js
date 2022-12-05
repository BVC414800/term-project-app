/*
    SODV 2201 Web Programming Term Project
      Displaying data from backend (server) to the frontend (client) with React JS.
      This program is designed and coded by SODV 2201 Section 1 Group 3.
      Design and coding by :  Candace Arriola and Paul Kho
      Instructor           :   Tigis Beshe
      Due                  :   December 12 2022  
*/

import React, {useState, useEffect } from 'react';
import axios from 'axios';
function AboutUs() {
  const [aboutUs, setaboutUs] = useState("");
  useEffect(()=> {
    axios.get("http://localhost:5000/aboutUs").then(function(res) {
       setaboutUs(res.data)  
     })
 } , [])
  return (
    <div className="spotlight">  
       <h1> About Us </h1>
        {aboutUs}
  
    </div>   
  )
}

export default AboutUs;


