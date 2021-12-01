const { User, Event } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
  Query: {
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