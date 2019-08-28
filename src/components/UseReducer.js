import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h3>{state}</h3>
            <button onClick={() => dispatch({type: 'INCREASE'})}>increase</button>
            <button onClick={() => dispatch({type: 'DECREASE'})}>decrease</button>
        </div>
    )
}

export default UseReducer;