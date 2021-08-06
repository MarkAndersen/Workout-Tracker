const Workout = require("../models/workout");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/api/workout", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//DB seeded, gets all workouts
router.get("/api/workout", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
// router.put(());
// router.get(());

module.exports = router;