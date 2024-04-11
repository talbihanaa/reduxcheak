import { createSlice } from "@reduxjs/toolkit";
import { movieData } from "../data";
import Filter from "../component/movieFilter";
import { useState } from "react";

let data = {
    movieData
}

const movieSlice = createSlice({
    name: "workshop",
    initialState: data,
    reducers: {
        addNewMovie: (state, action) => {
            state.movieData.push(action.payload);
        },
        movieFilter: (state, action) => {
            state.movieData = state.movieData.filter((item) => {
                return item.title.toLowerCase().includes(action.payload);
            });
        },
        remove: (state, action) => {
            state.movieData = state.movieData.filter((item) => {
                return item.id !== action.payload;
            });
        },
        editMovie:(state, action)=>{
            state= state.movieData.map((item)=>{
                if(item.id === action.payload.id){
                    item.description = action.payload.description                                             
                }
            })
        }
    }
});

export const { addNewMovie, movieFilter, remove, editMovie } = movieSlice.actions;
export default movieSlice.reducer;
