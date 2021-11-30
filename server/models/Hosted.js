const { Schema, model } = require("mongoose");

const HostedSchema = new Schema({
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
    type: Date,
    required: true,
  },
  participants: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  eventCreated: {
    type: Date,
    default: Date.now,
  },
});

const Hosted = model("Hosted", HostedSchema);

module.exports = Hosted;
