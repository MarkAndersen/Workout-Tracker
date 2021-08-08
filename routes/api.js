const Workout = require("../models/workout");
const router = require("express").Router();
const mongoose = require("mongoose");

//doesn't seem to add all fields
router.post("/api/workouts", async (req, res) => {
  try {
    const addWorkout = await Workout.create({ exercises: req.body });
    res.status(200).json(addWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DB seeded, gets all workouts
router.get("/api/workouts", async (req, res) => {
  try {
    const getAllWorkouts = await Workout.find({});
    res.status(200).json(getAllWorkouts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/api/workouts/:id", async (req, res) => {
  try {
    const oneWorkout = await Workout.findById({ _id: req.params.id });

    res.json(dbWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

//updates but doesn't add all fields...
router.put("/api/workouts/:id", async (req, res) => {
  try {
    const updateWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      { exercises: req.body },
      { new: true }
    );
    res.json(updateWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
