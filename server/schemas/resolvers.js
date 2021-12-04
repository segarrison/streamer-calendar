const { User, Event } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //find all users
    users: async () => {
      return await User.find({});
    },

    //find hostedEvents (by user)
    hostedEvents: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
        .populate("hosted_events")
        .populate({ path: "hosted_events", populate: "participants" });
    },
    //find particpantEvents (by user)

    // finds eveents and what is connected to them
    // events : async() => {
    //   return await Event.find({}).populate('users');
    // },

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
      return { user, token };
    },
    //addEvent
    //deleteEvent
    //removeUser (delete user as participant of event)
  },
};

module.exports = resolvers;
