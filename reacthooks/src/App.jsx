import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tailwind from './tailwind/Tailwind'

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <h1>count {count}</h1>
      </div>
      <div className="card">
        <button onClick={() => {
          // setCount((count) => count + 1)
          // setCount((count) => count + 1)
          // setCount((count) => count + 1)
          // setCount((count) => count + 1)

          setCount(count + 1)
          setCount(count + 1)
          setCount(count + 1)
          setCount(count + 1)
        }}>
         Add Value
        </button>
        <button onClick={() => {
          if(count > 0){
            setCount((count) => count - 1)
          }
        }}>
         Remove Value
        </button>
       
      </div>
     



    {/* <Tailwind/> */}
    </>
  )
}

export default App















// if(count > 0) {
//   setCount((count) => count - 1)
// }