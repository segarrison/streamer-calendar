import React from 'react';

const HostList = ({ hostedEvents, title }) => {
    if (!hostedEvents.length){
        return <h3>Not hosting anything yet!</h3>
    }


return (
    <div>
        <h3>{hTitle}</h3>
        {hostedEvents && hostedEvents.map((event) =>(
            <div key={event.hosted_events._id} className = "card">
            <h4 className="card-header">
                {event.hosted_events.event_name}
            </h4>
            <div className = "card-body">
                <p>{event.hosted_events.event_desc}</p>
                <p>{event.hosted_events.event_date}</p>
                <p>{event.hosted_events.event_time}</p>
                //TODO: participants array
            </div>
            </div>
        ))}
    </div>
)
}
export default HostList;