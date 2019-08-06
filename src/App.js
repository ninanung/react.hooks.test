import React, {useEffect, useState, useMemo, useCallback, useRef, useReducer, useContext, createContext} from 'react';
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
    return () => {
      console.log('모든 언마운트 시 호출!')
    }
  });

  useEffect(() => {
    console.log('test state에 대해서만 호출!')
  }, [test])

  useEffect(() => {
    console.log('test2 state에 대해서만 호출!')
  }, [test2])

  useEffect(() => {
    console.log('첫 렌더링에만 호출');
    return () => {
      console.log('마지막 언마운트 시 호출')
    }
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

const TestContext = createContext();
const TestContext2 = createContext();

const UseContextExample = () => {
  const hello = useContext(TestContext);
  const world = useContext(TestContext2);
  return (
    <div>
      {hello + ' ' + world}
    </div>
  )
}

const UseMemoExample = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const check = (insert1, insert2, insert3) => {
    console.log('sum이 변경될 때만 채점...');
    if(parseInt(insert1) + parseInt(insert2) === parseInt(insert3)) return 'correct';
    else return 'wrong';
  }

  const result = useMemo(() => check(number1, number2, sum), [sum])

  return (
    <div>
      <input onChange={(e) => {setNumber1(e.target.value)}} /> + <input onChange={(e) => {setNumber2(e.target.value)}} /> = <input onChange={(e) => {setSum(e.target.value)}} />
      {result}
    </div>
  )
}

function App() {
  const [useEffectRender, setUseEffectRender] = useState(true);

  return (
    <div className="App">
      <UseStateExample />
      {useEffectRender && <UseEffectExample />}
      <button onClick={() => {setUseEffectRender(!useEffectRender)}}>마지막 언마운트 호출하기!</button>
      <TestContext.Provider value='hello'>
        <TestContext2.Provider value='world!'>
          <UseContextExample />
        </TestContext2.Provider>
      </TestContext.Provider>
      <UseMemoExample />
    </div>
  );
}

export default App;
