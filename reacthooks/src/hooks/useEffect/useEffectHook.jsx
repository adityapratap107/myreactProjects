import React, {useEffect, useState} from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [doubleCount, setDoubleCount] = useState(0)
    useEffect(() => {
        console.log('This is the first effect');
    }, [doubleCount])
    const onIncrementClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    const onDoubleCount = () => {
        setDoubleCount(prevCount => prevCount + 2);
    }
    return (

        <div style={{backgroundColor: 'white', height: '100vh',}}>
            <p>count: {count} </p>
            <button onClick={onIncrementClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increment</button>
            <p>double count: {doubleCount} </p>

            <button onClick={onDoubleCount} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Double Count</button>
        </div>
    )
}

export default UseEffectHook;