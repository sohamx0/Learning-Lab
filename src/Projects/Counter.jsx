import { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  function increament() {
    setCount(count + 1)
  }
  function decreament() {
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
          <button className="btn" onClick={increament}>
            increament
          </button>
          <button className="btn" onClick={decreament}>
            decreament
          </button>
          <button className="btn" onClick={reset}>
            reset
          </button>
        </div>
      </div>
      </>
  );
}
