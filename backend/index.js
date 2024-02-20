const express = require("express");
const mainRouter = require("./routes/index");
const userRouter = require("./routes/user");

const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());
app.use("/api/v1", mainRouter);
app.use("/api/v1/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
