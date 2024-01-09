const express = require('express');
const router = express.Router();
const { Addseva,Getdata } = require('../controllers/sevalistcontroller');
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

router.post("/admin/addseva",isAuthenticated,authorizeRoles("admin"),Addseva)
router.get("/getdata",Getdata)

module.exports = router;

