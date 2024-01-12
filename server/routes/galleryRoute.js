const express = require('express');
const { uploadimage, noofimg } = require('../controllers/gallerycontroller');
const router = express.Router();
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

router.post("/admin/upload",isAuthenticated,authorizeRoles('admin'),uploadimage)
router.get("/admin/noofimg",isAuthenticated,authorizeRoles('admin'),noofimg)
module.exports = router;
