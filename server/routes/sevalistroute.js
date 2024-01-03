const express = require('express');
const router = express.Router();
const { Addseva } = require('../controllers/sevalistcontroller');
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

router.post("/admin/addseva",isAuthenticated,authorizeRoles("admin"),Addseva)

module.exports = router;

