const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

//routes
const userRoute = require("../Washtog_backend/routes/user");
const popularItemsRoute = require("../Washtog_backend/routes/popularItems");
const reviewsRoute = require("../Washtog_backend/routes/reviews");
const serviceRoute = require("../Washtog_backend/routes/services");
const addsRouter = require("../Washtog_backend/routes/adds");
const dryCleaningService = require("../Washtog_backend/routes/Services/dryCleaningService")

const docs = require("../Washtog_backend/docs");
const joi = require("joi");

//config env
require("dotenv").config();

swaggerDocument = require("./swagger.json");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Washtog Api",
      description: "Washtog Api Documentation",
      contact: {
        name: "Wielabs.com",
      },
      servers: ["https://localhost:2323"],
    },
  },
  apis: ["app.js", ".routes/*.js"],
};

const swaggerDoc = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//Connect to DB
let dbURI = process.env.PROD_MONGO_URI;

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

//swager

//routes
app.use("/api/v1", userRoute);
app.use("/api/v1/reviews", reviewsRoute);
app.use("/api/v1/popularItems", popularItemsRoute);
app.use("/api/v1/services", serviceRoute);
app.use("/api/v1/adds", addsRouter);

//services routes
app.use("/api/v1/services",dryCleaningService)

app.get("/api/v1/getReviews", (req, res) => {
  console.log(req.headers.authorization);
});

app.get("/status", (req, res) => {
  return res.send({
    status: "alive",
  });
});

module.exports = app;
