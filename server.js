const express = require("express")
const app = express();
const HTTP_PORT = 8000;
const getAllAlarms = require("./utils/readAlarms.js");
const addAlarm = require("./utils/addAlarm.js");
const updateAlarm = require("./utils/updateAlarm.js");
const deleteAlarm = require("./utils/deleteAlarm.js");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(HTTP_PORT, ()=>{
    console.log("The server is running on port http://localhost:"+HTTP_PORT);
})

app.get("/",(req,res)=>{
    res.json({message:"ok"});
});

app.post("/alarms", getAllAlarms);

app.post("/addalarm", addAlarm);

app.post("/updatealarm", updateAlarm);

app.post("/deletealarm", deleteAlarm);
