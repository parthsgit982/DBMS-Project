const express = require('express');
const router = express.Router();
const RouteAuth = require('../Middleware/AuthRoute.js');
const logout = require('../controllers/logout_cntr.js');
const {unauthRoute,unauthLogin} = require('../controllers/unauth_cntr.js');

router.get('/',(req,res)=>{
    res.sendFile('index.html',{root: './public/Main/'});
});
router.get('/Dashboard_Stud',RouteAuth,(req,res)=>{
    res.sendFile('studPage.html',{root: './public/Stud_Dashboard/'});
});
router.get('/Dashboard_LL',RouteAuth,(req,res)=>{
    res.sendFile('LLPage.html',{root: './public/LL_Dashboard/'});
});
router.get('/Dashboard_Stud',RouteAuth,(req,res)=>{
    res.sendFile('studPage.html',{root: './public/Stud_Dashboard/'});
});
router.get('/Props_LL',RouteAuth,(req,res)=>{
    res.sendFile('Props.html',{root: './public/LL_Dashboard/'});
});
router.get('/likedd',RouteAuth,(req,res)=>{
    res.sendFile('liked.html',{root: './public/Stud_Dashboard/'});
});
router.get('/home',RouteAuth,(req,res)=>{
    res.sendFile('studPage.html',{root: './public/Stud_Dashboard/'});
});
router.get('/logout_user',logout);
router.get('/unauthorized_route',unauthRoute);
router.get('/unauthLogin',unauthLogin);

module.exports = router;