const { asyncErrHandler } = require('../middleware/asyncerrorHandler')
const NewsUpdates = require('../models/newsupdatesmodel')
const { errorHandler } = require('../utils/errorHandler')

exports.uploadnews = asyncErrHandler(async (req, res, next) => {
    const news = await NewsUpdates.create(req.body)
    if (!news) { return next(errorHandler(400, "Failed to create the news")) }
    res.status(200).json({ message: "News uploaded successfully", success: true, news })
})
exports.noofnews = asyncErrHandler(async (req, res, next) => {
    const length = await NewsUpdates.countDocuments()
    const news = await NewsUpdates.find()
    if (!length) { return next(errorHandler(403, "There are no News in the database")) }
    res.status(200).json({ message: "Num of news:", length, news })
})