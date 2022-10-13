const express = require('express');
const router = express.Router();
const fs = require('fs');

router
    .route('/')
    .get((req,res) => {
            res.render('users');
        });
router
    .route('/data')
    .get((req,res) => {

        let data = fs.readFileSync('./fixtures/users.json');
        let users = JSON.parse(data);
        console.log(users);
        
        return res.json({
          users
        })
      })
    
module.exports = router;