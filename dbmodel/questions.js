const mongoose = require('mongoose')


const scheema =new mongoose.Schema({
    qid:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    }

})


//collection


const questions= new mongoose.model('question',scheema);
module.exports=questions