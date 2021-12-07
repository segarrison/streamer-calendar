const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    hosted_events: [Event]
    part_events: [Event]
  }

  type Event {
    _id: ID
    host: User
    event_name: String
    event_desc: String
    event_date: String
    event_time: String
    num_of_part: Int
    participants: [User]
  }

  type Query {
    users: [User]
    hostedEvents(userId: ID!): User
    participantEvents(userId: ID!): User
    user(userId: ID!): User
    events: [Event]
    hostedByEvent(userId: ID!): Event
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    login(username: String!, password: String!): Auth
    addEvent(
      host: ID!
      event_name: String!
      event_desc: String
      event_date: String!
      event_time: String!
      num_of_part: Int!
      participants: [ID!]
    ): Event
  }
`;

module.exports = typeDefs;
