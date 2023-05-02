
const logout = (req,res)=>{
    res.clearCookie('Login_Cookie_Token');
    res.redirect('/');
}

module.exports = logout;