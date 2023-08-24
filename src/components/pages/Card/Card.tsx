import React, {useEffect} from 'react';
import {IMovies} from "../../../types/movies";
import {useAppDispatch} from "../../../types/hooks/useAppDispatch";
import {DetailMovies} from "../../../store/ActionCreators/MoviesAction";
import {useNavigate, useParams} from "react-router-dom";
import {getDetail} from "../../../store/Reducers/MoviesSlice";
import { useAppSelector } from '../../../types/hooks/useAppSelector';
import { AiFillHeart } from 'react-icons/ai';
import { getLocalFavorite } from '../../../store/ActionCreators/NormalAction';
interface IPopularCard {
    el:IMovies
}

const Card = ({el}:IPopularCard) => {
    const dispatch = useAppDispatch()
    const getFavorite = () => {
        dispatch(getLocalFavorite(el))
    }
    
    const {movieId} = useParams()
    const  {dark ,favorite} = useAppSelector(state => state.normal)
    const found = favorite.find(a => a.id === el.id)


    const nav = useNavigate()
    const getDetailPage = (el:IMovies) => {
      nav(`/movie/${el.id}`)
        dispatch(DetailMovies(el.id))
    }

    return (
        <div key={el.id} className={"max-w-[1440px]:w-[200px] h-[440px] m-3 rounded-lg border border-[#E3E3E3] 1280:w-[190px] h-[470px] 1024:w-[190px] 992:w-[185px] h-[370px]  768:w-[170px] h-[330px]" 
        + " 576:w-[200px]   xxs:w-40"
         
        }>


            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} 
            className={"rounded-t-lg 768:w-[170px] h-[245px] 576:w-full h-[230px]"}
             alt="" onClick={() => getDetailPage(el)}/>
            <h1 className={dark ? " text-black 992:text-[16px] font-bold ml-2.5 mt-4 320:text-[13px]" 
            : "text-white  992:text-[16px] font-bold ml-2.5 mt-4 320:text-[13px]"} 
            onClick={() => getDetailPage(el)}>{el.original_title}</h1>
            <div className={dark ? "text-black text-opacity-60 992:text-[15px] font-normal ml-2.5 768:text-[13px]" 
            : "text-white text-opacity-60 992:text-[15px] font-normal ml-2.5 768:text-[13px]"}>
                {el.release_date}</div>
                <div className='flex justify-end items-end mr-3'>
                {
                    found ?
                    <button className='w-[35px] h-[35px] border border-sky-900 rounded flex items-center justify-center'
                                onClick= {() => getFavorite()}
                >
                    <AiFillHeart className='text-red-500 text-xl'/>
                </button>:
                 <button className='w-[35px] h-[35px] border border-sky-900 rounded flex items-center justify-center'
                                onClick= {() => getFavorite()}
                >
                    <AiFillHeart className='text-white text-xl'/>
                </button>
                }
                </div>

        </div>
    );
};

export default Card;