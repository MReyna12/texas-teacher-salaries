const express = require("express");
const teacherSalaryRouter = require("./routes/teacher-salary-routes");
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/teacher-salaries", teacherSalaryRouter);

app.listen(PORT, () => {
  console.log(`The server is now running on port: ${PORT}.`);
});
