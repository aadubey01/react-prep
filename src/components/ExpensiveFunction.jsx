import React from 'react'
import { useMemo } from 'react';

const ExpensiveFunction = ({num}) => {
    const slowFunction =(n)=>{
        console.log("Expensive function running");
        for(let i =0;i<1e9;i++){}
        return n*2;
    }

    const result = useMemo(()=>slowFunction(num),[num])


  return (
    <p>
        result:{result};
    </p>
  )
}

export default ExpensiveFunction