import React from 'react';

const HostList = ({ user, title }) => {
  
    const hosted_events = user?.hosted_events || [];
  if (!hosted_events.length){
        return (
            <>
            <h3>{title}</h3>
        <h4>Not hosting anything yet!</h4>
        </>)
    }
return (
    <div>
        <h3>{title}</h3>
        {hosted_events && hosted_events.map((event) =>(
            <div key={event._id} className = "card">
            <h4 className="card-header">
                {event.event_name}
            </h4>
            <div className = "card-body">
                <p>{event.event_desc}</p>
                <p>{event.event_date}</p>
                <p>{event.event_time}</p>
            
            </div>
            </div>
        ))}
    </div>
)
}
export default HostList;