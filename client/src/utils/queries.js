import gql from '@apollo/client';

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
