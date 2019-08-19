var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer');
var sendgridtransport =require('nodemailer-sendgrid-transport');
var app = router;
 var db;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url,function(error,result){
  if(error){
    console.log("db error",error)
  }else{
    
   db= result.db("project");
    console.log("db created "+"connected to",db.databaseName);
  }
})

const transporter = nodemailer.createTransport(sendgridtransport({
  auth:{
    api_key:'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'
  }
}))

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("everyday working")
  res.send("respond with a resourcessssssssssssssssssss");
});

router.post("/ins",function(req,res){  

  obj = req.body; 
  db.collection("user").insert(obj,function(err,result){
    if(err){
      console.log(err,"insert err")
    }else{
       console.log("insertresult",result)
      
        console.log("get data working")
        db.collection("user").find({}).toArray(function(err,result){
          if(err){
            console.log(err,"err")
          }else{
            console.log(result);
            res.setHeader('Content-Type','appplication/json')
            res.send(result)
            
          }
        })
          
        
    }
    
    // transporter.sendMail({
    //   to:'venkatsrinu.b@gmail.com',
    //   from:'media@janasenaparty.org',
    //   subject:' Mail from జనసేన సోషల్ మీడియా',
    //   html:'<h1>హాయ్ hemanth గుంటూరు జిల్లా ఏరియా వింగ్ నుండి mee bethamcherla venkata srinivas....inka eam ledu<img sre><h1> <img src="https://www.janasenaparty.org/static/jspwebsitemain3/images/icon_bot.png">'
    // })
  })
  
  //res.send("inserted successfully")

});



module.exports = router;
