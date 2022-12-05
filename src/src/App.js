
/*
SODV 2201 Term Project BVC Schedule App
Program and codes designed by: Section 1 Group 3
Frontend (Client) designed by : Candace Arriola
Backend (Server) designed by  :  Paul K Kho
Instructor                    :  Tigist Beshe 
Due                           :  December 12 2022

*/

import './App.css';
import React  from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './components/pages/home';
import AboutUs from "./components/pages/aboutUs";
import WorkSchedule from "./components/pages/subpages/workSchedule";
import SchoolSchedule from './components/pages/subpages/schoolSchedule';
import LogInPage from "./components/pages/loginPage";
import SignUpPage from "./components/pages/signupPage";
import FreeTimeSchedule from './components/pages/subpages/freetimeSchedule';
import ContactUs from "./components/pages/contactPage";
import Footer from "./components/Footer";

const App= ()=> {

  return (
    <div className="App">
       <header>
          <h1> BVC Schedule Planner App</h1>
     </header>
   
    <BrowserRouter>
        <NavMenu />
        <Routes> 
            <Route path="/" element= {<Home/>} />
            <Route path="/aboutus" element = {<AboutUs/> }/>
            <Route path="/signupPage" element= {<SignUpPage/> }/>
            <Route path="/loginPage"  element= {<LogInPage />  } />
            <Route path="/workSchedule" element= { <WorkSchedule /> }  />
            <Route path="/schoolSchedule" element= { <SchoolSchedule/> }  />
            <Route path="/freetimeSchedule" element  = {<FreeTimeSchedule /> } />
            <Route path="/contactPage" element={<ContactUs />  } />
        </Routes>
        <Footer />
        </BrowserRouter>  
    </div>
  );
}

export default App;
