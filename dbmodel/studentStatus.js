const mongoose = require('mongoose')


const scheema =new mongoose.Schema({
    sid:{
        type:Number,
        required:true
    },
    data:{
        type:Object,
        required:true
    },
    result:{
        type:Object
    }
})


//collection


const studentData= new mongoose.model('studentData',scheema);
module.exports=studentData