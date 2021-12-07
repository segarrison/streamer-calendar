import React from "react";
import { useQuery } from "@apollo/client";
import HostList from "../components/HostList";
import PartList from "../components/PartList";
import EventForm from "../components/EventForm";
import { USER } from "../utils/queries";

const Profile = () => {
  const userId = localStorage.getItem("user");

  console.log(userId);
  const { loading, data } = useQuery(USER, {
    variables: { userId },
  });
  console.log(data);
  const user = data?.user || [];
  console.log(user);

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          
        >
          <EventForm />
        </div>
        <div className="row justify-center">
        <div className="col-4 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <HostList user={user} title="Events You're Hosting:" />
          )}
        </div>
        <div className="col-4 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PartList user={user} title="Events You're Participating In:" />
          )}
        </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
