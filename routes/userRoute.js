const router = require('express').Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getAll.bind(UserController));
router.get('/:id', UserController.getById.bind(UserController));
//app.post('/user', UserController.getById.bind(UserController));
router.post('/', UserController.create.bind(UserController));
router.put('/:id', UserController.update.bind(UserController));
router.delete('/:id', UserController.delete.bind(UserController));

module.exports = router;