const BaseController = require('./baseController');
const UserService = require('../services/userService');
const UserRepository = require('../repositories/userRepository');
const { User } = require('../models');

class UserController extends BaseController {
  constructor() {
    const userRepository = new UserRepository(User);
    const userService = new UserService(userRepository);
    console.log(userRepository +': ' + userService)
    super(userService);
  }

  // Implement user-specific controller methods here if needed
}

module.exports = new UserController();
