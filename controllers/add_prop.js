const DB = require('../DB/DB-config');
const jwt = require('jsonwebtoken');

const addProp = async (req,res)=>{
    console.log(req.body);
    let landLord_ID = null; 
    const token = req.cookies.Login_Cookie_Token;
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET,(err,decoded_token)=>{
        if(err) {res.redirect('/unauthorized_route');}
            else {landLord_ID = decoded_token.id;}
        });

    const {Property_Name, Property_Type, Rent, Phone, Food_Availability, Rules, Amenities, Additional_Info, Address, Area, City} = req.body;
    if(!Property_Name || !Property_Type || !Rent || !Phone  || !Rules|| !Address || !Area || !City){
    return res.json({status:'error_LL', error:'Please Enter All the Fields!!!'});
    }
    else{
        DB.query('SELECT Name FROM landlord_user WHERE User_ID=?',[landLord_ID],
        async (err1,result1)=>{
            console.log(result1.length)
            let CityID= null;
            if(err1){throw err1;}
            if(result1.length==1){
                DB.query('SELECT City_id from city where City_name=?',[City],async(errr,resultt)=>{
                    if(errr){throw errr;}
                    else{
                        CityID = resultt;
                        const query = `INSERT INTO ${Property_Type} SET ?`;
                        const values = {
                            Name:Property_Name,
                            Address:Address,
                            Type:Property_Type,
                            Rent: Rent,
                            Phone:Phone,
                            City_id: CityID,
                            User_ID:landLord_ID,
                            Area: Area,
                            Amenities: Amenities,
                            Description: Additional_Info,
                            Rules:Rules,
                            Food_availability:Food_Availability,
                            City_Name:City
                        }
                        DB.query(query,values,
                        (err2,result2)=>{
                            if(err2){throw err2;}
                            console.log(`Your ${Property_Type} Has Been Successfully Listed !!`);
                            return res.json({status:'Success_LL', success:`Your ${Property_Type} Has Been Successfully Listed !!`});
                        });
                    }
                })
            }
            else{return res.json({status:'error_LL', error:'Property Has not been Registered Somwthing Went Wrong!!!'});}
        });
    }
};

module.exports = {addProp};