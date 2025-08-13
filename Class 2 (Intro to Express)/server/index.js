const express = require('express') ; 
// returns a function which reture all function related to express 


const app = express() ; // Calling the express ! 

// we can use anything 

// app.get // app.get('/path', (req, res) => { ... })
// app.post   // app.post('/path', (req, res) => { ... })
// app.put  // app.put('/path', (req, res) => { ... })


// Every route can be created independently ! 



// Creating home Route and about route

app.get('/home' , (req , res) =>{
  res.send('Home Page Data') // we can put HTML data here // or website data
})

app.get('/about' , (req , res) =>{
  res.send('Home About Data') // we can put HTML data here // or website data
})


// Making Dummy DataBase for Course Route 
let courses = [
  { id: 1, name: 'JavaScript Basics' },
  { id: 2, name: 'Express.js Fundamentals' },
  { id: 3, name: 'Node.js Advanced' }
]

// COURSE ROUT 
app.get('/courses' , (req , res) =>{
  // when we hit "Courses" , we should see entire set of courses 
  res.send(courses) 
}) 

// Route Parameters 
// How to set up Route Parameters >> ADD ":"


// Specific Course Route by Course ID

app.get('/courses/:id' , (req , res) =>{
  // console.log(req.params)
  // res.send(courses)

  res.send(courses.find(course => course.id === parseInt(req.params.id))) // we can use parseInt to convert string to number
})

app.listen (8001 , () => {
  console.log("Server is running on port 8001 , SERVER STARTED SUCCESSFULLY !")
})