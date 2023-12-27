const express = require('express');
const router = express.Router();
const { isAuthenticated, authorizeRoles } = require('../middleware/Authenticated');
const { submitContactForm, getContactForms, deleteContactById } = require('../controllers/contactController');

// Route for submitting the contact form (no authentication required)
router.post('/submit', submitContactForm);

// Route for retrieving contact forms (accessible only by admin and requires authentication)
router.get('/forms', isAuthenticated, authorizeRoles('admin'), getContactForms);

// Route for deleting a contact by ID (accessible only by admin and requires authentication)
router.delete('/delete/:contactId', isAuthenticated, authorizeRoles('admin'), deleteContactById);

module.exports = router;
