require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Start listenin on port 3000!");
    });
  })
  .catch((err) => console.log(err));
