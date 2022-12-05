// Login page

/*
    SODV 2201 Web Programming Assignment 2 
      Displaying data from backend (server) to the frontend (client) with React JS.
      This program is designed and coded by SODV 2201 Section 1 Group 3.
      Design and coding by :  Candace Arriola and Paul Kho
      Instructor           :   Tigis Beshe
      Due                  :   November 30 2022  
*/


import React, { Component } from 'react';

class LogInPage extends Component {
  state ={};
  render() {
    return  (
      
    <div>
       <h1> Log In Section  </h1>

       <div id="login"> 
          
          <form onSubmit={this.handleSubmit}>
     
       <label>
        UserName:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
      <br></br>
      <br></br>
       
       <label>
        Password:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
       <br></br>
       <br></br>
      
       <input type ="submit" value ="Login"/>
      
  
   </form>
   </div>  
    </div>
  );
   
}
}
export default LogInPage;
