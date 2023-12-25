const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User should enter the name"],
    maxLength: 30,
    minLength: 4,
  },
  phonenumber: {
    type: String,
    required: [true, "User should enter the phone number"],
    unique: true, // Assuming phone numbers should be unique
    maxLength:13,
    minLength:10
  },
  email: {
    type: String,
    unique: true, // Assuming emails should be unique
  },
  password: {
    type: String,
    required: [true, "User should enter the password"],
    minLength: [8, "Password should have at least 8 characters"],
  },
  confirmpassword: {
    type: String,
    validate: {
      validator: function (value) {
        // Assuming that the confirmpassword should match the password
        return this.password === value;
      },
      message: "Passwords do not match",
    },
  },
  avatar: {
    type: String,
    default:
      "https://imgs.search.brave.com/GrTMprW4fg05XTsfzacsNofnbaMJuXlbLIXZqUAn9vg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw",
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);
