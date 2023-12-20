const Component = require("../models/db.js");
const User = require("../models/userModel");

const linkController = {
  // Middleware to add a link
  addLink: async (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).send("User not logged in");
    }

    const { link, title, created_at } = req.body;

    try {
      const newComponent = await Component.create({ link, title, created_at });
      await User.findByIdAndUpdate(
        req.session.userId,
        { $push: { links: newComponent._id } },
        { new: true, useFindAndModify: false }
      );

      res.locals.component = req.body.component;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  // Middleware to get a link
  getLink: async (req, res, next) => {
    try {
      if (!req.session.userId) {
        return res.status(401).send("User not logged in");
      }

      const userId = req.session.userId;
      const componentId = req.params.componentId;

      const queryOptions = componentId
        ? {
            path: "components",
            match: { _id: componentId },
          }
        : "components";

      const user = await User.findById(userId).populate(queryOptions).exec();
      res.locals.components = user.components;

      res.locals.component = req.body.component;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  // Middleware to delete a link
  deleteLink: async (req, res, next) => {
    if (!req.session.userId) {
      return res.status(401).send("User not logged in");
    }

    const componentId = req.params.componentId;

    try {
      const user = await User.findById(req.session.userId);
      if (!user || !user.components.includes(componentId)) {
        return res.status(401).send("User does not have this link saved.");
      }

      await Component.findByIdAndDelete(componentId);
      const updatedUser = await User.findByIdAndUpdate(
        req.session.userId,
        { $pull: { components: componentId } },
        { new: true, useFindAndModify: false }
      );

      res.locals.updatedComponents = updatedUser.components;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = linkController;
