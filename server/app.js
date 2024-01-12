const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const userrouter = require('./routes/userrouter.js');
const contactRoutes = require('./routes/contactRoute'); // Import the contact routes
const sevaRoutes = require('./routes/sevaRoute'); // Import the seva routes
const sevalistRoutes = require('./routes/sevalistroute'); // Import the sevalist routes
const newsupdateRoutes = require('./routes/newsupdatesroute'); // Import the newsupdate routes
const galleryRoutes = require('./routes/galleryRoute'); // Import the newsupdate routes

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userrouter); // Mount the user routes
app.use('/api/contact', contactRoutes); // Mount the contact form routes
app.use('/api/seva', sevaRoutes); // Mount the seva routes
app.use('/api/sevalist', sevalistRoutes); // Mount the sevalist routes
app.use('/api/newsupdate', newsupdateRoutes); // Mount the newsupdate routes
app.use('/api/gallery', galleryRoutes); // Mount the gallery routes

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({ success: false, statusCode, message });
});

module.exports = app;
