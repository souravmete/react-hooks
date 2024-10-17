import React, { useContext } from 'react'
import { DataContext } from './Counter'

const CounterUI = () => {
    const {count,handeladd,handelSub}=useContext(DataContext)
  return (
    <>
        <h1>{count}</h1>
        <button onClick={handeladd}>Add</button>
        <button onClick={handelSub}>Sub</button>
    </>
  )
}

export default CounterUI