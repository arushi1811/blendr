const express = require("express")
const router = express.Router()
const { customAlphabet  } = require('nanoid')
const nanoid = customAlphabet("1234567890qwertyuiopasdfghjklzxcvbnm",8)
const Prof = require("../models/Prof")

router.get("/classcode",(req, res) => {
    res.send(nanoid())
})

router.post("/addprof", (req, res) => {
    console.log(typeof(req.body))
    res.send(req.body)
})

module.exports=router;