import gql from '@apollo/client';


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
