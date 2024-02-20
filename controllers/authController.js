const UserService = require('../services/userService')
const AuthService = require('../services/authService')


//for authController register
const { User } = require('../models');
const UserRepository = require('../repositories/userRepository');
const userRepository = new UserRepository(User);
const userService = new UserService(userRepository);


const AuthController = module.exports

AuthController.login = async (req, res) => {
  try {
    const auth = await new AuthService(userService).login(req.body)
    return res.status(200).json(auth);
  } catch (error) {
    console.error(error)
    return res.status(400).json(error)
  }
}

AuthController.register = async (req, res) => {
  try {

    //console.log('authcontroller :', new UserService());

    const user = await userService.create(req.body)
    return res.status(201).json(user)
  } catch (error) {
    console.error(error)
    return res.status(401).json(error)
  }
}

// TODO: Refresh token method