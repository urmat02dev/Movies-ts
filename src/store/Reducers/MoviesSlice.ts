import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovies} from "../../types/movies";

interface IMoviesState {
    movies:IMovies[],
    loader:boolean,
    error:string,
    detail:Partial<IMovies>
}

const initialState:IMoviesState = {
    movies:[],
    loader:false,
    error:"",
    detail:{}
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
        },
        getDetail(state,){
            state.loader = true
        },
        getDetailSuccess (state:IMoviesState,action:PayloadAction<IMovies>){
            state.loader = false
            state.error= ""
            state.detail = action.payload
        },
        getDetailError (state:IMoviesState,action:PayloadAction<string>){
            state.loader = false
            state.movies = []
            state.error = action.payload
        },
    }
})

export default moviesSlice.reducer
export const {getMovies, getMoviesSuccess , getMoviesError,getDetail,getDetailSuccess,getDetailError} = moviesSlice.actions