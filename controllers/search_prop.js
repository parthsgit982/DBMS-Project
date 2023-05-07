const DB = require('../DB/DB-config');
const DBService = require('../DB/DB-service');


// GET SINGLE ROW
const searchProp = (req,res)=>{
    const {Name} = req.params;
    const db = DBService.getDBServiceInstance();

    const result = db.searchByName(Name);
    result
    .then(Info => res.json({data: Info}))
    .catch(err => console.log(err));
};  

module.exports = {
    searchProp,
};