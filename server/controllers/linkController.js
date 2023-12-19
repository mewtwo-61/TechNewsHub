const Component = require('../models/componentModel');
const User = require('../models/userModel');

const linkController = {
  // Middleware to add a link
  addLink: async (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).send('User not logged in');
    }

    const { link, title, created_at } = req.body;

    try {
      const newLink = await Link.create({ link, title, created_at });
      await User.findByIdAndUpdate(
        
      )
    }
  }
}