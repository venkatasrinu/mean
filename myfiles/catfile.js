var exp =require(express)
rt =exp.Router()
rt.post("/catins",function(req,res){
    console.log("coming too backend")
})


module.exports= rt