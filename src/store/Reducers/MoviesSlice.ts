import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovies} from "../../types/movies";

interface IMoviesState {
    movies:IMovies[],
    loader:boolean,
    error:string,
}

const initialState:IMoviesState = {
    movies:[],
    loader:false,
    error:"",
}
export const moviesSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        getMovies (state:IMoviesState,action){
            state.loader = true
        },
        getMoviesSuccess (state:IMoviesState,action:PayloadAction<IMovies[]>){
            state.loader = false
            state.error= ""
            state.movies = action.payload
        },
        getMoviesError (state:IMoviesState,action:PayloadAction<string>){
            state.loader = false
            state.movies = []
            state.error = action.payload
        }
    }
})

export default moviesSlice.reducer
export const {getMovies, getMoviesSuccess , getMoviesError} = moviesSlice.actions