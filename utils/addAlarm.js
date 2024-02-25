const db = require("../models");
const GlobalAlarm = db["GlobalAlarm"];
const {faker} = require("@faker-js/faker");

const addAlarm = async function(req,res){
    const attributes = {
        id: faker.string.uuid(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        ...req.body
    }
    try {
        await GlobalAlarm.create(attributes);
        res.json({status:"ok"});
    } catch (error) {
        console.log(error);
    }

}

module.exports = addAlarm;