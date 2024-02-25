const db = require("../models");
const GlobalAlarm = db["GlobalAlarm"];

const updateAlarm = async function(req,res){
    const {id,attributes} = req.body;
    try {
        const row = await GlobalAlarm.findOne({
            where:{
                id:id
            }
        })
        row.set(attributes);
        await row.save();
        res.json({status:"ok"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = updateAlarm;