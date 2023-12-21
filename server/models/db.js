require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let URI = process.env.MONGO_URI;

// connect to mongoose
mongoose
  .connect(URI)
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const componentSchema = new Schema({
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;
