import React, { useState } from "react";
import { PARTICIPANT_EVENTS } from "../utils/queries";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const MainCards =()=>{

return(
        <div style = {{display:'flex', justifyContent:'space-around'}}>
            <Card style = {{width: '30rem'}}> 
                <Card.Header style={{display:'flex',justifyContent:'center'}}>Hosted Events</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card style = {{width: '30rem'}}> 
                <Card.Header style={{display:'flex',justifyContent:'center'}}>Joined Events</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )

}

export default MainCards;

