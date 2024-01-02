const { asyncErrHandler } = require('../middleware/asyncerrorHandler');
const Seva = require('../models/sevaModel');
const { errorHandler } = require('../utils/errorHandler');

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
  const { sevaName, name, dateOfSeva } = req.body; // Added 'name' field

  try {
    const newSeva = new Seva({ sevaName, name, dateOfSeva }); // Updated model instantiation
    await newSeva.save();
    res.json(newSeva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getSeva = async (req, res) => {
  const { id } = req.params;
  try {
    const seva = await Seva.findById(id);
    if (!seva) {
      res.status(404).json({ error: 'Seva not found' });
    } else {
      res.json(seva);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

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

exports.deleteSeva = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSeva = await Seva.findByIdAndDelete(id);
    if (!deletedSeva) {
      res.status(404).json({ error: 'Seva not found' });
    } else {
      res.json(deletedSeva);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.numberOfSevas = asyncErrHandler(async (req, res, next) => {
  const length = await Seva.countDocuments()
  const sevas = await Seva.find()
  if (!length) { return next(errorHandler(403, "There are no sevas in the database")) }
  res.status(200).json({ message: "Num of users:", length, sevas })
});
