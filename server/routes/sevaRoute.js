const express = require('express');
const router = express.Router();
const sevaController = require('../controllers/sevaController');
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');

router.get('/',sevaController.getSevas);
router.post('/', sevaController.createSeva);
router.get('/:id', sevaController.getSeva);
router.put('/:id',isAuthenticated, authorizeRoles('admin'), sevaController.updateSeva);
router.delete('/:id',isAuthenticated, authorizeRoles('admin'), sevaController.deleteSeva);
router.get('/admin/noofsevas',isAuthenticated, authorizeRoles('admin'), sevaController.numberOfSevas);

module.exports = router;
