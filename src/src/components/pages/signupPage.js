// Sign Up page 

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
function SignupPage () {
  const [signup, setsignup] = useState("");
  useEffect(()=> {
    axios.get("http://localhost:5000/signup").then(function(res) {
       setsignup(res.data)  
     })
 } , [])
 const [register, setregister] = useState("");
  useEffect(()=> {
    axios.get("http://localhost:5000/register").then(function(res) {
       setregister(res.data)  
     })
 } , [])
    return  (
<div className="spotlight">
       <h1> Sign Up Page </h1>
         {signup}
         <div className="btn">
            <button> Click here to continue </button>
          </div>
         <div className = "registry"> 
         {register}
        </div>
        <div >

        </div>
</div>
    )  
  };



export default SignupPage;
