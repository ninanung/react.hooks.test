import React, {useState, useRef, useCallback, useMemo} from 'react';
import  '../App.css';

const UseRef = () => {
    const [string, setString] = useState('');
    const [stringList, setStringList] = useState([]);
  
    // Here's useRef!
    const inputText = useRef();
  
    const change = useCallback((e) => {
        setString(e.target.value);
    }, []);
  
    const insert = useCallback(() => {
        const newList = stringList.slice();
        newList.push(string);
        setStringList(newList);
    
        // Here's focusing!
        inputText.current.focus();
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
            <h1>useRef</h1>
            <input type='text' ref={inputText} onChange={change}/>
            <button onClick={insert}>문자열 추가</button>
            {result}
        </div>
    )
}

export default UseRef