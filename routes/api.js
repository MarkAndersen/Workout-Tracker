const Workout = require("../models/workout");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/api/workouts", async ({ body }, res) => {
  try {
    const addWorkout = await Workout.create({ body });
    res.status(200).json(addWorkout);
    console.log(addWorkout, "POSTED");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/api/workouts", async (req, res) => {
  try {
    const getExercises = await Workout.aggregate([
      {
        $addFields: { totalDuration: { $sum: "$exercises.duration" } },
      },
    ]);
    console.log(getExercises);
    res.status(200).json(getExercises);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const getAllWorkouts = await Workout.aggregate([
      { $sort: { day: -1 } },
      { $limit: 7 },
      //This limit is plucking out the first seven workouts and not the last 7.
      //attemping to fix this by reversing the array and plucking the first 7.... this ends up reversing the graphs...
      { $sort: { day: 1 } },
      //so added a second sort command, this time reversing the order to render the graphics in a more traditional manner
      { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
      
    ]);

    res.status(200).json(getAllWorkouts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const updateWorkout = await Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    );
    console.log(updateWorkout, "PUT");
    res.json(updateWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
