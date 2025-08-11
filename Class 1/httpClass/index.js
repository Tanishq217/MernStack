// npm init >> package 

// to create first server we need http modeule

const http = require('http')

const myServer = http.createServer((req, res) => { // server created > default request made
  console.log("New Request ! ")
  res.end("New Request Recieved ! Can you look at me ? Hello how are you ")
})


// Listen > trying to run a server ! 8000 > Port (address) > where server is running 
myServer.listen(8000 , () =>{
  console.log("Server is running on port 8000 , SERVER STARTED SUCCESSFULLY !")
} ) 
// to run on port we need to keep the file running ! 



