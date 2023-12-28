const express=require("express");
const { register,login, google,logout,updateProfile,getuser } = require("../controllers/usercontroller");
const { isAuthenticated, authorizeRoles } = require("../middleware/Authenticated");
const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.post("/google",google)
router.get("/logout",isAuthenticated,logout)
router.put("/update",isAuthenticated,updateProfile)

module.exports=router