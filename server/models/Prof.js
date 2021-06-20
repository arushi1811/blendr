const mongoose = require("mongoose")

const ProfSchema = mongoose.Schema({
    classcode: {
        type: String,
        required: true,
        unique: true
    },
    profemail: {
        type: String,
        required: true
    },
    grader: {
        type: String
    },
    description:{ 
        type:String
    },
    hardskills: {
        type:[String]
    },
    softskills: {
        type: [String]
    },
    numstudents: {
        type: Number
    },
    nummembers: {
        type: Number,
        default: 5
    },
    numteams: {
        type: Number
    },
    students: {
        type: []
    }


})

module.exports = mongoose.model("Professor", ProfSchema)