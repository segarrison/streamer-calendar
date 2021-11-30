const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    userCreated: string!
    hosted_events:[Hosted Events]
  }

  type  Hosted Events{
    _id: ID!
    name: String!
    event_date: String!
    event_time:string!
    event_creation: Date!
    description: String
    participants:[Joined Events]
  }


  type Query {
  }

  type Mutation {

  }
`;

module.exports = typeDefs;