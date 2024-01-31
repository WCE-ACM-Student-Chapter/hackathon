const User = require('../models/UserModel')
const nodemailer = require('nodemailer');
require('dotenv').config()

exports.signup = async (req, res) => {
    try {
        const { name, email } = req.body
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({
                sucess: false,
                message: "User already Exist",
            });
        }

        const user = await User.create({
            name,
            email
        })

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'wceacmsc@gmail.com',
                pass: process.env.APP_PASSWORD
            }
        });
        const mailOptions = {
            from: 'WCE ACM Student Chapter <wceacmsc@gmail.com>',
            to: req.body.email,
            subject: 'Register Now at UnStop',
            html: `<div style="font-family: 'Poppins', sans-serif; font-size: 20px"><b>Dear user,</b><br>Thank you for registering with our service.<br>The unstop link is here!<br><br>Regards,<br>WCE ACM Student Chapter</div>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Mail not sent')
                res.status(500).json({
                    sucess: false,
                    message: "User registered but mail not sent!"
                })
            } else {
                console.log('Mail sent successfully')
                res.status(200).json({
                    success: true,
                    message: "Mail Sent Sucessfully"
                })
            }
        });

    } catch (err) {
        console.log(err)

        return res.status(500).json({
            sucess: false,
            message: "User can't be registered try again"
        })
    }
}