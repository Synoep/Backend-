
// const fs = require('fs');

// fs.writeFile("hey.txt",'hey hello kaise ho', function(err){
//     if(err) console.error(err);
//     else console.log( "done");
// })

// fs.appendFile("hey.txt",'mai toh acha hu', function(err){
//         if(err) console.error(err);
//         else console.log( "done");
//     })


// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.error(err);
//     else  console.log("done");    
// })

// same for copy file   add destination as a new error



// const http = require('http');

// const server = http.createServer(function(req,res){
//      if(req.url=="/about"){
//            res.end("about the  page ")
//      }
//      if(req.url=="/profile"){
//           res.end("The profile page")
     
//      }
//        res.end("hello world");    
// })   

// server.listen(3000);

const express  = require('express');
const  app = express()

app.set("view engine",'ejs')

app.get('/about',(req,res) => {
     res.render('index')           
})

app.listen(3000)