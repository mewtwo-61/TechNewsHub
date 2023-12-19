const express = require("express");
const path = require("path");
const session = require("express-session");
const router = require("./routes/router");
const MongoStore = require("connect-mongo");
const cors = require("cors");

const app = express();
const PORT = 3020;

app.use(
  session({
    secret: "chickenIsOrange",
    resave: false,
    saveUninitialized: false,
    name: "techNewsHub_sid",
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// directory check
app.use(express.static(path.resolve(__dirname, "../src"))); // Double check if we will have 'client'

// routes
app.use("/api", router);

// local error handler
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  // debugging
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    error: {
      message: message,
      status: statusCode,
      timestamp: new Date().toISOString(),
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
