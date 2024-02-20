class BaseController {
    constructor(service) {
      this.service = service;
    }
  
    async getAll(req, res) {
      try {
        const data = await this.service.getAll();
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  
    async getById(req, res) {
      try {
        const id = req.params.id;
        const data = await this.service.getById(id);
        if (!data) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  
    // Add more generic controller methods as needed
    // async create(req, res) {
    //     try {
    //       const data = await this.service.create(req.body);
    //       res.json(data);
    //     } catch (error) {
    //       res.status(500).json({ message: error.message });
    //     }
    //   }

    async create(req, res) {
        try {
          const data = req.body;
          const createdData = await this.service.create(data);
          res.status(201).json(createdData);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    
      async update(req, res) {
        try {
          const id = req.params.id;
          const data = req.body;
          const updatedData = await this.service.update(id, data);
          res.json(updatedData);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    
      async delete(req, res) {
        try {
          const id = req.params.id;
          await this.service.delete(id);
          res.json({ message: 'User deleted successfully' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
  }
  
  module.exports = BaseController;
  