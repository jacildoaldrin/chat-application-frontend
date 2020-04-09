import React from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import Moment from "moment";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      show: false,
      currId: "",
      newRoomName: "",
      newRoomStatus: "active",
      myRooms: [],
    };
  }
  handleChangeRoom(event) {
    this.setState({
      newRoomName: event.target.value,
    });
    console.log(event.target.value);
  }

  handleChangeStatus(event) {
    this.setState({
      newRoomStatus: event.target.value,
    });
    console.log(event.target.value);
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleShow(_id, roomNameArg, roomStatusArg) {
    this.setState({
      show: true,
      currId: _id,
      newRoomName: roomNameArg,
      newRoomStatus: roomStatusArg,
    });
  }

  componentDidMount() {
    this.fetchRooms();
  }

  fetchRooms() {
    axios.get("https://chat-application-backend.herokuapp.com/room/room-list").then((res) => {
      this.setState({
        myRooms: res.data,
      });
    });
  }

  editRoom(roomId, roomName, roomStatus) {
    //Get Current Date and Time
    var date = Date(Date.now());
    var dateStringify = date.toString();
    axios
      .put(
        `https://chat-application-backend.herokuapp.com/room/room-status-update/${roomId}`,
        {
          roomname: roomName,
          edited: dateStringify,
          status: roomStatus,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        alert("A Room was edited!");
        window.location.reload();
      });
  }

  renderTableData() {
    return this.state.myRooms.map((myRoom, index) => {
      const { _id, roomname, created, edited, status } = myRoom; //destructuring

      return (
        <tr key={_id}>
          <td>{_id}</td>
          <td>{roomname}</td>
          <td>{Moment(new Date(created)).format("MM/DD/YYYY - hh:mm:ss a")}</td>
          <td>{edited ? Moment(new Date(edited)).format("MM/DD/YYYY - hh:mm:ss a") : "Not Applicable"}</td>
          <td>{status}</td>
          <td>
            <Button
              variant="primary"
              onClick={() => this.handleShow(_id, roomname, status)}
            >
              Edit
            </Button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3em",
        }}
      >
        <Table striped bordered hover variant="dark" id="students">
          <thead>
            <tr>
              <th>ID</th>
              <th>Room</th>
              <th>Create Date</th>
              <th>Edit Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </Table>
        <br></br>
        <Modal show={this.state.show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={() =>
                this.editRoom(
                  this.state.currId,
                  this.state.newRoomName,
                  this.state.newRoomStatus
                )
              }
            >
              <Form.Group controlId="roomName">
                <Form.Label>Room Name</Form.Label>
                <Form.Control
                  value={this.state.newRoomName}
                  onChange={(event) => this.handleChangeRoom(event)}
                  type="text"
                  placeholder="Enter Room Here"
                  required
                />
              </Form.Group>
              <Form.Group controlId="roomStatus">
                <Form.Label>Room Status</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.newRoomStatus}
                  onChange={(event) => this.handleChangeStatus(event)}
                >
                  <option>active</option>
                  <option>inactive</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Rooms;
