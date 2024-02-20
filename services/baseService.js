class BaseService {
    constructor(repository) {
      this.repository = repository;
    }
  
    async getAll() {
      return await this.repository.findAll();
    }
  
    async getById(id) {
      return await this.repository.findById(id);
    }
  
    // Implement other common service methods here
    // async create(body) {
    //     return await this.repository.save(body);
    //   }

    async create(data) {
      console.log('data : '+ this.repository)
        return await this.repository.create(data);
      }
    
      async update(id, data) {
        return await this.repository.update(id, data);
      }
    
      async delete(id) {
        return await this.repository.delete(id);
      }
  }
  
  module.exports = BaseService;
  