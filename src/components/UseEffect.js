import React, {useEffect, useState} from 'react';
import '../App.css';

const UseEffect = () => {
    const [test, setTest] = useState('initial value');
    const [test2, setTest2] = useState('initial value');
    const [useEffectRender, setUseEffectRender] = useState(true);
  
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
            <h1>useEffect</h1>
            {useEffectRender && <div>
                <p>{test}</p>
                <p>{test2}</p>
                <input onChange={(e) => {setTest(e.target.value)}} />
                <input onChange={(e) => {setTest2(e.target.value)}} />
            </div>}
            <button onClick={() => {setUseEffectRender(!useEffectRender)}}>마지막 언마운트 호출하기!</button>
        </div>
    )
}

export default UseEffect;