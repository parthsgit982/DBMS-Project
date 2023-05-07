const DB = require('../DB/DB-config');

let instance = null;
class DBService {
    static getDBServiceInstance(){
        return instance ? instance : new DBService();
    }

    async getAllData(){
        try{
            const Info = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM flat UNION ALL SELECT * FROM hostel UNION ALL SELECT * FROM pg`;
                DB.query(query, (err, results) => {
                  if (err) {
                    reject(new Error(err.message));
                  }
                  resolve(results);
                });
              });              
            return Info;
        }catch(err){console.log(err);}
    }
}

module.exports = DBService; 

