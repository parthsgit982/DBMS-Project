const unauthRoute = (req,res)=>{
    res.redirect('/Unauthorized.html');
};

const unauthLogin = (req,res)=>{
    console.log('efmpl');
    res.sendFile('login.html',{root: './public/Login/'});
};
module.exports = {unauthRoute,unauthLogin};