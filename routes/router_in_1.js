const express = require('express');
const router = express.Router();
const {addProp} = require('../controllers/add_prop');

router.route("/add_prop").post(addProp);

module.exports = router;