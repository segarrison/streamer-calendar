import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
     
      
        _id
        username
     
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String, 
    $password: String, 
    $email: String
    ) {
    addUser(
      username: $username, 
      password: $password, 
      email: $email) {
      
      
        _id
        username
      
    }
  }
`;