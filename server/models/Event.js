const { Schema, model } = require("mongoose");

const EventSchema = new Schema({
  host: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  event_name: {
    type: String,
    required: true,
    trim: true,
  },
  event_desc: {
    type: String,
    required: true,
    trim: true,
  },
  event_date: {
    type: String,
    required: true,
  },
  event_time: {
    type: String,
    required: true,
  },
  num_of_part: {
    type: Number,
    required: true,
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  eventCreated: {
    type: Date,
    default: Date.now,
  },
});

const Event = model("Event", EventSchema);

module.exports = Event;
