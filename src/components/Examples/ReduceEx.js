import React, { useReducer } from "react";

const ReduceEx = () => {
    const initialState = { count: 0 };

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 }
            default:
                throw new Error();
        }
    }

    function Counter(){
        // name dispatch can be anything
        const [state, dispatch] = useReducer(reducer,initialState);
        return(
            <div>
                
                <button onClick={() => dispatch({type:'decrement'})}>-</button>
                Count : {state.count}
                <button onClick={ () => dispatch({type: 'increment'})}>+</button>

            </div>
        );
    }

    return (
        <div className="reducer">
            {Counter()}
        </div>
    );
}

export default ReduceEx;