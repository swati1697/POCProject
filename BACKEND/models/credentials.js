const mongoose = require("mongoose");

const credentials = mongoose.Schema({
    _id: {type:String,required:true},
    enterprise_id:{type:String,required:true},
    password:{type:String,required:true}
})

module.exports = mongoose.model("Credentials", credentials);