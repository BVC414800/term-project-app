

/*
SODV 2201 Term Project BVC Schedule App
Program and codes designed by: Section 1 Group 3
Frontend (Client) designed by : Candace Arriola
Backend (Server) designed by  :  Paul K Kho
Instructor                    :  Tigist Beshe 
Due                           :  December 12 2022

*/


const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
app.set('query parser', 'simple')

//get api
app.get('/', (req,res)=>{
    res.send({express:"Your server is connected to your react app"})
})

app.get('/users', (req,res)=>{
    res.send({express:"Users detail data will be displayed here"})
})

// Show posting from frontend to console 
app.post('/post_login', (request, response) => {
   
    let { logIn }= request.body;
    console.log(logIn);
});

app.get("/aboutUs", (req,res)=> {
    res.send("This is an example of messages being sent from the server" +
    " to the client. We are SODV 2201 Section 1 Group 3. We are designing"
    + " and programming an app. It is designed to help BVC students to organize"
    + " their time. We will need both client and server port active for " 
    + " messages to transfer from server to client and display on screen."
           );
})

app.get("/signup", (req, res) =>{
    res.send("In this section, you will have the opportunity to register your BVC student ID" 
    + " your first and last names, a password no less than four characters and twenty four characters. Spaces are not allowed. "
    + " You need a valid phone number. Once you entered these required information, they will be "
    + " added to our database. You must have a valid BVC student ID to qualified and use this app. " 
    + " Please use our contact form if you have any questions. ");
    
 })





