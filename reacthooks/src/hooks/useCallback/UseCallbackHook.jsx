import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Todo from './Todo';

export const UseCallbackHook = () => {
    const [counter, setCounter] = useState(0);
    const [todo, setTodo] = useState([]);
    const onIncrementPress = () => {
        setCounter(prev => prev + 1)
    }
    // const addTodo = useCallback(() => {
    //     setTodo(prev => [...prev, 'new todo'])
    // }, [todo])

    const addTodo = useCallback(() => {
      setTodo(prev => [...prev, 'new todo']);
    }, [todo])

    // const addTodo = () => {
    //   setTodo(prev => [...prev, 'new todo'])
    // }
  return (
    <div style={{backgroundColor: 'white', height: '100vh',}}>
        <div>Count: {counter}</div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onIncrementPress}>Increment</button>
        <hr></hr>
        <Todo todos={todo} addTodo={addTodo}/>
    </div>
  )
}
