//  // Correctly using the response object

// // fs.writeFile("hey.txt",'hey hello kaise ho', function(err){
// //     if(err) console.error(err);
// //     else console.log( "done");
// // })

// // fs.appendFile("hey.txt",'mai toh acha hu', function(err){
// //         if(err) console.error(err);
// //         else console.log( "done");
// //     })


// // fs.rename("hey.txt","hello.txt",function(err){
// //     if(err) console.error(err);
// //     else  console.log("done");    
// // })

// // same for copy file   add destination as a new error



// // const http = require('http');

// // const server = http.createServer(function(req,res){
// //      if(req.url=="/about"){
// //            res.end("about the  page ")
// //      }
// //      if(req.url=="/profile"){
// //           res.end("The profile page")
     
// //      }
// //        res.end("hello world");    
// // })   

// // server.listen(3000);


// const morgan = require('morgan')

// const express  = require('express');
// const  app = express()

// const userModel = require('./models/user')
// const dbConnection = require('./config/db')

// app.use(morgan('dev'))

// app.set("view engine",'ejs')  

// app.use(express.json()) ;// these two lines are built in middle ware use for getting data in req.body
// app.use(express.urlencoded({extended:true}));// for geeting data in post method in exp  

// app.use(express.static("public")) // middlewares for connecting CSS









//  // html page rendering from views folder


// // app.use((req,res,next)=>{
// //      console.log("This is middleware")
// //      // 3 types middle warews 
// //      //1.built in 
// //      //2. coustom middlewares
// //      //3. third party middlewares
// //      return next() // chalo rakho  
// // })

// // app.get('/about',(req,res) => {
// //      res.render('index')           
// // })

// // app.get('/about',  (req,res,next) => {
// //       const a=5;
// //       const b=10;
// //       console.log(a+b)
// //       next()
// // },
// //      (req,res) => {    // using middleware in rotes
// //      res.render('index')           
// // }) 

// // app.listen(3000)


// // form controller 

// app.get('/about', (req,res) => {   // get - server - frontend
//          res.render('index')    ;     
//  }) 

//  app.get('/register',(req,res) =>{ // for showing
//     res.render('register')
//  })
// // CRUD - Create 
// app.post('/register', async(req,res)=>{
//     // database me user nikalne ke liye model use karte
//     const {username,email,password} = req.body
//    const newUser = await userModel.create({   // await kyuki jab create hoga tab hi response jayega (send wala)
//         username:username,
//         email:email,
//         password:password
//     })
//     res.send(newUser)
// }) // yaha data aega

// // CRUD- Read
// app.get('/get-users',(req,res)=>{
//     userModel.find().then((users)=>{
//         res.send(users)
//     })// we can use FInd() function for adding condition and get the user
// })// this will give all user form data ase to get-user route

// // CRUD- Update
 
// app.get('/update-user',async(req,res)=>{
//     await userModel.findOneAndUpdate({
//         username: 'a'  // condition for finding
//     },{
//         email:"c@c.com"  // update kya karna hai
//     })
// })

// // CRUD - Delete

app.get('Delete-user', async(req,res) => {
    await userModel.findOneAndDelete({
        username:"a"
    })
    res.send('user deleted')
})
// // easiest






//  app.post('/get-form-data', (req,res) => {   // post- frontend to backend server
//     console.log(req.body);
//     res.send('data received');         
// }) ;


//  app.listen(3000)
