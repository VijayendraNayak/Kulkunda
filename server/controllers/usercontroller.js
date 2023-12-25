const { asyncErrHandler } = require('../middleware/asyncerrorHandler')
const User = require('../models/usermodel')
const { errorHandler } = require('../utils/errorHandler')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = asyncErrHandler(async (req, res, next) => {
    const { name, email, password, confirmpassword, phonenumber } = req.body
    if (password !== confirmpassword) { return next(errorHandler(400, "The password and confirmpassword should be same")) }
    const afterAtSymbol = email.split('@')[1];
    if (afterAtSymbol === "kulkundabasaweshwara.com") { role = "admin" }
    else{role="user"}
    const newpassword = bcrypt.hashSync(password, 10)
    const user = await User.create({ name, email, password: newpassword, role, phonenumber })
    if (!user) { return next(errorHandler(400, "User isn't created")) }
    res.status(200).json({ success: true, user })
})

exports.login = asyncErrHandler(async (req, res, next) => {
    const { phonenumber, password } = req.body;
    const user = await User.findOne({ phonenumber }).select('+password');

    if (!user) {
        return next(errorHandler(404, 'User not found'));
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
        return next(errorHandler(400, 'Wrong password, try again'));
    }

    // Create a JWT for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });

    // Exclude sensitive information from the response
    const { password: pass, ...rest } = user._doc;

    // Set a cookie with the access token
    res.cookie('access_token', token, { httpOnly: true });

    // Send the response with user details (excluding sensitive information)
    res.status(200).json(rest);
});
exports.google = asyncErrHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
        const { password: pass, ...rest } = user._doc
        return res.cookie("access_token", token, { httpOnly: true }).status(200).json(rest)
    }
    else {
        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
        const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
        console.log(req.body)
        const newUser = new User({ name: req.body.name, email: req.body.email, password: hashedPassword, avatar: req.body.avatar });
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = newUser._doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    }
})
exports.logout = asyncErrHandler(async (req, res, next) => {
    res.clearCookie('access_token')
    res.status(200).json({ success: true, message: "User logged out successfully" })
})
exports.updateProfile = asyncErrHandler(async (req, res, next) => {
    const { name, email, avatar } = req.body
    req.user.name = name
    req.user.email = email
    req.user.avatar = avatar
    const user = await User.findByIdAndUpdate(req.user._id, req.user, { new: true })
    res.status(200).json({ message: "User updated Successfully", user })
})