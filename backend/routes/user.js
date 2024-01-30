const express = require('express')
const router = express.Router()
const {imageUpload,videoUpload} = require('../controllers/imageUpload')
router.post('/ImageUpload',imageUpload)
router.post('/videoUpload',videoUpload)


router.post('/checkduplicate', async (req, res) => {
    let flag = await registration_details.find({ email: req.body.email }).toArray();
    if (flag.length == 0)
        res.json({ duplicate: false });
    else
        res.json({ duplicate: true });
})

router.post('/sendmail', async (req, res) => {
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'teamscorego@gmail.com',
            pass: 'hkjqydikunkiqwrq'
        }
    });
    const mailOptions = {
        from: 'SCORE-GO TEAM <teamscorego@gmail.com>',
        to: req.body.email,
        subject: 'Register yourself',
        html: `<div style="font-family: 'Poppins', sans-serif; font-size: 20px"><b>Dear user,</b><br>Thank you for registering .If you did not sign up, please disregard this email.<br><br>Regards,<br>WCE ACM Student Chapter</div>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({ mail_sent: false })
        } else {
            res.json({ mail_sent: true})
        }
    });
})

router.post("/signup", async (req, res) => {
    await registration_details.insertOne(req.body)
        .catch(() => res.json({ "inserted": false }))
    await client.db(req.body.email.substring(0, req.body.email.indexOf('@')) + "_db").collection('teams').insertMany(require('../public/json/teams.json'))
        .then(() => res.json({ "inserted": true }))
        .catch(() => res.json({ "inserted": false }))
});

module.exports = router