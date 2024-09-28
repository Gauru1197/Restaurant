const mongoose=require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/restaurent')

updateSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("updates",updateSchema)