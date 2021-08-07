const Workout = require("../models/workout");
const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//DB seeded, gets all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/:id", (req, res) => {
    Workout.findOne(req.params._id)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// router.put("/api/workout", (req, res) => {
//     Workout.findById(req.params.id)
//     .then(dbWorkout => {
//         Workout.findOneAndUpdate(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     })
// });


module.exports = router;