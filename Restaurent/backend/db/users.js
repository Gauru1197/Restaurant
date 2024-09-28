const mongoose=require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/restaurent')

userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("users",userSchema)