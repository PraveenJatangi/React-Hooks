import React,{useState} from 'react'

function Hcounter2() {
    const intialValue=0
    const[count,setCount]=useState(intialValue)

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
             setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div>
         
           <h1>Counter App </h1>
           <h2>count:{count}</h2>
          <button onClick={()=>setCount(intialValue)}>set to zero</button>
          <button onClick={()=>setCount(count+1)}> increament</button>
          <button onClick={()=>setCount(count-1)}> decrement </button>
          <button onClick={incrementFive}> increase Five</button>
    </div>
  )
}

export default Hcounter2
