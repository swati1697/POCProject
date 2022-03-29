const express = require("express");
const FIL_SCHEMA = require('../models/fil_schema.js')

const router = express.Router();
//PERSISTING AND FETCHING MULTIPLE DATA GIVES YOU ARRAY OF OBJECTS
//PERSISTING AND FETCHING SINGLE/SPECIFIC DATA GIVES YOU AN OBJECT ALONE

//PERSIST DATA INTO DB 
router.post('/persistEmployeeData', async (req,res) => {

    console.log("Inside the persist route");
    console.log(req.body);     
    const fil_schema = new FIL_SCHEMA({
        _id: req.body.employee_id,
        enterprise_id: req.body.enterprise_id,
        no_of_hours: req.body.no_of_hours,
        date: req.body.date
    });
    console.log("Schema created...");
    try{
    const data = await fil_schema.save();
    console.log(data);
    res.json(data);
    }
    catch(err){ 
        res.send(err);
    }
} )

//PERSIST MULTIPLE DATA INTO DB 
router.post("/persistMultipleEmployeeData", (req,res)=>{
   
       console.log("Inside persist multiple...");
       const data = req.body.data;
       console.log(data);
       const send_data = [];
       let count = 1;
       
       data.map(async db => {
           
        const fil_schema = new FIL_SCHEMA({
            _id: db.employee_id,
            enterprise_id: db.enterprise_id,
            no_of_hours: db.no_of_hours,
            date: db.date
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
            res.json(send_data);
        }
        count++;
        }
        catch(err){
        console.log(err);
        res.json(err);
        }
       });
   
})

//GET ALL EMPLOYEES DATA 
router.get('/getAllEmployeeData', async (req,res) => {
    try{        
    const data =  await FIL_SCHEMA.find();
    console.log("Inside get functionality..");
    res.json(data);
    }
    catch(err)
    {
        res.send(err);
    }
})

//GET SPECIFIC EMPLOYEE DATA 
router.get('/getSpecificEmployeeData/:employee_id', async (req,res)=>{
    try{
    const data = await FIL_SCHEMA.findById(req.params.employee_id).exec();
    res.json(data);
    console.log(data);
    }
    catch(err)
    {
        res.json(err);
    }
})

//UPDATE EMPLOYEE DATA IF EXISTS, ELSE INSERT EMPLOYEE DATA
router.put('/updateEmployeeData', async (req,res) => {
    try{
        console.log("Inside PUT functionality..");
        const old_data = await FIL_SCHEMA.findByIdAndUpdate(  
            req.body.employee_id, 
            {enterprise_id: req.body.enterprise_id, no_of_hours: req.body.no_of_hours,date: req.body.date},
            {upsert: true}  );

        
            console.log(old_data);
            res.json(old_data);
    }
    catch(err)
    {
        res.send(err);
    }
})

//DELETE AN EMPLOYEE DATA 
router.delete('/deleteEmployeeData', async (req,res) =>{
        try{
            const deleted_data = await FIL_SCHEMA.remove({_id: req.body.employee_id});
            res.json(deleted_data);
            console.log(deleted_data);
        }
        catch(err)
        {
            res.json(err);
        }
})

module.exports = router;