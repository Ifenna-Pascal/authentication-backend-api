const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'please add a book name']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: [true, 'please a user']

    }
})


module.exports = mongoose.model("book", bookSchema);
