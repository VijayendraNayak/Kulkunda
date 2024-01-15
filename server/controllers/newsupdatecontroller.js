const { asyncErrHandler } = require('../middleware/asyncerrorHandler');
const NewsUpdates = require('../models/newsupdatesmodel');
const { errorHandler } = require('../Utils/errorHandler');

exports.uploadnews = asyncErrHandler(async (req, res, next) => {
  const news = await NewsUpdates.create(req.body);
  if (!news) {
    return next(errorHandler(400, "Failed to create the news"));
  }
  res.status(200).json({ message: "News uploaded successfully", success: true, news });
});

exports.noofnews = asyncErrHandler(async (req, res, next) => {
  const length = await NewsUpdates.countDocuments();
  const news = await NewsUpdates.find();
  if (!length) {
    return next(errorHandler(403, "There are no News in the database"));
  }
  res.status(200).json({ message: "Num of news:", length, news });
});

exports.getAllNews = asyncErrHandler(async (req, res, next) => {
  const allNews = await NewsUpdates.find();

  if (!allNews) {
    return next(errorHandler(404, "No news found"));
  }

  res.status(200).json({ message: "All news retrieved successfully", allNews });
});

exports.getSingleNews = asyncErrHandler(async (req, res, next) => {
  const { _id, headline, description } = req.body;

  let query = {};

  // If _id is provided, prioritize the search by ID
  if (_id) {
    query._id = _id;
  } else {
    // If _id is not provided, construct a query based on other available fields
    if (headline) query.headline = headline;
    if (description) query.description = description;
    // Add other fields as needed
  }

  const news = await NewsUpdates.find(query);

  if (!news) {
    return next(errorHandler(404, "News not found"));
  }

  res.status(200).json({ message: "News found successfully", news });
});

exports.deleteNews = asyncErrHandler(async (req, res, next) => {
  const { newsId } = req.params;

  const deletedNews = await NewsUpdates.findByIdAndDelete(newsId);

  if (!deletedNews) {
    return next(errorHandler(404, "News not found"));
  }

  res.status(200).json({ message: "News deleted successfully", success: true, deletedNews });
});

exports.updateNews = asyncErrHandler(async (req, res, next) => {
  const { newsId } = req.params;
  const updatedData = req.body;

  const updatedNews = await NewsUpdates.findByIdAndUpdate(newsId, updatedData, { new: true });

  if (!updatedNews) {
    return next(errorHandler(404, "News not found"));
  }

  res.status(200).json({ message: "News updated successfully", success: true, updatedNews });
});
const mongoose = require('mongoose');

exports.getNewsById = asyncErrHandler(async (req, res, next) => {
  const {newsId}  = req.params;

  // Validate if newsId is a valid ObjectId


  const news = await NewsUpdates.findById(newsId);

  if (!news) {
    return next(errorHandler(404, "News not found"));
  }

  res.status(200).json({ message: "News retrieved successfully by ID", news });
});
