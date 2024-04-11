import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";



export default configureStore({
    reducer: {
    Movie: movieReducer ,
    }
})