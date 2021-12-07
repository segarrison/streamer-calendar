import React from "react";

const PartList = ({ participantEvents, title }) => {
  if (!participantEvents.length) {
    return <h3>Not participating in anything yet!</h3>;
  }

  return (
    <div>
      <h3>{pTitle}</h3>
      {participantEvents &&
        participantEvents.map((event) => (
          <div key={event.part_events._id} className="card">
            <h4 className="card-header">{event.part_events.event_name}</h4>
            <div className="card-body">
              <p>{event.part_events.host.username}</p>
              <p>{event.part_events.event_desc}</p>
              <p>{event.part_events.event_date}</p>
              <p>{event.part_events.event_time}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default PartList;
