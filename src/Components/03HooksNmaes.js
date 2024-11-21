import React,{useState} from 'react'

function HooksNmaes() {
   
     const [name,setName]=useState({firstName:'',lastname:''});
  return (
    <div>
      <form>
     <   input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
     <   input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
       <h1>firstName is - {name.firstName}</h1>
       <h1>firstName is - {name.lastname}</h1>
       
      </form>
    </div>
  )
}

export default HooksNmaes
