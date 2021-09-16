import React, { useCallback, useMemo, useState } from "react";
import { TestCall } from "./TestCall";


const Memos = () => {

    const [num , setNum] = useState(0);
    const [value, setValue] = useState(0);
    
    const [count, setCount] = useState(0);
    
    const [increment, setIncrement] = useState(0);

    // useMemo
    function calculate(x){
        console.log('calculation done!', x*100);
        return x*100;
    }
    useMemo( () => calculate(value), [value]);
    //

    // useCallback:
    const callbackCount = useCallback (() => {
        setCount(c => c + increment);
    },
    [increment]
    );

    //

    return (
        <div>
        <h1>Memo/Callback Example</h1>

        <section>
            <input type="text" value={num} onChange={(event) => setNum(parseInt(event.target.value))} />
            <button onClick={() => setValue(num)}>Compute</button>
        </section>

        <hr/>
        <section>
            <TestCall increment={callbackCount}/>
            <p>useCallback Value: {count} </p>

            <button onClick={ 
                () => {
                    setIncrement(increment+10);
                    console.log(increment)
                }
            }>
                Add 10
            </button>
        </section>
        </div>

    );

}

export default Memos;
