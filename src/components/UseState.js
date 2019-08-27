import React, {useState} from 'react';
import '../App.css';

const UseState = () => {
    const [test, setTest] = useState('initial value');
  
    return (
        <div>
            <h1>useState</h1>
            <p>{test}</p>
            <input onChange={(e) => {setTest(e.target.value)}} />
        </div>
    )
}

export default UseState;