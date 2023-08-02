const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'please add username']
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'email is needed'],
        lowercase: true,
        trim: true,
        validate: {
          validator: function (value) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value)
          },
          message: 'please enter a valid email'
        }
    },
    password: {
        type: String,
        minlength: 6,
        // select: false
      },
  
})


module.exports = mongoose.model("User", userSchema);
