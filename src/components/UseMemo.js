import React, {useMemo, useState} from 'react';
import '../App.css';

const UseMemo = () => {
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
            <h1>useMemo</h1>
            <input type='text' onChange={(e) => {setString(e.target.value)}}/>
            <button onClick={insert}>문자열 추가</button>
            {result}
        </div>
    )
}

export default UseMemo;