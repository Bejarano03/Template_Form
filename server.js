const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require("./passport");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sessions
app.use(
  session({
    secret: "Frenchie",
    resave: false,
    saveUninitialized: false
  })
)

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  next()
});

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Route connection
app.use(routes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/template");

// Start server on
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
