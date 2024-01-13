const express = require("express");
const { getSingleNews, uploadnews,noofnews,updateNews,deleteNews,getAllNews,getNewsById } = require("../controllers/newsupdatecontroller.js");
const { isAuthenticated, authorizeRoles } = require("../middleware/Authenticated");
const router = express.Router();

router.post("/admin/upload",isAuthenticated,authorizeRoles("admin"),uploadnews)
router.get("/admin/noofnews",isAuthenticated,authorizeRoles("admin"),noofnews)
router.post("/singlenews", getSingleNews);
router.get("/allnews", getAllNews);
router.delete('/deleteNews/:newsId',isAuthenticated,authorizeRoles("admin"), deleteNews);
router.put('/updateNews/:newsId',isAuthenticated,authorizeRoles("admin"), updateNews);
router.get('/singlenews/:newsId',getNewsById);
module.exports = router;
