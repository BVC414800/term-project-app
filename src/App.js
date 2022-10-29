/*
SODV 2201 Group 3 Term Project -- BVC Day Timer App 
Designed and programmed by    :   Candace Arriola and Paul K Kho
Course                        :   SOVD 2201 Web Programming Section 1 Group 3
Instructor                    :   Tigist B
Due                           :   December 14th 2022

*/
// Main entry point with  React JSX 
// Main App section in React JSX 
/*
SODV 2201 Group 3 Term Project -- BVC Day Timer App 
Designed and programmed by    :   Candace Arriola and Paul K Kho
Course                        :   SOVD 2201 Web Programming Section 1 Group 3
Instructor                    :   Tigist B
Due                           :   December 14th 2022

*/

import './App.css';

import { BrowserRouter,  Link, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import  WelcomePage  from './components/WelcomePage';
import   LogInPage  from './components/LogInPage';
import RegistrationPage  from './components/RegistrationPage';
import ProjectFooter from './components/ProjectFooter';

function App ()  {
  return (
    <div className = "App " > 
        <div className = 'container mx-auto'>
            <NavBar />
            <BrowserRouter> 
                <div> 
                    <nav>
                        <Link to="/WelcomePage">  Welecome </Link> 
                        <Link to="/RegistrationPage"> Sign UP </Link>
                        <Link to="/LogInPage"> Log In </Link>
                    </nav>
                    <nav>
                        <Route path="/" element= { <WelcomePage/> }  />
                        <Route path="/" element= { <LogInPage/> }  />
                        <Route path="/" element= { <RegistrationPage/> }  />
                    </nav>
                </div>
           </BrowserRouter>
    <ProjectFooter />
        </div>
        </div>
    );
  }
export default App;


