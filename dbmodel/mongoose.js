const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myClasses')  
.then(()=>{console.log('connect successfully');})
.catch((err)=>{console.log(err);})