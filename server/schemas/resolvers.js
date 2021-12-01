const { User, Event } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');

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
      newUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);

          return {user, token}
      },
      login: async (parent, {username, email, password}) =>{
          const user = await User.findOne({ email });
          if ()
      }
  }
}

module.exports = resolvers;