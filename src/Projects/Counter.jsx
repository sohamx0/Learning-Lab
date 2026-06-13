import { useState } from 'react'


export default function Counter() {
  const [count, setCount] = useState(0)
  function clicked() {
    setCount(count + 1)
  }
  return (
    <>
    <p>{count}</p>
    <button onClick={clicked}>
      Click me
    </button>
    </>
  );
}
