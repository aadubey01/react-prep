import React from 'react'
import { useEffect,useState } from 'react'

const Timer = () => {
    const [seconds,setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds(prec =>prev+1);
        },1000);
        return ()=>{
            console.log("Cleaning up...")
            clearInterval(interval);
          }
    },[])

    return <h2>Timer:{seconds} seconds</h2>

 
}

export default Timer