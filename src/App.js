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
  const [string, setString] = useState('');
  const [stringList, setStringList] = useState([]);

  const insert = () => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  }

  const sum = (list) => {
    console.log('문자들을 합치는 중입니다...');
    let stringSum = '';
    for(let value of list) {
      stringSum += value + ' ';
    }
    return stringSum;
  }

  const result = useMemo(() => sum(stringList), [stringList]);

  return (
    <div>
      <input type='text' onChange={(e) => {setString(e.target.value)}}/>
      <button onClick={insert}>문자열 추가</button>
      {result}
    </div>
  )
}

const UseCallbackExample = () => {
  const [string, setString] = useState('');
  const [stringList, setStringList] = useState([]);

  const change = useCallback((e) => {
    setString(e.target.value);
  }, []);

  const insert = useCallback(() => {
    const newList = stringList.slice();
    newList.push(string);
    setStringList(newList);
  }, [string, stringList]);

  const sum = useCallback((list) => {
    console.log('문자들을 합치는 중입니다...');
    let stringSum = '';
    for(let value of list) {
      stringSum += value + ' ';
    }
    return stringSum;
  }, []);

  const result = useMemo(() => sum(stringList), [stringList, sum]);

  return (
    <div>
      <input type='text' onChange={change}/>
      <button onClick={insert}>문자열 추가</button>
      {result}
    </div>
  )
}

const UseRefExample = () => {
  return (
    <div>

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
      <UseCallbackExample />
      <UseRefExample />
    </div>
  );
}

export default App;
