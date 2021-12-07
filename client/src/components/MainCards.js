import React, { useState } from "react";
import HostedCard from "./HostedCard";
import JoinedCard from "./JoinedCard";


const MainCards =()=>{

return(
        <div style = {{display:'flex', justifyContent:'space-around'}}>
            <HostedCard/>
            <JoinedCard/>
        </div>
    )

}

export default MainCards;

