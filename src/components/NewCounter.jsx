import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { increment,decrement,incrementByAmount } from '../redux/counterSlice'

const NewCounter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();


  return (
    <div>
        <h2>Counter:{count}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>Add 5</button>
    </div>
  )
}

export default NewCounter