const mongoose = require("mongoose");

const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
            {
            //not sure if this is because 'type' is reserved but I had to delineate it as an object in order for this to work correctly.
            type:{
                type: String
            },
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number

        }
    ]
    
    

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
