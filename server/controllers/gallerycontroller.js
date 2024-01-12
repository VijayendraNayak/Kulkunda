const { asyncErrHandler } = require('../middleware/asyncerrorHandler')
const Gallery = require('../models/gallerymodel')
const { errorHandler } = require('../utils/errorHandler')

exports.uploadimage = asyncErrHandler(async (req, res, next) => {
    const gallery = await Gallery.create(req.body)
    if (!gallery) { return next(errorHandler(400, "Failed to upload images")) }
    res.status(200).json({ message: "Images uploaded successfully", success: true, gallery })
})
exports.noofimg = asyncErrHandler(async (req, res, next) => {
    const length = await Gallery.countDocuments()
    const gallery = await Gallery.find()
    if (!length) { return next(errorHandler(403, "There are no Images in the database")) }
    res.status(200).json({ message: "Num of Images:", length, gallery })
})