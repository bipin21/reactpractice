import React from "react";

export const TestCall = React.memo((props) => {
    console.log('callback memo');
    return <button onClick={props.increment}>Increment from Callback</button>
      
})