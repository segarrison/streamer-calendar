const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    userCreated: String!
    hosted_events:[Events]
  }

  type Events{
    _id: ID!
    host: String!
    event_name: String!
    event_desc: String!
    event_date: String!
    event_time: String!
    num_of_part: Int!
    participants:[User] 
  }

  type Query {
    users:[User]
    events:[Events]
    user:[User]
    user:[Events]
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