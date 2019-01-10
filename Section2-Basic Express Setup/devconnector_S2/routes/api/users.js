// auth cases  

/// used as router import express 

// get /test the  /test will be translated to api/test ...
// res.json => res.send  with json we server json 
// expot the router  last line  



const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
