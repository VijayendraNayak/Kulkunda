const express = require('express');
const router = express.Router();
const sevaController = require('../controllers/sevaController');
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

// router.get('/',sevaController.getSevas);
router.post('/submit',isAuthenticated, sevaController.createSeva);
// router.get('/:id', sevaController.getSeva);
router.put('/:id',isAuthenticated, authorizeRoles('admin'), sevaController.updateSeva);
// router.delete('/:id',isAuthenticated, authorizeRoles('admin'), sevaController.deleteSeva);
router.get('/admin/noofsevas',isAuthenticated, authorizeRoles('admin'), sevaController.numberOfSevas);
router.post('/admin/singleseva',isAuthenticated, authorizeRoles('admin'), sevaController.getSingleSeva);
router.post('/admin/deleteseva',isAuthenticated, authorizeRoles('admin'), sevaController.deleteSeva);
router.get('/user/:userId', isAuthenticated, authorizeRoles('user'), sevaController.getSevaByUserId);
router.get('/admin/allbookedsevas',isAuthenticated, authorizeRoles('admin'), sevaController.getSevas);
router.post('/admin/delete/:id',isAuthenticated, authorizeRoles('admin'), sevaController.deleteSeva);

module.exports = router;
