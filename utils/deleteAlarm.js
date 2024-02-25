const db = require("../models");
const GlobalAlarm = db["GlobalAlarm"];

const deleteAlarm = async function(req,res){
    const {id} = req.body;
    try {
        const row = await GlobalAlarm.findOne({
            where:{
                id:id
            }
        })
        await row.destroy();
        res.json({status:"ok"});
    } catch (error) {
        console.log(error);
    }
}

module.exports = deleteAlarm;