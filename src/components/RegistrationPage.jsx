/*
SODV 2201 Group 3 Term Project -- BVC Day Timer App 
Designed and programmed by    :   Candace Arriola and Paul K Kho
Course                        :   SOVD 2201 Web Programming Section 1 Group 3
Instructor                    :   Tigist B
Due                           :   December 14th 2022

*/
// Sign Up page 

import React, { Component } from 'react';
import { userState } from 'react';
class RegistrationPage extends Component {
  state ={ {useState} };
  render() {
    return  (
      <div>
      <h1> Sign Up Page </h1>
      
      <div id="reg">
          <form onSubmit={this.handleSubmit}>
       
       <label>
        Email:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
      <br></br><br></br>
     
       <label>
        UserName:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
       <br></br><br></br>


       <label>
        Password:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
       <br></br><br></br>

       
       <label>
        Phone Number:
       <input type="text"value={this.state.value} onChange={this.handleChange}/>
       </label>
       <br></br><br></br>

       
       <input type ="submit" value ="Login"/>
      
  
   </form>
  
    </div>
</div>
    )  
  };
}


export default RegistrationPage;
