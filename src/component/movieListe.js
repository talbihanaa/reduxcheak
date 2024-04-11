import { useSelector } from "react-redux";
import MovieCard from "./movieCard";

const MovieList =({movieData, remove})=>{
    const listStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop:20
      };
    
    let movies =useSelector((state)=>state.Movie.movieData)
    console.log(movies);
    return(
        
            <div style={listStyle}>
      {movies.map((item, index) => (
        <MovieCard film={item} key={index} remove={remove} />
      ))}
    </div>
           
    )
}

export default MovieList;