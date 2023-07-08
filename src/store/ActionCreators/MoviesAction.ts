import {AppDispatch} from "../store";
import {
    getDetail,
    getDetailError,
    getDetailSuccess,
    getMovies,
    getMoviesError,
    getMoviesSuccess
} from "../Reducers/MoviesSlice";
import axios from "axios";
import {APIKEY, lang, page} from "../../components/apikey/ApiKey";

export const PopularMovies = () => async (dispatch:AppDispatch) =>  {
        try {
            dispatch(getMovies)
            const url =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}&page=${page}`)
            dispatch(getMoviesSuccess(url.data.results))
            console.log(url)
        }
        catch (e:any){
            dispatch(getMoviesError(e.message))
        }
}
export const TopRatedMovies = () => async (dispatch:AppDispatch) =>  {
    try {
        dispatch(getMovies)
        const url =  await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${lang}&page=${page}`)
        dispatch(getMoviesSuccess(url.data.results))
        console.log(url)
    }
    catch (e:any){
        dispatch(getMoviesError(e.message))
    }
}
export const DetailMovies = (id: number) => async (dispatch:AppDispatch) =>  {
    try {
        dispatch(getDetail)
        const url =  await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=${lang}`)
        dispatch(getDetailSuccess(url.data))
        console.log(url)
    }
    catch (e:any){
        dispatch(getDetailError(e.message))
    }
}