const { asyncErrHandler } = require('../Middlewares/asyncerrorHandler')
const User = require('../Models/user.model')
const { errorHandler } = require('../Utils/errorHandler')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.verifyPhoneNumber = asyncErrHandler(async (req, res, next) => {
    const { phoneNumber } = req.body;
    try {
        const verificationRequest = await admin.auth().verifyPhoneNumber(phoneNumber);
        res.json({ success: true, verificationRequest });
    } catch (error) {
        console.error('Error sending verification code:', error);
        next(errorHandler(500, 'Failed to send verification code'))
    }
})

exports.verifyCode = asyncErrHandler(async (req, res, next) => {
    const { code } = req.body;
    try {
        const credential = admin.auth.PhoneAuthProvider.credential(code);
        const user = await admin.auth().signInWithCredential(credential);
        res.json({ success: true, user });
    } catch (error) {
        console.error('Error verifying code:', error);
        next(errorHandler(500, 'Failed to verify code'))
    }
})