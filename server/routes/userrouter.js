const express=require("express");
const { register,login, google,logout,updateProfile,updatePassword,numberOfUsers } = require("../controllers/usercontroller");
const { isAuthenticated, authorizeRoles } = require("../middleware/Authenticated");
const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.post("/google",google)
router.get("/logout",isAuthenticated,logout)
router.put("/password",isAuthenticated,updatePassword)
router.put("/update",isAuthenticated,updateProfile)
router.get("/admin/noofuser",isAuthenticated,authorizeRoles("admin"), numberOfUsers)

module.exports=router