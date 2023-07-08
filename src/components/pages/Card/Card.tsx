import React, {useEffect} from 'react';
import {IMovies} from "../../../types/movies";
import {useAppDispatch} from "../../../types/hooks/useAppDispatch";
import {DetailMovies} from "../../../store/ActionCreators/MoviesAction";
import {useNavigate, useParams} from "react-router-dom";
import {getDetail} from "../../../store/Reducers/MoviesSlice";
interface IPopularCard {
    el:IMovies
}

const Card = ({el}:IPopularCard) => {
    const dispatch = useAppDispatch()
    const {movieId} = useParams()
    const nav = useNavigate()
    const getDetailPage = (el:IMovies) => {
      nav(`/movie/${el.id}`)
        dispatch(DetailMovies(el.id))
    }
    useEffect(() => {

    },[])
    console.log("Movioid",movieId)
    console.log("Movioid",el)
    return (
        <div key={el.id} className={"w-[200px] h-[390px] m-3 rounded-lg border border-[#E3E3E3]"}>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} className={"rounded-t-lg"} alt="" onClick={() => getDetailPage(el)}/>
            <h1 className=" text-black text-[16px] font-bold ml-2.5 mt-4" onClick={() => getDetailPage(el)}>{el.original_title}</h1>
            <div className="text-black text-opacity-60 text-[16px] font-normal ml-2.5">{el.release_date}</div>

        </div>
    );
};

export default Card;