import React from "react";

const PartList = ({ user, title }) => {
  console.log(title);

  console.log(user);
  const part_events = user?.part_events || [];
  //   if (loading) {
  //     return <div>still loading</div>;
  //   }
  if (!part_events.length) {
    return (
      <>
        <h3>{title}</h3>
        <h4>Not participating in anything yet!</h4>
      </>
    );
  }
  console.log(part_events);

  return (
    <div>
      <h3>{title}</h3>
      {part_events &&
        part_events.map((event) => (
          <div key={event._id} className="card">
            <h4 className="card-header">{event.event_name}</h4>
            <div className="card-body">
            <h6>Host</h6>
              <p>{event.host.username}</p>
              <h6>Description</h6>
              <p>{event.event_desc}</p>
              <h6>Date</h6>
              <p>{event.event_date}</p>
              <h6>Time</h6>
              <p>{event.event_time}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default PartList;
