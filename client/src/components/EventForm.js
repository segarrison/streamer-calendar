import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalBody from "react-bootstrap/ModalBody";
import Button from "react-bootstrap/Button";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_EVENT } from "../utils/mutations";
import { USERS } from "../utils/queries";

export default function FormModal(props) {
  const [show, setShow] = useState(false);
  const [event_name, setEvent_name] = useState("");
  const [event_desc, setEvent_desc] = useState("");
  const [event_date, setEvent_date] = useState("");
  const [event_time, setEvent_time] = useState("");
  const [participants, setParticipants] = useState("");

  const [addEvent, { error }] = useMutation(ADD_EVENT);

  const { data, loading } = useQuery(USERS);
  console.log(data);

  const users = data?.users || [];
  if (loading){
    return <div>still loading</div>
  }
  //TODO:
  //1. Need to capture logged in user id to pass as host id on form submit
  //2. Need to create function that generates drop down for participants (tentative below, no idea if works since no user query connected)
  //2b. do we want one drop down where user can select multiple participants, or multiple dropdowns where use can add one?
  //3. Need to capture participants for submit
  //4. Need to fix handleSubmit for apollo/graphql

  // function userDropdowns(users, participants) {
  //   const mappedUsers = users.map(user => {
  //     const selected = participants.find(participants => participants === user._id) ? true: false;
  //     return <option value={user._id} selected={selected}>{user.username}</option>;
  //   });
  //   return mappedUsers;
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hitting save");
    // need to get the data/call addEvent in a try because async
    // try{}
    // props.onSubmit({
    //   event_name: event_name,
    //   event_desc: event_desc,
    //   event_date: event_date,
    //   event_time: event_time,
    // });
    try {
      const { data } = await addEvent({
        variables: {
          host: localStorage.getItem("user"),
          event_name: event_name,
          event_desc: event_desc,
          event_date: event_date,
          event_time: event_time,
          num_of_part: 2,
          participants: [
            "61aa8a5afbec4c856c02202d",
            "61aa83eebc20d38fb89a3d0e",
          ],
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
    setEvent_name("");
    setEvent_desc("");
    setEvent_date("");
    setEvent_time("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "event_name":
        return setEvent_name(value);
      case "event_desc":
        return setEvent_desc(value);
      case "event_date":
        return setEvent_date(value);
      case "event_time":
        return setEvent_time(value);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add An Event
      </Button>
      <Modal show={show} id="addEvent">
        <ModalDialog>
          <ModalHeader closeButton onClick={() => setShow(false)}>
            <ModalTitle>
              <i className="far fa-calendar-plus"></i> Make a New Event
            </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <form {...props} autoComplete="off">
              <div className="form-group">
                <label htmlFor="event_name">Event Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="event_name"
                  placeholder="Event Name"
                  value={event_name}
                  name="event_name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Participants</label>
                <select
                  multiple
                  className="form-control"
                  id="exampleFormControlSelect2"
                  onChange={handleChange}
                >
                  {users.map((user) => (
                    <option value={user._id}>{user.username}</option>
                  ))}
                  {/* {userDropdowns(props.users)} */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="event_date">Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="event_date"
                  value={event_date}
                  name="event_date"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="event_time">Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="event_time"
                  value={event_time}
                  name="event_time"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="event_desc">Description</label>
                <textarea
                  className="form-control"
                  id="event_desc"
                  rows="4"
                  value={event_desc}
                  name="event_desc"
                  onChange={handleChange}
                ></textarea>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setShow(false)} variant="secondary">
              Close
            </Button>
            <Button
              onClick={handleSubmit}
              variant="primary"
              className="newEvent"
            >
              Save Event
            </Button>
          </ModalFooter>
        </ModalDialog>
      </Modal>
    </>
  );
}
