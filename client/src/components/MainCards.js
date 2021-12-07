import React, { useState } from "react";
import { PARTICIPANT_EVENTS } from "../utils/queries";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";

const MainCards =()=>{

    let { particpantData, loading } = useQuery( PARTICIPANT_EVENTS );
    const [part_overflow, setPart_overflow] = useState(1);
    // actual joined events events
// -----------------------------------------------------------
    let isPart = particpantData?.participantEvents.part_events || 1;
    if (loading){
      return <div>still loading</div>
    }
//======================================================================================================
    // hardcoded joined events
    // let isPart = ["joe","show","moes","low","tow", "no", "stow", 'flow', 'wow', 'wow', 'now', 'spow']
    // let isPart = 1;
    // console.log(isPart)
//--------------------------------------------------------------------------------------------------- 
    let overFlow;

    if(!isPart === 1)
    if(isPart.length > 9){
        overFlow = isPart.length - 9
    }
    console.log(overFlow)


return(
        <div style = {{display:'flex', justifyContent:'space-around'}}>
            <Card style = {{width: '30rem'}} > 
                <Card.Header style={{display:'flex',justifyContent:'center'}}>Hosted Events</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card style = {{width: '30rem', height:'26rem'}} onClick={() => setPart_overflow(overFlow)}> 
                <Card.Header style={{display:'flex',justifyContent:'center'}}>Joined Events</Card.Header>
                <ListGroup variant="flush">
                    {/* create a loop for the data and create a min and max lim so the card
                    can only be 26rem */}
                    { !(isPart === 1)?(
                    <>
                    {(isPart < 8)?(
                        <>
                        {isPart.map((joinedEvents, index) => {
                        return <ListGroup.Item>{joinedEvents}</ListGroup.Item> 
                        })}
                        </>
                    ):(
                        <>
                        {isPart.map((joinedEvents, index) => {
                        if(index < 8)
                        return <ListGroup.Item>{joinedEvents}</ListGroup.Item> 
                        })}
                        <ListGroup.Item>+{part_overflow} more</ListGroup.Item>
                        </>
                    )}

                    </>
                    ):(
                    <>
                    <ListGroup.Item style={{display:'flex', justifyContent:'center', alignItems:'center'}}>no events joined yet</ListGroup.Item>
                    </>
                    )}

                </ListGroup>
            </Card>
        </div>
    )

}

export default MainCards;

