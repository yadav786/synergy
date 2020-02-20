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
   // only for aunthentication
   if(req.query.id){      
          const isUserEdited = allUsers.filter(value => value.id === req.query.id)    
          res.status(200).json({errorCode:false, data:isUserEdited});
   }  
   else if(req.body.authentication){  
          const isUserAutheticated = allUsers.filter(value => value.username === req.body.username && value.password === req.body.password)    
          res.status(200).json({errorCode:false, data:isUserAutheticated});
   }
   else{   
        res.status(200).json({ errorCode:false, data:allUsers });  
        }
 }).    
 patch((req, res) => {     

  const getUpdatedData = session;   
  session = getUpdatedData.map(value  => (value.id === req.body.id) ? 
    {
      ...value,
      username:req.body.username,
      password:req.body.password,
    }   
    : value);
    allUsers = session;
  res.status(200).send({errorCode:false, errorMessage:'Data Updated Successfully'});   
 }). 
 post((req, res)=>{  
 console.log('allUsers',allUsers);     
  if(req.query.username && req.query.age && req.query.address){ 
    allUsers.push({username:req.query.username, age:req.query.age, id:Math.floor(Math.random() * 10), address:req.query.address});
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