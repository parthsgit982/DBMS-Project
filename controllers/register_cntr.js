const DB = require('../DB/DB-config');

const Reg_Stud_User = async (req,res)=>{
    console.log(req.body);
    const {Name,Email,Password,Address,Phone,Gender,Age} = req.body;
    if(!Name || !Email || !Password || !Address || !Phone || !Gender || !Age){
        return res.json({status:'error_R', error:'Please Enter All Fields!!!'});
    }else{
        DB.query('SELECT Email FROM student_user WHERE Email=?',[Email],
        async (err1,result1)=>{
            if(err1){throw err1;}
            if(result1.length==1){res.json({status:'error_R', error:'Student User with this Email Has Already Been Registered!!!'});}
            else{
                DB.query('INSERT INTO student_user SET ?',{Naam:Name, Email:Email, Password:Password, Address:Address, Phone:Phone, Gender:Gender, Age:Age},
                (err2,result2)=>{
                    if(err2){throw err2;}
                    return res.json({status:'Success_R', success:'Student User Has Been Registered!!!'});
                });
            }
        });
    }
};

const Reg_LndLrd_User = async (req,res)=>{
    console.log(req.body);
    const {Name,Email,Password,Rental_Address,Phone,Property_Type} = req.body;
    if(!Name || !Email || !Password || !Rental_Address || !Property_Type || !Phone){
        return res.json({status:'error_R', error:'Please Enter All Fields!!!'});
    }else{
        DB.query('SELECT Email FROM landlord_user WHERE Email=?',[Email],
        async (err1,result1)=>{
            if(err1){throw err1;}
            if(result1.length==1){res.json({status:'error_R', error:'Landlord User with this Email Has Already Been Registered!!!'});}
            else{
                DB.query('INSERT INTO landlord_user SET ?',{Name:Name, Email:Email, Password:Password, Rental_Address:Rental_Address, Property_Type: Property_Type, Phone:Phone},
                (err2,result2)=>{
                    if(err2){throw err2;}
                    return res.json({status:'Success_R', success:'Landlord User Has Been Registered!!!'});
                });
            }
        });
    }
};

module.exports = {Reg_Stud_User, Reg_LndLrd_User};