const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var session = require('express-session'); 
const port = process.env.PORT || 3001;

let allUsers = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
   
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");        
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
    next();      
})  
     
app.route('/users').   
 get((req, res) => {     
   if(req.query.id!==''){      
          const isUserEdited = allUsers.filter(value => value.id == req.query.id)    
          res.status(200).json({errorCode:false, data:isUserEdited});
   }     
   // only for aunthentication
   else if(req.query.authentication){          
          const isUserAutheticated = allUsers.filter(value => value.username === req.body.username && value.password === req.body.password)    
          res.status(200).json({errorCode:false, data:isUserAutheticated});
   }
   else{     
        res.status(200).json({ errorCode:false, data:allUsers });  
       }
 }).    
 patch((req, res) => {     

  session = allUsers.map(value  => (value.id == req.query.id) ? 
    {             
      ...value,
      username:req.query.username,
      age:req.query.age,
      address:req.query.address,
    }            
    : value);   
    allUsers = session;  
  res.status(200).send({errorCode:false, data:allUsers,errorMessage:'Data Updated Successfully'});   
 }).      
 post((req, res)=> {      
  if(req.query.username && req.query.age && req.query.address){ 
    allUsers.push({username:req.query.username, age:req.query.age, id:Math.floor(Math.random() * 10 + 1), address:req.query.address});
    session = allUsers;     
  }        
  res.status(200).send({errorCode:false, data:session, errorMessage:'Data Inserted Successfully'});  
 }).        
 delete((req, res) => {    
  const deletedData = allUsers.filter(value => value.id != req.query.id);     
  session  = deletedData; 
  allUsers = session;                     
  res.status(200).send({errorCode:false, data:deletedData, errorMessage:'Data Deleted Successfully'});   
 });        
  
app.use(function(req, res){
  res.status(404).send({url:req.originalUrl + ' not found'});  
})

app.listen(port);    
console.log('server starts on port', port); 