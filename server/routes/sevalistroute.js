const express = require('express');
const router = express.Router();
const { Addseva,Getdata,noofsevalist } = require('../controllers/sevalistcontroller');
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

router.post("/admin/addseva",isAuthenticated,authorizeRoles("admin"),Addseva)
router.get("/admin/noofsevalists",isAuthenticated,authorizeRoles("admin"),noofsevalist)
router.get("/getdata",Getdata)

module.exports = router;

