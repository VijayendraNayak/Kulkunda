const mongoose = require("mongoose");

const newsupdateSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
    },
    avatar: {
        type: Array,
        default:
            "https://imgs.search.brave.com/GrTMprW4fg05XTsfzacsNofnbaMJuXlbLIXZqUAn9vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw",
        required: true,
    },
    reffernces: {
        type: String,
        default: "user",
    },
});

const NewsUpdates = mongoose.model('NewsUpdates', newsupdateSchema);
  
module.exports = NewsUpdates;
