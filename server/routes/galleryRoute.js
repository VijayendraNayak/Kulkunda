const express = require('express');
const { uploadimage, noofimg, deleteimg } = require('../controllers/gallerycontroller');
const router = express.Router();
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

router.post("/admin/upload", isAuthenticated, authorizeRoles('admin'), uploadimage)
router.get("/noofimg", isAuthenticated, noofimg)
router.delete("/admin/delete/:id", isAuthenticated, authorizeRoles('admin'), deleteimg)
module.exports = router;
