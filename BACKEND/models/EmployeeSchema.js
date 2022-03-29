const mongoose = require("mongoose");

const employee_schema = mongoose.Schema({
    _id:{type:String,required:true},
    career_level:{type:Number,required:true},
    years_of_exp:{type:Number,required:true},
    acc_onboard_date:{type:Date,required:true},
    client_onboard_date:{type:Date,required:true},
    acc_leaving_date:{type:Date,required:true},
    client_leaving_date:{type:Date,required:true},
    primary_skill:{type:String,required:true},
    sub_skill:{type:String,required:true},
    background_verification_status: {type:String,required:true},
});

module.exports = mongoose.model("Employee", employee_schema);