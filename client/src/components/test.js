import React, { useState } from "react";

const Test =()=>{
    const [number, setNumber] = useState(`
    2021

    `)
return{
    number,
    render:(
        <div>
            <button>{number}</button>
        </div>
    )
}
}

export default Test;

