const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let URI =
  'mongodb+srv://dashboard:test123@cluster0.qf5sz7q.mongodb.net/?retryWrites=true&w=majority';

  // connect to mongoose 
mongoose
  .connect(URI)
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const componentSchema = new Schema({
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});

const Component = mongoose.model('component', componentSchema);

module.exports = Component;
