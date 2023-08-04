const bookModel = require("../models/book.model")

class bookController {
 async createBook (bookObj)  {
    const newBook = await bookModel.create(bookObj)
    return newBook;
}

async getBook (id) {
    const book = await bookModel.find({author: id}).populate('author')
    return book;
  }
}

module.exports = new bookController();