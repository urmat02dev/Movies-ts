import React, {useEffect} from 'react';
import Card from "../Card/Card";
import {useAppDispatch} from "../../../types/hooks/useAppDispatch";
import {useAppSelector} from "../../../types/hooks/useAppSelector";
import {PopularMovies, TopRatedMovies} from "../../../store/ActionCreators/MoviesAction";

const TopRated = () => {
    const dispatch = useAppDispatch()
    const {movies,error,loader} = useAppSelector(state => state.movies)
    useEffect(() => {
        dispatch(TopRatedMovies())
    },[])
    console.log("TopRated",movies)
    return (
        <div >
            {loader && <p>Loading..</p>}
            {error && <p>{error}</p>}
            <div className="container">
                <div className={"flex flex-wrap w-[95%] items-center justify-center mx-10 mt-2"}>
                    {
                        movies.map(el => (
                            <Card el={el} key={el.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;