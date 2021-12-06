import gql from "@apollo/client";

//currently doesn't exist in back end (add part_events?)
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      hosted_events {
        _id
        host
        event_name
        event_desc
        event_date
        event_time
        participants {
          _id
          username
        }
      }
    }
  }
`;

//find all users
export const USERS = gql`
  query users {
    _id
    username
    hosted_events {
      _id
      event_name
      event_desc
      event_date
      event_time
      participants {
        _id
        username
      }
    }
    part_events {
      _id
      event_name
      host {
        username
        _id
      }
      event_desc
      event_date
      event_time
    }
  }
`;

//Find the events a user is hosting
export const HOSTED_EVENTS = gql`
  query hostedEvents($userId: ID!) {
    hostedEvents(userId: $userId) {
      _id
      username
      hosted_events {
        event_name
        event_desc
        event_date
        event_time
        participants {
          username
        }
      }
    }
  }
`;

//find the events a user is participating in
export const PARTICIPANT_EVENTS = gql`
  query participantEvents($userId: ID!) {
    participantEvents(userId: $userId) {
      _id
      username
      part_events {
        _id
        event_name
        host {
          username
          _id
        }
        event_desc
        event_date
        event_time
      }
    }
  }
`;
