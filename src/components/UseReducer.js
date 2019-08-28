import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE':
            return action.value;
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 'initial state');

    return (
        <div>
            <h1>useReducer</h1>
            <h3>{state}</h3>
            <input type='text' value={state} onChange={(e) => dispatch({value: e.target.value, type: 'CHANGE'})} />
        </div>
    )
}

export default UseReducer;