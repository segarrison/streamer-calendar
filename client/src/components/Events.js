import react from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const  =  || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Upcoming Events</h1>
      </div>
      <div className="card-body m-5">
        <h2></h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {.map(() => {
              return (
                <li key={._id}>
                  <Link to={{ pathname: `` }}>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      </div>)};

export default Home;