const mongoose = require('mongoose');

const USER = process.env.MONGODB_USER;
const PASSWORD = process.env.MONGODB_PASSWORD;
const URL = process.env.MONGODB_URL;
const DATABASE = process.env.MONGODB_DATABASE;

// const routes = require('./routes/routes.js');
// const locationRoutes = require('./routes/locationRoutes.js');
// const volunteerRoutes = require('./routes/volunteerRoutes.js');
// const applicationRoutes = require('./routes/applicationRoutes.js');
// const authRoutes = require('./routes/authRoutes.js');
// const toggleRoutes = require('./routes/toggleRoutes');
// const backupRoutes = require('./routes/backupRoutes');

// /* to avoid mongoose deprecation warnings */
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

/* connect to database and listen to port only if the connection is succesful */
const options = {
  useNewUrlParser: true,
  // reconnectTries: 5, // Never stop trying to reconnect
  // reconnectInterval: 500, // Reconnect every 500ms
  // poolSize: 5, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  dbName: DATABASE,
};

// mongoose.connect(`mongodb://localhost:27017/${DATABASE}`, options) // for local development
const uri = `mongodb+srv://${USER}:${PASSWORD}@${URL}?retryWrites=true&w=majority`;
// // const uri = `mongodb+srv://admin:hokela27941713@cluster0.js2og.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// mongoose.connect(uri, options)
//   .then(() => {
//     console.log('Database connection successful');
//     app.listen(PORT, () => {
//       console.log(`Listening on port ${PORT}`);
//       logAddress();
//     });
//   })
//   .catch((err) => {
//     console.error('Database connection error ' + err);
//     app.listen(PORT, () => {
//       console.log(`Listening on port ${PORT}`);
//       logAddress();
//     });
//   });

// Define the Mongoose schema
// const todoSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   completed: { type: Boolean, default: false },
// });

// // Create a Mongoose model
// const TodoModel = mongoose.model('Todo', todoSchema);

const toggleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  }
}, { versionKey: false });

const ToggleModel = mongoose.model('Toggle', toggleSchema);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log('Connected to MongoDB');
    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports = { connectToDatabase, ToggleModel };