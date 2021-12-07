import React, { useState } from "react";
import { HOSTED_EVENTS } from "../utils/queries";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { useQuery } from "@apollo/client";

const HostedCard = ()=>{

    const { HostedData, loading } = useQuery( HOSTED_EVENTS, {
        variables: { userId: localStorage.getItem("user")}
    } )
    console.log(HostedData)
    console.log(localStorage.getItem("user"))
    const [part_overflow, setPart_overflow] = useState(1);
    let isPart = HostedData?.hostedEvents || 1;
    // hard coded joined events 
    isPart = ["pubg 8am 12/15/21","apex 9:30pm 12/15/21","D&D 11:00am 12/15/21","tf2 championship 10pm 12/15/21","deadcells idk the time","rainbow 6","wiisports","ark","halo infinite","wow","wow"]
    if (loading){
      return <div>still loading</div>
    }
    let overFlow;

    if(!isPart === 1)
    if(isPart.length > 9){
        overFlow = isPart.length - 9
    }
return(
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
    )

}

export default HostedCard;