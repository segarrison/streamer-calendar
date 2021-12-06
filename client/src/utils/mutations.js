import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
     
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($host: ID!, $event_name: String!, $event_desc: String, $event_date: String!, $event_time: String!, $num_of_part: Int!, $participants: [ID!]){
    addEvent(host: $host, event_name: $event_name, event_desc: $event_desc, event_date: $event_date, event_time: $event_time, num_of_part: $num_of_part, participants: [$participants])
  }`