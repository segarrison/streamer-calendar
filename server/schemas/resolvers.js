const { User, Event } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
  Query: {

    users : async () => {
      return await User.find({}).populate('hosted_events');
    },
      // finds events and what is connected to them
    events : async() => {
      return await Event.find({}).populate('host');
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
      addUser: async (parent, {username, password, email}) => {
          const user = await User.create(args);
          const token = signToken(user);

          return {user, token}
      },
      login: async (parent, {username, password}) => {
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
           
      },
      addEvent: async (parent, args) => {
        const event = await Event.create(args);

        return event;
      },
      addEventTest:  async (parent, args) => {
        const event = await Event.create(args);

        return event;
      },
      addParticipants: async (parent, {eventId, userObjectID}) => {
        const event = await Event.findByIdAndUpdate({_id: eventId },
          {$push: {participants: userObjectID}},
          {new:true}
          );

        return event;
      },
  }
}

module.exports = resolvers;