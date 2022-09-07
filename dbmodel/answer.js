const mongoose = require('mongoose')


const scheema =new mongoose.Schema({
    aid:{
        type:Number,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    qid:{
        type:String,
        required:true
    }
})


//collection


const answers= new mongoose.model('answer',scheema);
module.exports=answers