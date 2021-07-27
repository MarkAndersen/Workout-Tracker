const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema ({
name: {
    type: String,
    trim: true,
    required: "What type of cardio exercise?"
},
duration: {
    type: Number,
    required: "How long did you train for?"
},
distance: {
    type: Number,
    required: "How far did you go?"
}

});





const Cardio = mongoose.model("cardio", cardioSchema);

module.exports = Cardio;