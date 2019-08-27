import React, {useContext, createContext} from 'react';
import '../App.css';

const TestContext = createContext();
const TestContext2 = createContext();

const ContextProvider = () => {
    const hello = useContext(TestContext);
    const world = useContext(TestContext2);

    console.log(`context 1 = ${hello}, context 2 = ${world}`)

    return (
        <div>
            <h1>useContext</h1>
            {hello + ' ' + world}
        </div>
    )
}

const UseContext = () => {
    return (
        <TestContext.Provider value='hello'>
            <TestContext2.Provider value='world!'>
                <ContextProvider />
            </TestContext2.Provider>
        </TestContext.Provider>
    )
}

export default UseContext;