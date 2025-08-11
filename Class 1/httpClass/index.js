// npm init >> package 

// to create first server we need http modeule
// importing fs 
const fs = require('fs') // file system module > to write in file
const http = require('http')

const myServer = http.createServer((req, res) => { // server created > default request made
  // console.log(req.headers)
  // console.log("New Request ! ")
  // we only learn response ! 
  // res.end("New Request Recieved ! Can you look at me ? Hello how are you ")

  let log = `${Date.now()} : ${req.url} New Request Recieved !`

  fs.appendFile('log.txt', log , function(err , data) {
    console.log('Log file updated !')
  })

  switch(req.url){
    case '/': 
    // res.end('Home Page Data')
    // Giving HTML data to the browser 
    res.end
    break; 

    case '/about':
    res.end('About Page Data')
    break;

    case '/contact':
    res.end('Contact Page Data')
    break;
  }

  console.log(req.url)

})


// Listen > trying to run a server ! 8000 > Port (address) > where server is running 
myServer.listen(8000 , () =>{
  console.log("Server is running on port 8000 , SERVER STARTED SUCCESSFULLY !")
} ) 
// to run on port we need to keep the file running ! 



