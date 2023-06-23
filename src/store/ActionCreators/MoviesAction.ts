import {AppDispatch} from "../store";
import {getMovies, getMoviesError, getMoviesSuccess} from "../Reducers/MoviesSlice";
import axios from "axios";

export const fetchMovies = () => async (dispatch:AppDispatch) =>  {
        try {
            dispatch(getMovies)
            const url =  await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=45d1d56fc54beedb6c0207f9ac6cab7c&language=en-US&page=1")
            dispatch(getMoviesSuccess(url.data.results))
            console.log(url)
        }
        catch (e:any){
            dispatch(getMoviesError(e.message))
        }
}