const express = require("express");
const dotenv = require("dotenv");
//const logger = require("./middleware/logger");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");



//Load env variables
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB()

//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

//app.use(logger);

//Body parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan("dev"));
}

//Mount Router
app.use("/api/v1/bootcamps", bootcamps);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);