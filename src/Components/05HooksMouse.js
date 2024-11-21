import React,{useState,useEffect} from 'react'

function HooksMouse() {

    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

    const logMousePosition=e=>{
        console.log("mouse position called");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("use effect called");
        window.addEventListener('mousemove',logMousePosition)
      },[]
    );

  return (
    <div>
       <h1> X-{x} Y-{y}</h1>
    </div>
  )
}

export default HooksMouse
