const express = require('express');
const router = express.Router();
const sevaController = require('../controllers/sevaController');
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');
const { submitContactForm, getContactForms, deleteContactById,noofcontacts } = require('../controllers/contactController');

router.get('/',sevaController.getSevas);
router.post('/',isAuthenticated, authorizeRoles('admin'), sevaController.createSeva);
router.get('/:id', sevaController.getSeva);
router.put('/:id',isAuthenticated, authorizeRoles('admin'), sevaController.updateSeva);
router.delete('/:id',isAuthenticated, authorizeRoles('admin'), sevaController.deleteSeva);

module.exports = router;
