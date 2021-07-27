const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    exercises:
        {
            type: {
                  type: String,
                  required: "Resistance, or cardio?"  
            },
            name: {
                type: String,
                trim: true,
                required: "What was the exercise?"
            },
            duration: {
                type: Number,
                required: "How long did you exercise for?"
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number

        }



});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


//I think this is incorrect.