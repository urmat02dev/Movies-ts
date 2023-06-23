import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../types/hooks/useAppDispatch";
import {useAppSelector} from "../../../types/hooks/useAppSelector";
import {fetchMovies} from "../../../store/ActionCreators/MoviesAction";
import PopularCard from "./PopularCard";

const Popular = () => {
    const dispatch = useAppDispatch()
    const {movies,error,loader} = useAppSelector(state => state.movies)
    useEffect(() => {
        dispatch(fetchMovies())
    },[])
    console.log(movies)
    return (
        <div >
            {loader && <p>Loading..</p>}
            {error && <p>{error}</p>}
            {
                movies.map(el => (
                    <PopularCard el={el}/>
                ))
            }
        </div>
    );
};

export default Popular;