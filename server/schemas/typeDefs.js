const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    hosted_events:[Events]
    part_events: [Events]
  }

  type Events{
    _id: ID
    host: User
    event_name: String
    event_desc: String
    event_date: String
    event_time: String
    num_of_part: Int
    participants:[User] 
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    Events:[Events]
    Events(event_name: String!): Events
  }

  type Auth {
    token: ID!
    user: User
}

  type Mutation {
      newUser(username: String!, password: String!, email: String!): Auth
      login(username: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;