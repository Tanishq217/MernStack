const express = require('express') ; 
// returns a function which reture all function related to express 


const app = express() ; // Calling the express ! 

// we can use anything 

// app.get // app.get('/path', (req, res) => { ... })
// app.post   // app.post('/path', (req, res) => { ... })
// app.put  // app.put('/path', (req, res) => { ... })


// Every route can be created independently ! 





// Creating home 

app.get('/' , (req , res) =>{
  res.send('Home Page Data') // we can put HTML data here // or website data
})

app.get('/about' , (req , res) =>{
  res.send('Home About Data') // we can put HTML data here // or website data
})

app.listen (8001 , () => {
  console.log("Server is running on port 8001 , SERVER STARTED SUCCESSFULLY !")
})