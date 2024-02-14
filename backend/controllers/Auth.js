const User = require('../models/UserModel')
const nodemailer = require('nodemailer');
require('dotenv').config()

exports.signup = async (req, res) => {
    try {
        const { name, email } = req.body
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.json({
                success: false,
                duplicate: true
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
            html:
                `<style>
                    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
                </style>
                <div style="font-family: 'Ubuntu', sans-serif; font-size: 16px; font-weight: 400">
                    <b>Dear participant,</b>
                    <br>
                    Thank you for your interest. You can go through the brochure for the detailed information about <b>WCE Hackathon
                        2024</b>.
                    <br>
                    To register, click on the <b>Unstop</b> link given below, form a team and submit your idea according the Idea
                    Submission Template attached here.
                    <br>
                    <br>
                    Unstop Link: <a href="https://bit.ly/wcehackathon24unstop">https://bit.ly/wcehackathon24unstop</a>
                    <br>
                    Brochure: <a href=""></a>
                    <br>
                    Idea Submission Template: <a href=""></a>
                    <br>
                    <br>
                    <b>Regards,</b>
                    <br>
                    WCE ACM StudentChapter
                </div>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.json({
                    success: false,
                    duplicate: false
                })
            } else {
                res.json({
                    success: true,
                    duplicate: false
                })
            }
        });

    } catch (err) {
        return res.json({
            success: false,
            duplicate: false
        })
    }
}