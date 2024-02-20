const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
//User Controller
//const UserController = require('./controllers/userController');
const sequelize = require('./config/database'); // Import Sequelize instance
const apiRoutes = require('./routes');

app.use(bodyParser.json());

//app.route('/createUser', );
// Routes
app.use('/api', apiRoutes);

// Sync database
sequelize.sync().then(() => {
    console.log('Database synced');
  }).catch(err => {
    console.error('Unable to sync database:', err);
  });
  

app.listen(PORT, () => {
    console.log(`server is running in port : ${PORT}`);
});
