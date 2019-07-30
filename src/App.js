import React, {useEffect, useState, useMemo, useCallback, useRef} from 'react';
import './App.css';

const UseStateExample = () => {
  const [test, setTest] = useState('initial value');

  return (
    <div>
      <p>{test}</p>
      <input onChange={(e) => {setTest(e.target.value)}} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <UseStateExample />
    </div>
  );
}

export default App;
