import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { editMovie, remove } from '../app/movieSlice';
import { useState } from 'react';





function MovieCard({film}) {
  
  const [description , setDescription]=useState('');
  const [show , setShow ] = useState(false);

  const handelEdit =()=>{
    setShow(!show)
  }
  
  const dispatch= useDispatch();
  
  
  
  
  
  
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Title>{film.description}</Card.Title>
        <Card.Text>
        {film.isDone}
        </Card.Text>
        <Button variant="primary" onClick={() =>dispatch(remove(film.id))}>remove</Button>
        {show ? <div>
          <input type='text' placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={() => dispatch(editMovie({ id:film.id, description }))}>finish</button>
        </div>: null}
        <button onClick={()=>handelEdit()}>edit</button>
            
         
           </Card.Body>
           
    </Card>
    </div>
  );
}

export default MovieCard;