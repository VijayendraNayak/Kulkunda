const express =require ("express");
const { verifyPhoneNumber, verifyCode } = require("../Controllers/user.controller");
const { isAuthenticated, authorizeRoles } = require("../Middlewares/Authenticated");


const router=express.Router();

router.post('/verifyPhoneNumber',verifyPhoneNumber)
router.post('/verifyCode',verifyCode)

module.exports=router