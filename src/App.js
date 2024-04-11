import MovieList from "./component/movieListe";
import AddMovie from "./component/addMovie";
import Filter from "./component/movieFilter";
import { useState } from "react";
import { movieData } from "./data";




const App=()=>{
 
  return(
    <div>
      
    
      <Filter/>
      <AddMovie/>
<MovieList/>
    </div>
  )
}
export default App;