const express = require('express')
const router = express.Router();
const User = require('../models/UserModel')

const {login,signup} = require('../controllers/Auth')
const {auth,isStudent,isAdmin} = require('../middleware/auth')

router.post('/login',login)
router.post('/signup',signup)

// Add middelware for authorization of user so one user with role can access only thod 
// Allowed Routes
router.get('/test',auth,(req,res)=>{
    res.json({
        sucess:true,
        message:'Welcome to protected route for test'
    })
})

router.get('/student',auth,isStudent,(req,res)=>{
        res.json({
            sucess:true,
            message:'Welcome to protected route for student'
        })
})

router.get('/admin',auth,isAdmin,(req,res)=>{
    res.json({
        sucess:true,
        message:'Welcome to protected route for admin'
    })
})

router.get('/getEmail',auth,async(req,res)=>{
    try{
        const id = req.user.id
        const obj = await User.findById(id);
        console.log(obj);
        
        res.json({
            sucess:true,
            obje:obj,
            message:'Welcome to protected route for getEMail'
        })
    }catch(err){
        console.log(err.message)
        console.log("Error Occured");
        res.json({
            sucess:true,
            message:'Failed for getEMail'
        })
    }
    
})

module.exports = router;
