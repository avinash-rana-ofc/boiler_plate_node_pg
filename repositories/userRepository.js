const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  // Implement user-specific repository methods here if needed
}

module.exports = UserRepository;
