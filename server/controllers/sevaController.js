const Seva = require('../models/sevaModel');

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
    const { sevaName, dateOfSeva } = req.body;
  
    try {
      const newSeva = new Seva({ sevaName, dateOfSeva });
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
  const { sevaName, dateOfSeva } = req.body;

  try {
    const updatedSeva = await Seva.findByIdAndUpdate(id, { sevaName, dateOfSeva }, { new: true });
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
