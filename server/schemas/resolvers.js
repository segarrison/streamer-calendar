const { User, Event } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
  Query: {

    users : async () => {
      return await User.find({});
    },
      // finds eveents and what is connected to them
    events : async() => {
      return await Event.find({}).populate('users');
    },

    user : async (parent, { username }) => {
      return await User.findOne({ username }).populate('events');
    },
      // finds eveents and what is connected to them
    event : async(parent, { EventId }) => {
      return await Event.findOne({_id: EventId}).populate('users');
    }
  },
  Mutation: {
      addUser: async (parent, args) => {
          const user = await User.create(args);
          // const token = signToken(user);
        console.log(user);
          // return {user, token}
          return {user}
      },
      login: async (parent, {username, password}) =>{
          const user = await User.findOne({ username });
          if (!user) {
              throw new AuthenticationError("Incorrect username")
          } 
          
          const passwordCheck = await user.isCorrectPassword(password);
          if (!passwordCheck) {
              throw new AuthenticationError("Incorrect password")
          }

          const token = signToken(user);
          return {user, token};
           
      }
  }
}

module.exports = resolvers;