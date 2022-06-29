const express = require("express");
const teacherSalaryRouter = require("./routes/teacher-salary-routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

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
app.use("/", teacherSalaryRouter);

app.listen(PORT, () => {
  console.log(`The server is now running on port: ${PORT}.`);
});
