const express = require('express');
const router = express.Router();
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

router.post("/admin/upload",isAuthenticated,authorizeRoles('admin'),uploadimage)
module.exports = router;
