var express = require('express');
var router = express.Router();
var app = router;
 var db;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(error,result){
  if(error){
    console.log("db error",error)
  }else{
   // console.log("data base created")
    db= result.db("mydb");
    ;
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("everyday working")
  res.send("respond with a resourcessssssssssssssssssss");
});

router.post("/ins",function(req,res){
  console.log("data base")
  obj = req.body;
  console.log(obj,"obj")
  db.collection("user").insert(obj,function(err,result){
    if(err){
      console.log(err,"insert err")
    }else{
       console.log("insert result",result)
    }
  })
  res.send("inserted successfully")

})

module.exports = router;
