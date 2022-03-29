const express = require("express");
const router = express.Router();
const Credentials = require("../models/credentials");

//SIGN UP - PERSISTING USER CREDENTIALS
//ENTERPRISE_ID IS RETURNED IF PERSISTED
router.post("/signup", async (req,res) => {
    console.log("Inside sign up...");
    const cred_schema = new Credentials({
        _id: req.body.employee_id,
        enterprise_id: req.body.enterprise_id,
        password: req.body.password
    });
    console.log(req.body);
    try{
    const data = await cred_schema.save();
    console.log(data);
    res.status(200).json(data.enterprise_id);
    }
    catch(err)
    {
        console.log(err);
    }

})

//SIGN IN - CREDENTIALS AUTHENTICATION ROUTE
//RETURNS DATA IF AUTHENTICATED, ELSE RETURN NULL
router.post("/signIn", async (req,res)=>{
    try{
        const data_in_db = await Credentials.findOne(
            {enterprise_id: req.body.enterprise_id, password: req.body.password},'enterprise_id');
        console.log("Check below");
        res.status(200).json(data_in_db);
        console.log(data_in_db); 
    }
    catch(err)
    {
        console.log(err);
    }
})

module.exports = router;