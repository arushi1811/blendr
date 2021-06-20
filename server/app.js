const express = require("express");
const cors = require("cors")
require("dotenv").config();
const mongoose = require("mongoose");
//route imports
const postr = require("./routes/posts")

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',postr )







// db connection
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("DB Connected.")
})

app.listen(8000);