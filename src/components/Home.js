import React from 'react';
import {A} from 'hookrouter';

const Home = () => {
    return (
        <div style={{height: '600px'}}>
            <h1>Home</h1>
            <h3><A href='/usestate'>1. useState</A></h3>
            <h3><A href='/useeffect'>2. useEffext</A></h3>
            <h3><A href='/usecontext'>3. useContext</A></h3>
            <h3><A href='/usememo'>4. useMemo</A></h3>
            <h3><A href='/usecallback'>5. useCallback</A></h3>
            <h3><A href='/useref'>6. useRef</A></h3>
            <h3><A href='/usereducer'>7. useReducer</A></h3>
            <h3><A href='/customhooks'>8. Custom Hooks</A></h3>
        </div>
    )
}

export default Home;