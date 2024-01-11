const express = require("express");
const { uploadnews,noofnews } = require("../controllers/newsupdatecontroller.js");
const { isAuthenticated, authorizeRoles } = require("../middleware/Authenticated");
const router = express.Router();

router.post("/admin/upload",isAuthenticated,authorizeRoles("admin"),uploadnews)
router.get("/admin/noofnews",isAuthenticated,authorizeRoles("admin"),noofnews)


module.exports = router;
