const { User, Event } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //find all users
    //can't populate the same path like this
    users: async () => {
      return await User.find({})
        .populate("hosted_events")
        .populate( { path: "hosted_events", populate: "participants"})
        .populate("part_events")
        .populate([{ path: "part_events", populate: "host"},]);
        // .populate({ path: "part_events", populate: "participants" });
    },

    //find hostedEvents (by user)
    hostedEvents: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
        .populate("hosted_events")
        .populate({ path: "hosted_events", populate: "participants" });
    },
    //find user by id
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
        .populate("part_events")
        .populate({ path: "part_events", populate: "host" }).populate("hosted_events")
        .populate({ path: "hosted_events", populate: "participants" });
        // .populate({ path: "part_events", populate: "participants" });
    },
    //find particpantEvents (by user)
    //can't populate the same path like this
    participantEvents: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
        .populate("part_events")
        .populate({ path: "part_events", populate: "host" });
        // .populate({ path: "part_events", populate: "participants" });
    },

    // finds eveents and what is connected to them
    events: async () => {
      return await Event.find({}).populate("host").populate("participants");
    },
    //this doesn't work
    hostedByEvent: async (parent, { userId }) => {
      data = await Event.find({}).populate("host");
      user = await User.find({ _id: userId });
      console.log(user);
      console.log(data);
      return await Event.find({ host: { _id: userId } }).populate(
        "participants"
      );
      // return await Event.find({host: username }).populate("participants");
    },

    // user : async (parent, { username }) => {
    //   return await User.findOne({ username }).populate('events');
    // },
    // finds eveents and what is connected to them
    // event : async(parent, { EventId }) => {
    //   return await Event.findOne({_id: EventId}).populate('users');
    // }
  },
  Mutation: {
    addUser: async (parent, { username, password, email }) => {
      const user = await User.create({ username, password, email });
      const token = signToken(user);

      return { user, token };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("Incorrect username");
      }

      const passwordCheck = await user.isCorrectPassword(password);
      if (!passwordCheck) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);
      console.log(user);
      return { user, token };
    },
    addEvent: async (parent, args) => {
      console.log(args);
      userId = args.host;
      console.log(userId);
      const event = await Event.create(args);
      const eventId = event._id;
      const eventPart = event.participants;
      console.log(eventPart);
      const addHost = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { hosted_events: [eventId] } }
      );

      for (let i of eventPart) {
        console.log(i);
        const addPart = await User.findOneAndUpdate(
          { _id: i },
          { $push: { part_events: [eventId] } }
        );
        await addPart.save();
      }

      return { event, addHost };
    },

    //deleteEvent
    //removeUser (delete user as participant of event)
  },
};

module.exports = resolvers;
