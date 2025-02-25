const express = require('express');
const router = express.Router();
const {signupValidation, loginValidation} = require("../Middlewares/AuthValidation.js");
const { signup, login } = require("../Controllers/AuthController.js");

// login

router.post('/login',loginValidation,login);

// router.post('/login',(req,res)=>{
//     res.send('login success');
// });


// Signup

router.post('/signup',signupValidation,signup)

// router.post('signup',(req,res)=>{
//     res.send('signup success');
// });

module.exports = router;