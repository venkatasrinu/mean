var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer');
var sendgridtransport =require('nodemailer-sendgrid-transport');
var app = router;
 var db;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,function(error,result){
  if(error){
    console.log("db error",error)
  }else{
    
    db= result.db("project");
    console.log("db created "+"connected to",db.databaseName)
    ;
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
  console.log("data base")
  obj = req.body;
  console.log(obj,"obj")
  db.collection("user").insert(obj,function(err,result){
    if(err){
      console.log(err,"insert err")
    }else{
       console.log("insertresult",result)
    }
  })
  transporter.sendMail({
    to:'suryanarr@gmail.com',
    from:'media@janasenaparty.org',
    subject:' Mail from జనసేన సోషల్ మీడియా',
    html:'<h1>హాయ్ Chitti గుంటూరు జిల్లా ఏరియా వింగ్ నుండి  మేము మీ facebook and WhatsApp పోస్ట్లు ప్రతి రోజు చూస్తాం చాల బాగుంటాయి, కావున మీకు ఇష్టము ఉంటే జనసేన సోషల్ మీడియాలో వార్తలు అందిస్తున్న విభాగము లో  రావాలి అని కోరిక.మరియు ఎవరికిిఐన జనసేన పార్టీని బలోపేతం చేయాలని ఊన్నా వారికి ఈ సందేశం తెలియచెయ్యండి..మీ నియోజికంలో మీరు వింగ్ అధికారిగా నియమిష్టం,<img sre><h1> <img src="https://www.janasenaparty.org/static/jspwebsitemain3/images/icon_bot.png">'
  })
  res.send("inserted successfully")

});
// router.get('/getdata',function(req,res){
//   console.log("get data working")
//   db.collection("user").find(function(err,result){
//     console.log(result,"result")
//     res.send(result);
//   })
// })

module.exports = router;
