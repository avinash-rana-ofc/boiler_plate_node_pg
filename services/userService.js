const BaseService = require('./baseService');

class UserService extends BaseService {
  constructor(repository) {
    super(repository);
  }

  // Implement user-specific service methods here if needed
}

module.exports = UserService;
