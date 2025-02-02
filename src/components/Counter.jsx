import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        console.log("Effect runs after every render! Count:",count);
    },[])
//  useEffect is used to do the side effects such as data fetching subscription and it renders every time the site renders!a and does not return anything....
//If we give an dependency array to the useEffects with the dependency it will only run when depedency changes and 
// *if the dependecy array is empty it will run only once. in the begining

  return (
    <div><h4>Counter:{count}</h4>

    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Counter

// See , state and prop both are objects but the differece between is the mutability : props are immutable and states are mutable so if we only use props we can not modify them thus states come into picture.
//states are managed within the components itself.