require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const PORT = 8081;

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);

app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
