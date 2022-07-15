const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const teacherSalaryRouter = require("./routes/teacher-salary-routes");
const mainRoutes = require("./routes/main-router");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

require("dotenv").config();
/*
// Mongoose connection
const clientP = mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => m.connection.getClient());
//.then(console.log("Connected to Database"));

// Session
app.use(
  session({
    secret: "keyboard cat",
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
      clientPromise: clientP,
    }),
  })
);*/

// Setup ejs and serve public files (css/images)
app.set("view engine", "ejs");
app.use(express.static("public"));

// Implement requisite cors information to allow for external use of api/ability to fetch using the heroku url
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

// API route
app.use("/api", teacherSalaryRouter);

// Front-end routes
app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`The server is now running on port: ${PORT}.`);
});
