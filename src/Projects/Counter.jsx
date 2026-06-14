import { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  function reset() {
    setCount(0)
  }
  return (
    <>
      <div className="container">
        <p>{count}</p>
        <div className='btn-container'>
          <button className="btn" onClick={increment}>
            increment
          </button>
          <button className="btn" onClick={decrement}>
            decrement
          </button>
          <button className="btn" onClick={reset}>
            reset
          </button>
        </div>
      </div>
      </>
  );
}
