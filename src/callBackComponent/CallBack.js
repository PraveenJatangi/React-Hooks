import React,{useState,useCallback} from 'react'
import Title from './title'
import Button from './button'
import Count from './count'




function CallBack() {
    const[age,setAge]=useState(25)
    const[salary,setSalary]=useState(20000)
   
    const incrementSalary=useCallback(()=>{
        setSalary((s)=>s+1000)
    },[salary])
    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])

  return (
    <div>
      <Title/>
      <Count text="Age" count={age}/>
      <Button handleClick={incrementAge}>Icrement Age </Button>
      <Count text="salary" count={salary}/>
      <Button handleClick={incrementSalary}>Icrement Salary </Button>
  
    </div>
  )
}

export default CallBack
