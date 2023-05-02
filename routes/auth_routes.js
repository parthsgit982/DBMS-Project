const express = require('express');
const router = express.Router();

const {Reg_Stud_User,Reg_LndLrd_User} = require('../controllers/register_cntr.js');
const {Log_Stud,Log_LndLrd} = require('../controllers/login_cntr.js');

router.route('/register_student').post(Reg_Stud_User);
router.route('/register_landlord').post(Reg_LndLrd_User);
router.route('/login_student').post(Log_Stud);
router.route('/login_landlord').post(Log_LndLrd);

module.exports = router;