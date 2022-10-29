
/*
SODV 2201 Group 3 Term Project -- BVC Day Timer App 
Designed and programmed by    :   Candace Arriola and Paul K Kho
Course                        :   SOVD 2201 Web Programming Section 1 Group 3
Instructor                    :   Tigist B
Due                           :   December 14th 2022

*/
// Log In Page

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
