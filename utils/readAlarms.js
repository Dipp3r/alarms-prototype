const db = require("../models");
const GlobalAlarm = db["GlobalAlarm"];

const getAllAlarms = async function(req,res){
    const {sortOrder,limit} = req.body;
    try {
        const alarms = await GlobalAlarm.findAll({
            limit:limit,
            order: sortOrder,
        });    
        res.json(alarms);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllAlarms;