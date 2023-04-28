const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const itemRouter = require("./routes/itemRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

//MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/v1/items", itemRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
