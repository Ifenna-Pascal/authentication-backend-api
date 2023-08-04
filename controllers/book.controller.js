const bookService = require('../services/book.service')

class bookController {
     async createBook (req, res) {
    const book = {
        name: req.body.name,
        author: req.user?._id
    }
    const newBook = await bookService.createBook(book);
    
    return res.status(200).send({
      success: true, 
      message: "User retrieved successfully",
      data: newBook
    })
  }
  async getBook (req, res) {

    const book = await bookService.getBook(req.user?._id);
    
    return res.status(200).send({
      success: true, 
      message: "User retrieved successfully",
      data: book
    })
  }
 
}


module.exports = new bookController()

