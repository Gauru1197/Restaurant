const mongoose=require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/restaurent')

commentSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    userId:String,
    comment:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("comments",commentSchema)