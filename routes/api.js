const Workout = require("../models/workout");
const router = require("express").Router();
const mongoose = require("mongoose");

//doesn't seem to add all fields
router.post("/api/workouts", async ({ body }, res) => {
  try {
    const addWorkout = await Workout.create({ exercises: body });
    res.status(200).json(addWorkout);
    console.log('I POSTed correctly')
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

//below is an aggregator, will be likely what we use

// router.get("/api/workouts", async (req, res) => {
//     try {
//       const getAllWorkouts = await Workout.aggregate([{ 
//           $group: { day: {$dateToString: { format: "%Y-%M-%D", date: "$date"}}},
//           $addFields: { totalDuration: {$sum: "$duration"} } } ]);
//       res.status(200).json(getAllWorkouts);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

router.get("/api/workouts/:id", async (req, res) => {
  try {
    const oneWorkout = await Workout.findById(req.params.id);

    res.json(oneWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const updateWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      { exercises: req.body },
      { new: true }
    );
    console.log('I PUT correctly')
    res.json(updateWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
