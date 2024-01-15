const { asyncErrHandler } = require('../middleware/asyncerrorHandler');
const Seva = require('../models/sevaModel');
const { errorHandler } = require('../Utils/errorHandler');

exports.getSevas = async (req, res) => {
  try {
    const sevas = await Seva.find();
    res.json(sevas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createSeva = async (req, res) => {
  const { sevaname, username, phonenumber, sevadate, userId } = req.body;

  // Check if all required fields are present
  if (!sevaname || !username || !phonenumber || !sevadate || !userId) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newSeva = await Seva.create({ sevaname, username, phonenumber, sevadate: new Date(sevadate), userId });
  res.status(200).json({ message: "form sumbmitted successfully", success: true, newSeva })
};



// exports.getSeva = async (req, res) => {
//   const { _id } = req.params;
//   try {
//     const seva = await Seva.findById(_id);
//     if (!seva) {
//       res.status(404).json({ error: 'Seva not found' });
//     } else {
//       res.json(seva);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

exports.updateSeva = async (req, res) => {
  const { id } = req.params;
  const { sevaName, name, dateOfSeva } = req.body; // Added 'name' field
  try {
    const updatedSeva = await Seva.findByIdAndUpdate(id, { sevaName, name, dateOfSeva }, { new: true });
    if (!updatedSeva) {
      res.status(404).json({ error: 'Seva not found' });
    } else {
      res.json(updatedSeva);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteSeva = asyncErrHandler(async (req, res) => {
  const sevaId = req.params.id;

  try {
    // Check if the seva with the given ID exists
    const seva = await Seva.findById(sevaId);
    if (!seva) {
      return res.status(404).json({ error: 'Seva not found' });
    }

    // Delete the seva
    await Seva.findByIdAndDelete(sevaId);
    res.status(200).json({ success: true, message: 'Seva deleted successfully' });
  } catch (error) {
    console.error('Error deleting seva:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

exports.numberOfSevas = asyncErrHandler(async (req, res, next) => {
  const length = await Seva.countDocuments()
  const sevas = await Seva.find()
  if (!length) { return next(errorHandler(403, "There are no sevas in the database")) }
  res.status(200).json({ message: "Num of users:", length, sevas })
});

exports.getSingleSeva = asyncErrHandler(async (req, res, next) => {
  const { id } = req.body;
  const seva = await Seva.findById(id)
  if (!seva) { return next(errorHandler(404, "Seva not found")) }
  res.status(200).json({ message: "Seva found successfully", seva })
})

exports.getSevaByUserId = asyncErrHandler(async (req, res, next) => {
  const { userId } = req.params;
  console.log(userId)
  try {
    const sevas = await Seva.find({ userId });  // Using userId directly in the query
    if (sevas.length > 0) {
      // Documents matching the userId were found
      console.log(sevas);
      res.status(200).json({ message: "Sevas found successfully", sevas });
    } else {
      // No documents found for the specified userId
      return next(errorHandler(404, "Sevas not found for the given user"));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// exports.deleteSeva = asyncErrHandler(async (req, res, next) => {
//   const {id}=req.body;
//   const seva = await Seva.findById(id)
//   if (!seva) { return next(errorHandler(404, "The seva doesnot exist")) }
//   await Seva.findByIdAndDelete(id)
//   res.status(200).json({ success:true,message: "Seva deleted successfully" })
// })