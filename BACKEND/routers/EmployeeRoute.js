const express = require("express");
const router = express.Router();
const EmployeeSchema = require("../models/EmployeeSchema");

//PERSIST SPECIFIC EMPLOYEE DATA INTO DB -- DONE
router.post("/insertEmployee", async (req,res) =>{
    console.log("Inside insert employee..");
    const primary_skill = req.body.primary_skill.toLowerCase();
    const enterprise_id = req.body.enterprise_id.toLowerCase();
    const sub_skill = req.body.sub_skill.toLowerCase();
    const background_verification_status = req.body.background_verification_status.toLowerCase();
    console.log("Hi there",req.body.years_of_exp)
    const emp = new EmployeeSchema({
        _id:enterprise_id,
        career_level: req.body.career_level,
        years_of_exp:req.body.years_of_exp,
        acc_onboard_date: req.body.acc_onboard_date,
        client_onboard_date: req.body.client_onboard_date,
        acc_leaving_date: req.body.acc_leaving_date,
        client_leaving_date:req.body.client_leaving_date,
        primary_skill: primary_skill,
        sub_skill:sub_skill,
        background_verification_status: background_verification_status
    });

    try{const data = await emp.save();
    console.log(data);
    res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.json(err);
    }

});

//PERSIST MULTIPLE EMPLOYEE DATA INTO DB -- DONE 
//TAKES IN ARRAY OF OBJECTS WITH DATA AS KEY
router.post("/insertMultipleEmployees", (req,res)=>{
   
    console.log("Inside persist multiple...");
    const data = req.body.data;
    console.log(data);
    const send_data = [];
    let count = 1;
    
    data.map(async db => {
     const primary_skill = db.primary_skill.toLowerCase();
    const enterprise_id = db.enterprise_id.toLowerCase();
    const sub_skill = db.sub_skill.toLowerCase();
    const background_verification_status = db.background_verification_status.toLowerCase();
     const fil_schema = new EmployeeSchema({
        _id:enterprise_id,
        career_level: db.career_level,
        years_of_exp:db.years_of_exp,
        acc_onboard_date: db.acc_onboard_date,
        client_onboard_date: db.client_onboard_date,
        acc_leaving_date: db.acc_leaving_date,
        client_leaving_date:db.client_leaving_date,
        primary_skill: primary_skill,
        sub_skill:sub_skill,
        background_verification_status: background_verification_status
     });
     try{
     const persisted_data = await fil_schema.save();
     console.log(`Schema created and persisted in loop ${count}`);
     send_data.push(persisted_data); 
     console.log(persisted_data);
     console.log(`In send_Data ${send_data}`);
     if(count===req.body.data.length)
     {
         console.log(send_data);
         res.status(200).json(send_data);
     }
     count++;
     }
     catch(err){
     console.log(err);
     res.json(err);
     }
    });

})

//DELETE EMPLOYEE DATA -- DONE 
router.delete('/deleteEmployee', async (req,res) =>{
    try{
        console.log(req.body.enterprise_id)
        const deleted_data = await EmployeeSchema.findByIdAndDelete({_id:req.body.enterprise_id});
        res.status(200).json(deleted_data);
        console.log(deleted_data);
    }
    catch(err)
    {
        console.log(err);
        res.json(err);
    }
})

//UPDATE EMPLOYEE DATA -- DONE 
router.put('/updateEmployeeData', async (req,res) => {
    let old_data = 0;
    const primary_skill = req.body.primary_skill.toLowerCase();
    const enterprise_id = req.body.enterprise_id.toLowerCase();
    const sub_skill = req.body.sub_skill.toLowerCase();
    const background_verification_status = req.body.background_verification_status.toLowerCase();
    try{
        console.log("Inside PUT functionality..");
        old_data = await EmployeeSchema.findByIdAndUpdate(  
            enterprise_id, 
            {career_level: req.body.career_level,
                years_of_exp:req.body.years_of_exp,
                acc_onboard_date: req.body.acc_onboard_date,
                client_onboard_date: req.body.client_onboard_date,
                acc_leaving_date: req.body.acc_leaving_date,
                client_leaving_date:req.body.client_leaving_date,
                primary_skill: primary_skill,
                sub_skill:sub_skill,
                background_verification_status: background_verification_status},
            {upsert: true}  );
            if(old_data)
            {
                console.log(old_data);
            
            }
    }
    catch(err)
    {
        res.send(err);
    }
    try{
        const updated_data = await EmployeeSchema.findById(old_data._id);
        res.status(200).json(updated_data);
        console.log(updated_data);
    }
    catch(err)
    {
        console.log(err);
        res.json(err);
    }
})

//UPDATE MULTIPLE EMPLOYEES -- DONE
// TAKES IN ARRAY OF OBJECTS WITH DATA AS KEY

router.put('/updateMultipleEmployeeData',  (req,res) => {
    let final_data = [];
    let old_data = 0;
    let data = req.body.data
    let count = 1
    data.map(async (db) => {

        const primary_skill = db.primary_skill.toLowerCase();
    const enterprise_id = db._id.toLowerCase();
    const sub_skill = db.sub_skill.toLowerCase();
    const background_verification_status = db.background_verification_status.toLowerCase();
    try{
        console.log("Inside PUT functionality..");
        old_data = await EmployeeSchema.findByIdAndUpdate(  
            enterprise_id, 
            {career_level: db.career_level,
                years_of_exp:db.years_of_exp,
                acc_onboard_date: db.acc_onboard_date,
                client_onboard_date: db.client_onboard_date,
                acc_leaving_date: db.acc_leaving_date,
                client_leaving_date:db.client_leaving_date,
                primary_skill: primary_skill,
                sub_skill:sub_skill,
                background_verification_status: background_verification_status},
            {upsert: true}  )
            
    }
    catch(err)
    {
        res.send(err);
    }
    try{
        console.log(old_data)
        const updated_data = await EmployeeSchema.findById({_id:db._id});
        final_data.push(updated_data);
        console.log(updated_data);
        console.log(final_data)
        if(count === req.body.data.length)
        {
            console.log(final_data)
            res.status(200).json(final_data)
        }
        count++;
    }
    catch(err)
    {
        console.log(err);
        res.json(err);
    }

    });

})



//GET ALL EMPLOYEE DATA -- DONE 
router.get('/getAllEmployees', async (req,res) => {
    try{        
    const data =  await EmployeeSchema.find();
    console.log("Inside get functionality..");
    res.status(200).json(data);
    }
    catch(err)
    {
        res.send(err);
    }
})

//GET SPECIFIC EMPLOYEE DATA BASED ON EMP_ID -- DONE
router.post('/getSpecificEmployeeData', async (req,res)=>{
    try{
    const data = await EmployeeSchema.findById(req.body.enterprise_id.toLowerCase()).exec();
    res.status(200).json(data);
    console.log(data);
    }
    catch(err)
    {
        res.json(err);
    }
})
module.exports = router;