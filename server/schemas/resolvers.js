const { User, Event } = require('../models');

const resolvers = {
  Query: {
      // finds users and what is connected to them
    users : async () => {
      return await User.find({}).populate('events');
    },
      // finds eveents and what is connected to them
    events : async() => {
      return await Event.find({}).populate('users');
    },

    user : async (parent, { username }) => {
      return await User.findOne({ username }).populate('events');
    },
      // finds eveents and what is connected to them
    event : async(parent, {EventId}) => {
      return await Event.findOne({_id: EventId}).populate('users');
    }
  },
  Mutation: {
  }
}

module.exports = resolvers;