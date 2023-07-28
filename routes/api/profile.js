const express = require('express');

const router = express.Router();
// @route GET api/profile/test
// @desc tests profile route
// @access public route 
router.get('/test',(req,res)=>res.json({msg:"Profile Works"}));

module.exports=router;