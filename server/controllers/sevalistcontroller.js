const { asyncErrHandler } = require("../middleware/asyncerrorHandler");
const Sevalist = require('../models/sevalistmodel');
const { errorHandler } = require("../Utils/errorHandler");


exports.Addseva=asyncErrHandler(async(req,res,next)=>{
    const {sevanameh,sevanamek,sevanamee,price}=req.body;
    const newseva=await Sevalist.create({sevanameh,sevanamek,sevanamee,price})
    if(!newseva){
        return next(errorHandler(400,"error creating seva"))
    }
    res.status(200).json({success:true,message:"Seva created successfully",newseva})
})

exports.Getdata=asyncErrHandler(async(req,res,next)=>{
    const sevas=await Sevalist.find()
    if (!sevas){return next(errorHandler(404,"Sevas not found"))}
    res.status(200).json({success:true,message:"Sevas displayed successfully",sevas})
})
exports.GetSevaById = asyncErrHandler(async (req, res, next) => {
    try {
        const sevaId = req.params.id;

        if (!sevaId) {
            return next(errorHandler(400, "Invalid Seva ID"));
        }

        const seva = await Sevalist.findById(sevaId);

        if (!seva) {
            return next(errorHandler(404, "Seva not found"));
        }

        res.status(200).json({ success: true, message: "Seva found successfully", seva });
    } catch (error) {
        next(error);
    }
});
exports.noofsevalist=asyncErrHandler(async(req,res,next)=>{
    const length = await Sevalist.countDocuments()
    const sevas = await Sevalist.find()
    if (!length) { return next(errorHandler(403, "There are no sevas in the database")) }
    res.status(200).json({ message: "Num of users:", length, sevas })
})

exports.DeleteSeva = asyncErrHandler(async (req, res, next) => {
    try {
        const sevaId = req.params.id;

        if (!sevaId) {
            return next(errorHandler(400, "Invalid Seva ID"));
        }

        const deletedSeva = await Sevalist.findByIdAndDelete(sevaId);

        if (!deletedSeva) {
            return next(errorHandler(404, "Seva not found"));
        }

        res.status(200).json({ success: true, message: "Seva deleted successfully", deletedSeva });
    } catch (error) {
        next(error);
    }
});

exports.UpdateSeva = asyncErrHandler(async (req, res, next) => {
    try {
        const sevaId = req.params.id;
        const { sevanameh, sevanamek, sevanamee, price } = req.body;

        if (!sevaId) {
            return next(errorHandler(400, "Invalid Seva ID"));
        }

        const updatedSeva = await Sevalist.findByIdAndUpdate(
            sevaId,
            { sevanameh, sevanamek, sevanamee, price },
            { new: true, runValidators: true }
        );

        if (!updatedSeva) {
            return next(errorHandler(404, "Seva not found"));
        }

        res.status(200).json({ success: true, message: "Seva updated successfully", updatedSeva });
    } catch (error) {
        next(error);
    }
});
exports.getSingleSeva = asyncErrHandler(async (req, res, next) => {
    const { _id, sevanamee, sevanamek, sevanameh, price } = req.body;
    
    let query = {};
  
    // If _id is provided, prioritize the search by ID
    if (_id) {
      query._id = _id;
    } else {
      // If _id is not provided, construct a query based on other available fields
      if (sevanamee) query.sevanamee = sevanamee;
      if (sevanamek) query.sevanamek = sevanamek;
      if (sevanameh) query.sevanameh = sevanameh;
      if (price) query.price = price;
    }
  
    const seva = await Sevalist.find(query);
  
    if (!seva) {
      return next(errorHandler(404, "Seva not found"));
    }
  
    res.status(200).json({ message: "Seva found successfully", seva });
  });
  exports.getSingleSevaById = asyncErrHandler(async (req, res, next) => {
    const sevaId = req.params.id;

    if (!sevaId) {
        return next(errorHandler(400, "Invalid Seva ID"));
    }

    const seva = await Sevalist.findById(sevaId);

    if (!seva) {
        return next(errorHandler(404, "Seva not found"));
    }

    res.status(200).json({ success: true, message: "Seva found successfully", seva });
});