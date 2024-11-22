import React,{useEffect,useReducer} from 'react'
import axios from 'axios'
const initialState={
    loading:true,
    post:{},
    error:''
}
const reducer=(state,action)=>{
       switch (action.type){
        case'FETCH_SUCCESS':
        return {
            loading:false,
            post:action.payload,
            error:''
        }
        case 'FETCH_UNSUCCESS':
            return{
                loading:false,
                post:{},
                error:"error"
            }

            default:
                return state
              
       }
}
function FechingWithReducer() {
   const[state,dispatch]= useReducer(reducer,initialState)
   
   useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>{
       dispatch({type:'FETCH_SUCCESS',payload:res.data[0]})
    })
    .catch(error=>{
        dispatch({type:'FETCH_UNSUCCESS'})
    })
 },[])

  return (
    <div>
        {
            state.loading?"loading": state.post.title
        }
        {state.error?state.error:null}
    </div>
  )
}

export default FechingWithReducer
