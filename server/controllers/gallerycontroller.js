const { asyncErrHandler } = require('../middleware/asyncerrorHandler')
const Gallery = require('../models/newsupdatesmodel')
const { errorHandler } = require('../utils/errorHandler')

exports.uploadimage = asyncErrHandler(async (req, res, next) => {
    const gallery = await Gallery.create(req.body)
    if (!gallery) { return next(errorHandler(400, "Failed to upload images")) }
    res.status(200).json({ message: "Images uploaded successfully", success: true, gallery })
})