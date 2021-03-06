// auth cases  

/// used as router import express 

// get /test the  /test will be translated to api/test ...
// res.json => res.send  with json we server json 
// export the router  last line  

// replies to  requests /api/users/test



const express = require('express');
const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
