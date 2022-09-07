const express = require('express')
const mongoose = require('./dbmodel/mongoose');
const student = require("./dbmodel/student");
const answers = require("./dbmodel/answer");
const questions = require("./dbmodel/questions");
const studentData =require("./dbmodel/studentStatus");

const app = express()

app.use(express.json());

app.post('/api/attempque',async(req,res)=>{
    
    const {sid , question} = req.body;
    const qid = question[0].qid;
    const aid = question[0].aid;
    const data = [];
    data.push({qid,aid});
    const newStudent= new studentData({sid , data});
    const saveStudent = await newStudent.save();
    if(saveStudent){
        
       return res.status(200).json({success:true,message:"question has been attempted successfully"});
        
    }else{
        return res.status(501).json({success:false,message:"something went wrong"});
    }
})

//assuming questions are unique and stored 1 question only if there are many question 
//we have to perform some more action like loop and update query

app.post('/api/marks',async(req,res)=>{
    const {sid} = req.body;
   
    const sidExist  = await studentData.findOne({sid});
    // console.log(sidExist);
    if(sidExist){
        const qid = sidExist.data[0].qid;
        const aid = sidExist.data[0].aid;
        // console.log(typeof(qid));
        const answerMatch = await answers.findOne({"qid":qid});
        let marks = 0;
        let totalmarks =0;
        if(answerMatch){
            const question = await questions.findOne({qid});
            const correctaid = answerMatch.aid;
            if(correctaid == aid){
                let resultStatus = null;
                marks += question.marks;
                totalmarks = qid*marks;
                if(marks == totalmarks){
                     resultStatus= "pass";

                }else{
                    resultStatus = "fail";
                }
                const status =[];
                status.push({resultStatus,"gainMarks":marks,"totalMarks":totalmarks});
                const updated = await studentData.updateOne({sid},{status});
                if(updated){
                    return res.status(200).json({success : true,data:
                        {resultStatus,"gainMarks":marks,"totalMarks":totalmarks}
                    })
                }else{
                    return res.status(501).json({success:false,message:"something went wrong"});
                }
            }
        }

    }else{
        return res.status(401).json({success:false,message:"this student has not attempted any question"});
    }
})

app.listen(3000, () => console.log("Listening on port 3000"))