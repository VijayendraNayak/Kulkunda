const { asyncErrHandler } = require('../middleware/asyncerrorHandler');
const Contact = require('../models/contactModel');
const { errorHandler } = require('../Utils/errorHandler');
const validator = require('validator');

// Controller for submitting the contact form
exports.submitContactForm = asyncErrHandler(async (req, res, next) => {
  const { name, email, phoneNumber, message } = req.body;
  const isValidEmail = validator.isEmail(email);
  
  if (!isValidEmail) {
    return next(errorHandler(400, "Invalid email ID"));
  }
  
  try {
    // Creating a new contact using Mongoose's Contact model and its create() method
    const newContact = await Contact.create({ name, email, phoneNumber, message });
    if (!newContact) {
      return next(errorHandler(400, "Error creating contact"));
    }
    res.status(200).json({ success: true, message: 'Contact form submitted successfully', newContact });
  } catch (error) {
    next(errorHandler(500, 'Failed to submit contact form'));
  }
});

// Controller for retrieving submitted contact forms (accessible only by admin)
exports.getContactForms = asyncErrHandler(async (req, res, next) => {
  // Check if the user is an admin (ensure your authentication/authorization middleware sets this)
  if (req.user.role !== 'admin') {
    return next(errorHandler(403, 'You are not authorized to access this resource'));
  }

  try {
    const contactForms = await Contact.find();
    res.status(200).json({ success: true, contactForms });
  } catch (error) {
    next(errorHandler(500, 'Error fetching contact forms'));
  }
});

// Function to delete contact by ID (accessible only by admin)
exports.deletecontact = async (req, res, next) => {
  // Check if the user is an admin (ensure your authentication/authorization middleware sets this)
  if (req.user.role !== 'admin') {
    return next(errorHandler(403, 'You are not authorized to delete contacts'));
  }

  const { contactId } = req.params;

  try {
    await Contact.findByIdAndDelete(contactId);
    res.status(200).json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    next(errorHandler(500, 'Error deleting contact'));
  }
};
exports.noofcontacts = asyncErrHandler(async (req, res, next) => {
  const length = await Contact.countDocuments()
  const contacts = await Contact.find()
  if (!length) { return next(errorHandler(403, "There are no contacts in the database")) }
  res.status(200).json({ message: "Num of contacts:", length, contacts })
})

exports.getSingleContact = asyncErrHandler(async (req, res, next) => {
  const { _id, name, email, phoneNumber } = req.body;
  
  let query = {};

  if (_id) {
    // If _id is provided, prioritize the search by ID
    query._id = _id;
  } else {
    // If _id is not provided, construct a query based on available fields
    if (name) query.name = name;
    if (email) query.email = email;
    if (phoneNumber) query.phoneNumber = phoneNumber;
  }

  const contact = await Contact.findOne(query);

  if (!contact) {
    return next(errorHandler(404, "Contact not found"));
  }

  res.status(200).json({ message: "Contact found successfully", contact });
});

exports.deleteContact = asyncErrHandler(async (req, res, next) => {
  const {id}=req.body;
  const contact = await Contact.findById(id)
  if (!contact) { return next(errorHandler(404, "The contact doesnot exist")) }
  await Contact.findByIdAndDelete(id)
  res.status(200).json({ success:true,message: "Contact deleted successfully" })
})