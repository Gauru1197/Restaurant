const mongoose=require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/restaurent")

orderSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        
    },
     phone:{
        type:Number,
        required:true
    }, 
    people:{
        type:Number,
       
    }, 
    date:{
        type:String,
        required:true
    },
     time:{
        type:String,
        required:true
    },
    dish:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("orders",orderSchema)