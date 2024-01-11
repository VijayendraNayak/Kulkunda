const { asyncErrHandler } = require("../middleware/asyncerrorHandler");
const Sevalist = require('../models/sevalistmodel');
const { errorHandler } = require("../utils/errorHandler");


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