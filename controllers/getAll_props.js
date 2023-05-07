const DB = require('../DB/DB-config');
const DBService = require('../DB/DB-service');


// GET ALL DATA
const getAllProp = async (req,res)=>{
    try{
        const db = DBService.getDBServiceInstance();
        const Info = await db.getAllData();
        res.json({data: Info});
    }catch(err){console.log(err);} 
};
module.exports = {
    getAllProp,
};