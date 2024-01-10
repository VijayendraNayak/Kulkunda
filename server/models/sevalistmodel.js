const mongoose=require("mongoose")

const sevalistSchema = new mongoose.Schema({
    sevanamek: {
      type: String,
      required: true,
    },
    sevanamee: {
      type: String,
      required: true,
    },
    sevanameh: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });
  
  // Create a model using the schema
  const Sevalist = mongoose.model('Sevalist', sevalistSchema);
  
  module.exports = Sevalist;
  