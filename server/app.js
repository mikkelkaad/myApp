require("dotenv").config();
require("./database");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const breedsRouter = require("./routes/breeds");
const petsRouter = require("./routes/pets");
const speciesRouter = require("./routes/species");
const sizesRouter = require("./routes/sizes");
const findfoodRouter = require("./routes/findfood");
const foodRouter = require("./routes/food");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/breeds", breedsRouter);
app.use("/pets", petsRouter);
app.use("/sizes", sizesRouter);
app.use("/species", speciesRouter);
app.use("/findfood", findfoodRouter);
app.use("/food", foodRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
