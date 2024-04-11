import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addNewMovie } from '../app/movieSlice'; 


const AddMovie =()=>{
    const [titre , setTitre]=useState('');
    const [desc , setDesc]=useState('');

    const [done , setDone]=useState('');
    const dispatch = useDispatch();
    

    let newMovie = {
        id: Date.now(),
        title:titre,
        description:desc,
        isDone: Boolean(done),
    }
    const inputStyle = {
        
      margin:20,
        padding: 8,
        fontSize: 16,
        borderRadius: 4,
        border: '1px solid #ccc',
        marginBottom: 10,
        width:300,
        heigth:100,
        
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: 16,
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: 4,
        border: 'none',
        cursor: 'pointer',
    };
   
    return(
     <div>
        <input style={inputStyle} type="text" placeholder="title" onChange={(e)=>setTitre(e.target.value)}/>

        <label>description</label>
        <textarea style={inputStyle}  rows={5} cols={10} onChange={(e)=>setDesc(e.target.value)}></textarea>
        <input style={inputStyle}  type="text" placeholder="isDone" onChange={(e)=>setDone(e.target.value)}/>
        <button  style={buttonStyle}  onClick={()=>dispatch(addNewMovie(newMovie))}>Add</button>
     </div>
    )
}
export default AddMovie;