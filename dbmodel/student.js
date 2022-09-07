const mongoose = require('mongoose')


const scheema =new mongoose.Schema({
    sid:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        required:true,
        type:String
    },
    phone:{
        required:true,
        type:Number
    }

})


//collection


const students= new mongoose.model('student',scheema);
module.exports=students