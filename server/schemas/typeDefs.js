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
    name: String!
    event_date: String!
    event_time:String!
    event_creation: String!
    description: String
    participants:[User]
  }


  type Query {
    users:[User]
    events:[Events]
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;