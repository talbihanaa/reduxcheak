import { useState } from "react";
import { useDispatch } from "react-redux";
import { movieFilter } from "../app/movieSlice";




const Filter = () =>{
    const dispatch = useDispatch();
    const [filtred , setFiltred]= useState('');
    const handelChange =(e)=>{
        setFiltred(e.target.value);
        dispatch(movieFilter(filtred))
      }
    const inputStyle = {
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '10px',
      
    };
    return(
        <div> 
        <input style={inputStyle}  type="text" placeholder="search" onChange={(e)=>handelChange(e)}/>
      
        </div>
    )
}
export default Filter;