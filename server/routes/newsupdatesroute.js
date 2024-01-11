const express = require("express");
const { uploadnews } = require("../controllers/newsupdatecontroller.js");
const { isAuthenticated, authorizeRoles } = require("../middleware/Authenticated");
const router = express.Router();

router.post("/admin/upload",isAuthenticated,authorizeRoles("admin"),uploadnews)


module.exports = router;
