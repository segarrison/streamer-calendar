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
  // const part = [];
  const [show, setShow] = useState(false);
  const [event_name, setEvent_name] = useState("");
  const [event_desc, setEvent_desc] = useState("");
  const [event_date, setEvent_date] = useState("");
  const [event_time, setEvent_time] = useState("");
  // const [num_of_part, setNum_of_part] = useState("");
  const [participants, setParticipants] = useState([]);
  const [participants1, setParticipants1] = useState("");
  const [participants2, setParticipants2] = useState("");
  const [participants3, setParticipants3] = useState("");
  const [participants4, setParticipants4] = useState("");

  const [addEvent, { error }] = useMutation(ADD_EVENT);

  const { data, loading } = useQuery(USERS);
  console.log(data);

  const users = data?.users || [];
  if (loading) {
    return <div>still loading</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hitting save");

    try {
      console.log("hello world");
      console.log(participants);
      const { data } = await addEvent({
        variables: {
          host: localStorage.getItem("user"),
          event_name: event_name,
          event_desc: event_desc,
          event_date: event_date,
          event_time: event_time,
          num_of_part: 4,
          participants: participants,
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
    setParticipants1("");
    setParticipants2("");
    setParticipants3("");
    setParticipants4("");
    setParticipants([]);
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

  const handleChangeP1 = (e) => {
    const { name, value } = e.target;
    return setParticipants((participants) => participants.concat(value));
  };
  const handleChangeP2 = (e) => {
    const { name, value } = e.target;
    return setParticipants((participants) => participants.concat(value));
  };
  const handleChangeP3 = (e) => {
    const { name, value } = e.target;
    return setParticipants((participants) => participants.concat(value));
  };
  const handleChangeP4 = (e) => {
    const { name, value } = e.target;
    return setParticipants((participants) => participants.concat(value));
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add An Event
      </Button>
      <Modal show={show} id="addEvent">
        <Modal.Dialog>
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <Modal.Title>
              <i className="far fa-calendar-plus"></i> Make a New Event
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                  className="form-control"
                  id="exampleFormControlSelect2"
                  name="participants1"
                  onChange={handleChangeP1}
                  value={participants1}
                >
                  {users.map((user) => (
                    <option value={user._id}>{user.username}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Participants</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect2"
                  name="participants2"
                  onChange={handleChangeP2}
                  value={participants2}
                >
                  {users.map((user) => (
                    <option value={user._id}>{user.username}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Participants</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect2"
                  name="participants3"
                  onChange={handleChangeP3}
                  value={participants3}
                >
                  {users.map((user) => (
                    <option value={user._id}>{user.username}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Participants</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect2"
                  name="participants4"
                  onChange={handleChangeP4}
                  value={participants4}
                >
                  {users.map((user) => (
                    <option value={user._id}>{user.username}</option>
                  ))}
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
          </Modal.Body>
          <Modal.Footer>
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
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
