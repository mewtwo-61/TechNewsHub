const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  components: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
    },
  ],
});

// Hash the password before saving
// userSchema.pre('save', async function(next) {
//   if (this.isModified('passwordHash')) {
//     this.passwordHash = await bcrypt.hash(this.passwordHash, 8);
//   }
//   next();
// });

// Method for password verification
// userSchema.methods.checkPassword = async function(password) {
//   return bcrypt.compare(password, this.passwordHash);
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
