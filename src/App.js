import React, {useEffect, useState, useMemo, useCallback, useRef, useReducer, useContext} from 'react';
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

const UseEffectExample = () => {
  const [test, setTest] = useState('initial value');
  const [test2, setTest2] = useState('initial value');
  useEffect(() => {
    console.log('state가 변경될 때 마다 호출!');
  })

  useEffect(() => {
    console.log('test state에 대해서만 호출!')
  }, [test])

  useEffect(() => {
    console.log('test2 state에 대해서만 호출!')
  }, [test2])

  useEffect(() => {
    console.log('첫 렌더링에만 호출')
  }, [])

  return (
    <div>
      <p>{test}</p>
      <p>{test2}</p>
      <input onChange={(e) => {setTest(e.target.value)}} />
      <input onChange={(e) => {setTest2(e.target.value)}} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <UseStateExample />
      <UseEffectExample />
    </div>
  );
}

export default App;
