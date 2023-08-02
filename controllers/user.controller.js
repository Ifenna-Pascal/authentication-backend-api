const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");
class UserController {
  async create(req, res) {
    // check if the user exists
    const existingUser = await userService.findOne({ email: req.body.email })
    if (existingUser) {
      return res.status(409).send({ success: false, message: "User already exists" })
    }

    // create the user
    const user = await userService.create(req.body)
    return res.status(201).send({ success: true, message: "User created successfully", data: user })
  }

  async login(req, res) {
    const existingUser = await userService.findOne({ email: req.body.email })
    if (!existingUser) {
      return res.status(400).send({ success: false, message: "Invalid email or password" })
    }

    const isValidPassword = await userService.comparePassword(req.body.password, existingUser.password)
    if(!isValidPassword) {
      return res.status(400).send({ success: false, message: "Invalid email or password" })
    }

    const token = jwt.sign({ _id: existingUser._id, email: existingUser.email }, process.env.JWT_SECRET, { expiresIn: "1d" })

    return res.header('auth-token', token).status(200).send({
      success: true,
      message: "User logged in successfully",
      data: {
        token
      }
    })

  }
  
  async me(req, res) {
    const user = await userService.findOne({
      _id: req.user?._id
    })
    
    return res.status(200).send({
      success: true, 
      message: "User retrieved successfully",
      data: user
    })
  }
}

module.exports = new UserController()