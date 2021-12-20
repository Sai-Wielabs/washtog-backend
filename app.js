const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//routes
const userRoute = require("../Washtog_backend/routes/user");
const popularItemsRoute = require("../Washtog_backend/routes/popularItems");
const reviewsRoute = require("../Washtog_backend/routes/reviews");
const serviceRoute = require("../Washtog_backend/routes/services");
const addsRouter = require("../Washtog_backend/routes/adds");
//config env
require("dotenv").config();

//Connect to DB
let dbURI = process.env.DB_CONNECTION_DEV;
// if (process.env.NODE_ENV === "development") {
//   dbURI = process.env.DB_CONNECTION_DEV;
// }
// if (process.env.NODE_ENV === "production") {
//   dbURI = process.env.DB_CONNECTION_PROD;
// }

mongoose.connect(
  dbURI,

  () => {
    app.listen(process.env.PORT);
    console.log("Connected to DB");
  }
);

//middleware & static files
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

//routes
app.use("/api/v1", userRoute);
app.use("/api/v1/reviews", reviewsRoute);
app.use("/api/v1/popularItems", popularItemsRoute);
app.use("/api/v1/services/", serviceRoute);
app.use("/api/v1/adds", addsRouter);

app.get("/api/v1/getReviews", (req, res) => {
  console.log(req.headers.authorization);
});

app.get("/status", (req, res) => {
  return res.send({
    status: "alive",
  });
});

module.exports = app;
