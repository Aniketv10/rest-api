const mongoose = require('mongoose');
const validator = require('validator');


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present..."],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error["invalid email"]
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    address:{
        type:String,
        required:true
    }
})

const Student = new mongoose.model('student', studentSchema);

module.exports = Student;