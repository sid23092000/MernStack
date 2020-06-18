const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
app.use(cookieParser());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://sid_pict:sid@pict@users-qclwi.mongodb.net/users?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DataBase connected!");
  }
);

const userRouter = require("./routes/User");
app.use("/user", userRouter);

app.listen(5000, () => {
  console.log("express server started");
});
