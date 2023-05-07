const express = require('express');
const router = express.Router();
const {getAllProp} = require('../controllers/getAll_props');
const {searchProp} = require('../controllers/search_prop');

router.route("/getAll_props").get(getAllProp);
router.route("/searchProp/:Name").get(searchProp);

module.exports = router;