const jwt = require('jsonwebtoken');

const RouteAuth = (req,res,next)=>{
    const token = req.cookies.Login_Cookie_Token;

    if(token){
        const decoded_token = jwt.verify(token, process.env.JWT_SECRET,(err,decoded_token)=>{
            if(err) {
                res.redirect('/unauthorized_route');
            }
                else {
                    console.log(decoded_token);
                    console.log(decoded_token.id);
                    next();
                }
            });
    }else{
        res.redirect('/unauthorized_route');
    }
    
}; 


module.exports = RouteAuth;