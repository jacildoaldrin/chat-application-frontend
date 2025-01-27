import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Events from "./events";
import Messages from "./messages";
import "./subcomponents.css";
import Room from "./Room";

class AdminTabs extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  state = {};
  render() {
    return (
      <>
        <Tabs
          className="myTabs"
          defaultActiveKey="rooms"
          id="uncontrolled-tab-example"
        >
          <Tab className="myTab" eventKey="eventHistory" title="Event History">
            <Events />
          </Tab>
          <Tab eventKey="messageHistory" title="Message History">
            <Messages />
          </Tab>
          <Tab eventKey="rooms" title="Rooms">
            <Room />
          </Tab>
        </Tabs>
      </>
    );
  }
}

export default AdminTabs;
