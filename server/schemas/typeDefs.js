const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    password: String
    email: String
    userCreated: String!
    hosted_events:[Events],
    part_events: [Events]
  }

  type Events{
    _id: ID!
    host: User
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
    event:[Events]
  }

  type Auth {
    token: ID!
    user: User
}

  type Mutation {
      addUser(username: String, password: String, email: String): User
      login(username: String!, password: String!): User

  }
`;

module.exports = typeDefs;