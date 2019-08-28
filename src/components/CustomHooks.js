import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE':
            return action.value;
        default:
            return state;
    }
}

const useInput = (type, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const onChange = (e) => {
        dispatch({type, value: e.target.value})
    }

    return [state, onChange]
}

const CustomHooks = () => {
    const [state, onChange] = useInput('CHANGE', 'initial state');

    return (
        <div>
            <h1>Custom Hooks</h1>
            <h3>{state}</h3>
            <input type='text' value={state} onChange={onChange} />
        </div>
    )
}

export default CustomHooks;