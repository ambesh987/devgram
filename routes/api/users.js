const express = require('express');

const router = express.Router();
// @route GET api/users/test
// @desc tests users route
// @access public route 
router.get('/test',(req,res) => res.json({msg:'User Works'}));

module.exports=router;
