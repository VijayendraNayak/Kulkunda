const express = require('express');
const router = express.Router();
const { Addseva, Getdata, noofsevalist, DeleteSeva, UpdateSeva } = require('../controllers/sevalistcontroller');
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

// AddSeva route
router.post("/admin/addseva", isAuthenticated, authorizeRoles("admin"), Addseva);

// Getdata route
router.get("/getdata", Getdata);

// Noofsevalist route
router.get("/admin/noofsevalists", isAuthenticated, authorizeRoles("admin"), noofsevalist);

// DeleteSeva route
router.delete("/admin/deleteseva/:id", isAuthenticated, authorizeRoles("admin"), DeleteSeva);

// UpdateSeva route
router.put("/admin/updateseva/:id", isAuthenticated, authorizeRoles("admin"), UpdateSeva);

module.exports = router;
