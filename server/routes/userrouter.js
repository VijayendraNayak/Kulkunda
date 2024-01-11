const express = require("express");
const { register, login, google, logout, updateProfile, updatePassword, numberOfUsers, forgetpass, getSingleUser, deleteUser, updateRole, checkcookies } = require("../controllers/usercontroller");
const { isAuthenticated, authorizeRoles } = require("../middleware/Authenticated");
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/google", google)
router.get("/logout", isAuthenticated, logout)
router.put("/password", isAuthenticated, updatePassword)
router.put("/update", isAuthenticated, updateProfile)
router.post("/forgetpass", forgetpass)
router.get("/admin/noofuser", isAuthenticated, authorizeRoles("admin"), numberOfUsers)
router.post("/admin/singleuser",isAuthenticated,authorizeRoles("admin"), getSingleUser)
router.post("/admin/delete",isAuthenticated,authorizeRoles("admin"), deleteUser)
router.post("/admin/updaterole",isAuthenticated,authorizeRoles("admin"), updateRole)
router.get("/checkcookies",isAuthenticated, checkcookies)


module.exports = router