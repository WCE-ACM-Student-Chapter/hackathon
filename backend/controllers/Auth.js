const bcrypt = require('bcrypt')
const User = require('../models/UserModel')
require('dotenv').config()

exports.signup = async (req,res) =>{
    try{
        const {name,email} = req.body
        // Check if User already exist
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({
                sucess:false,
                message: "User already Exist",
            });
        }

        const user = await User.create({
            name,
            email
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
