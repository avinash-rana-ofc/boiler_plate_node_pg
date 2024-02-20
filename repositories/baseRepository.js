class BaseRepository {
    constructor(model) {
      this.model = model;
    }
  
    async findById(id) {
      return await this.model.findByPk(id);
    }
  
    async findAll() {
      return await this.model.findAll();
    }
  
    // Implement other common methods here
    // async create(user) {
    //     return await this.model.save(user);
    //   }

    async create(data) {
        return await this.model.create(data);
      }
    
    async update(id, data) {
        const record = await this.findById(id);
        if (!record) throw new Error('Record not found');
            return await record.update(data);
    }

    async delete(id) {
        const record = await this.findById(id);
        if (!record) throw new Error('Record not found');
            return await record.destroy();
    }
  }
  
  module.exports = BaseRepository;
  