const bcrypt = require('bcrypt')
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.signup = async (req,res) =>{
    try{
        const {name,email,password,role} = req.body

        // Check if User already exist
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({
                sucess:false,
                message: "User already Exists",
            });
        }

        // Pass Secure
        let hashedPassword
        try{
            hashedPassword = await bcrypt.hash(password,10)
        }
        catch(err){
            console.log("Error For Hashing");
            res.status(500).json({
                sucess:false,
                message:"No hashing done error"
            })
        }

        const user = await User.create({
            name,
            email,
            password:hashedPassword,
            role
        })

        res.status(200).json({
            sucess:true,
            message:"User Created Sucessfully"
        })

    }catch(err){
        console.log(err)

        return res.status(500).json({
            sucess:false,
            message:"User can't be registered try again"
        })
    }
}

// login

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body

        if(!email || !password){
            return res.status(400).json({
                sucess:false,
                message:"No email and pwd inserted"
            })
        }
        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                sucess:false,
                message:"No Email exist Try by sign in"
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        }
        if(await bcrypt.compare(password,user.password)){
            // Password Match
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user = user.toObject()
            user.token = token
            user.password = undefined


            // Cookie creating
            const options = {
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
            }
            res.cookie("token", token,options).status(200).json({
                sucess:true,
                token,
                user,
                message:'User logged in sucessfully'
            });
            // res.status(200).json({
            //     sucess:true,
            //     token,
            //     user,
            //     message:'User logged in sucessfully'
            // });

        }else{
            return res.status(403).json({
                    sucess:false,
                    message:"Password Incorrect"
            })
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            sucess:false,
            message:error.message,
            mes:"login Failure"
        })
    }
}