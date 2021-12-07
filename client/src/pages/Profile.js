import React from "react";
import { useQuery } from "@apollo/client";
import HostList from "../components/HostList";
import EventForm from "../components/EventForm";
import { HOSTED_EVENTS } from "../utils/queries";

const Profile = () => {
  const user = localStorage.getItem("user");
  const userId = user._id;
  const { loading, data } = useQuery(HOSTED_EVENTS, {
    variables: { userId },
  });
  const hostedEvents = data?.hostedEvents || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <EventForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <HostList
              hostedEvents={hostedEvents}
              title="Events You're Hosting:"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;
