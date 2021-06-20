const express = require("express")
const router = express.Router()
const { customAlphabet  } = require('nanoid')
const nanoid = customAlphabet("1234567890qwertyuiopasdfghjklzxcvbnm",8)
const Prof = require("../models/Prof")

router.get("/classcode",(req, res) => {
    res.send(nanoid())
})

router.post("/addprof", (req, res) => {
    const prof = new Prof({
        classcode: req.body.classcode,
        profemail: req.body.email,
        grader: req.body.grader,
        description: req.body.descr,
        hardskills: req.body.hard,
        softskills: req.body.soft,
        numstudents: req.body.total,
        nummembers: req.body.members,
        numteams: req.body.teams
    })

    prof.save()
    .then(data=> res.send("200 OK"))
    .catch(err=> res.send(err))

})

router.get("/projectdetails/:classcode", async (req, res)=> {
    try {
        const deets = await Prof.findOne({classcode:req.params.classcode})
        res.json(deets)
    }
    catch (err) {
        res.json({msg:err})
    }
})

const checknum = async () => {
    const items = await Prof.findOne({classcode:req.params.classcode})

    return items.students.length===items.numstudents;

}

//check for student limit reached
//if reached run k means from library
//else return res OK 200
router.patch("/student/:classcode", async (req, res)=> {

    try {
        const updatedList = await Prof.updateOne({classcode:req.params.classcode}, {$set: {students: [req.body.newstudent]}})
    }
    catch (err){
        res.json({msg:err})
    }

    if (checknum()) {
        console.log("email")
    }
})

module.exports=router;