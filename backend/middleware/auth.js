const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')
require('dotenv').config()//Env SecretKEY


exports.auth = (req,res,next) =>{

    try{
        // Pending Other ways to fetch Token
        console.log("cookie",req.cookies.token);
        console.log("body",req.body.token);
        // console.log("cookie",req.cookies.token);
        // req.header("Authorization").replace("Bearer ","");
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            sucess:false,
            message:"Token Missing"
        })
    }

    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        console.log("Decode is");
        console.log(decode)

        req.user = decode;
    }catch(err){
        return res.status(401).json({
            sucess:false,
            message:"Token is invalid"
        })
    }
    next();

    }catch(err){
        return res.status(401).json({
            sucess:false,
            message:"Coudn't Authenticate SOmething went wrong"
        })
    }


}



exports.isStudent = (req,res,next)=>{
    try{
        if(req.user.role !== "Student" ){
            return res.status(401).json({
                status:false,
                message:"Can't use this route -- Student route"
            })
        }
        next();
    }catch(err){    
        return res.staus(500).json({
            sucess:false,
            message:"Something went wrong"
        })
    }
}

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !== "Admin" ){
            return res.status(401).json({
                status:false,
                message:"Can't use this route -- Admin route"
            })
        }
        next();
    }catch(err){    
        return res.staus(500).json({
            sucess:false,
            message:"Something went wrong"
        })
    }
}


