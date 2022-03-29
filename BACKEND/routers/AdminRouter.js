const express = require("express");
const router = express.Router();
const EmployeeSchema = require("../models/EmployeeSchema");

//FILTER EMPLOYESS BASED ON MONTHS
// SEND DATA AS POST - PART OF BODY 
router.post("/getMonthWise", async (req,res) => {
    console.log("Inside monthwise filter..");
    
    const month = req.body.month;
    const year = 2021;
    const fromDate = new Date(year, month-1,2);
    const toDate = new Date(fromDate.getFullYear(), fromDate.getMonth() + 1, 1);
    console.log(fromDate,"    ",toDate);
    try{
    const dates = await EmployeeSchema.find({"acc_onboard_date": {"$gte": fromDate, "$lte": toDate} });
    res.json(dates);
    console.log(dates);
    }
    catch(err)
    {
        console.log(err);
        res.json(err);
    }
})

//FILTER EMPLOYEES BASED ON SKILL
//SEND DATA AS POST - PART OF BODY 
router.post('/getSkillWise', async (req,res)=> {
    let skill = req.body.skill.toLowerCase();
    try{
        const data = await EmployeeSchema.find({primary_skill: skill});
        console.log(data);
        res.json(data);
    }
    catch(err)
    {
        console.log(err);
        res.json(err);
    }
})

//FILTER EMPLOYEES BASED ON CAREER LEVEL
//SEND DATA AS POST - PART OF BODY  
router.post('/getCflevelWise', async (req,res)=> {
    try{
        const data = await EmployeeSchema.find({career_level: req.body.career_level});
        res.json(data);
        console.log(data);
    }
    catch(err)
    {
        res.json(err);
        console.log(data);
    }
})

module.exports = router;