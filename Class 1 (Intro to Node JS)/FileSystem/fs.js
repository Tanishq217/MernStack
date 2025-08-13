// CRUD 

const fileSystem = require('fs')




// Read a File 
// Synchronous Method 
data = fileSystem.readFileSync('file1.txt' , 'utf8')
console.log(data) 




// Asynchronous Method 
// Execute later after the current operation completes

// While api we will follow this pattern ! > This handles error first and then data 
// ERROR FIRST CALLBACK 
data2 = fileSystem.readFile('file2.txt' , function(err, data){
  if (err){
    console.error(err)
  }
  else {
    console.log(data.toString())

  }
})

// writeFile , writeFileSync 
// AppendFile , appendFileSync 
// unlink , unlinkSync

const content = "This is my Content! This will come in file3.txt"



// Write a File 
// ASynchronous Method
fileSystem.writeFile('file3.txt' , content , function (err){
  if(err){
    console.error(err) 
  }
  else {
    console.log("File written successfully!") 
  }
})

// Write a File
