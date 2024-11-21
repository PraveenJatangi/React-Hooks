import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Fetching() {
    const[post,setPost]=useState({})
    const[id, setId]=useState(1)
    const[idFromButtonClick , setidFromButtonClick]=useState(1)
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then((res)=>{
          console.log(res)
          setPost(res.data)
       })
       .catch(error=>{
         console.log(error)
       })
    },[idFromButtonClick])
   
    const handler=()=>{
      setidFromButtonClick(id)
    }

  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <button onClick={handler}>fetch data</button>
       {/* <ul>
        {
            post.map( item=>(
                 <li key={item.id}>
                  {item.title}
                 </li>
            ))
        }
       </ul> */}
       <h1>{post.title}</h1>
    </div>
  )
}

export default Fetching
