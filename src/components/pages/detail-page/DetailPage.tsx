 import React from 'react';
 import {useAppSelector} from "../../../types/hooks/useAppSelector";
 import "./Detail.css"
import { AiFillHeart } from 'react-icons/ai';
import { getLocalFavorite } from '../../../store/ActionCreators/NormalAction';
import { useAppDispatch } from '../../../types/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
const DetailPage = () => {
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    const {detail,error,loader} = useAppSelector(state => state.movies)
    const {favorite} = useAppSelector(state => state.normal)
    const {poster_path,backdrop_path,original_title,release_date,runtime,tagline,overview,vote_average} = detail
    const hours = Math.round(runtime / 60)
    const min = Math.round(runtime % 60)
    const procent = Math.round(vote_average) *10
    const getFavorite = () => {
        dispatch(getLocalFavorite(detail))
    }
    const getNav = () => {
        nav("/favorite")
    }
    const found = favorite.find(a => a.id === detail.id)

    console.log("Detail",favorite);
    
    return (
        <>
            <div id='detail-page' className={" z-10 w-full  h-[90vh] blur-[1px]  flex items-start justify-between" 
            + " flex items-center justify-between "}
                style={{
                background:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}) center/cover `
                }}/>
               <div className={"absolute left-12 top-24 pl-4 pt-4 rounded-md  z-10"}>
                   <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`} alt=""
                   className='rounded-lg w-[300px] h-[450px]'
                   />
               </div>
               <div className='absolute  left-[31%] top-32 z-50 flex items-start flex-col'>
               <h1 className='z-auto text-white'>{original_title} ({detail.release_date?.slice(0,4)})</h1>
                <div className='flex items-center text-white '>

                <h1>{release_date}</h1>
                <div></div>
                
                
                                .....
                <ul className='flex items-center'>
                    {detail &&  detail.genres && detail.genres.map((el:any) => {
                        return (<li className=''>{el.name}</li>)})
                        
                     }
                
                    </ul>
                    ....
                    <h1>{hours}h {min}m</h1>
                    
                </div>
                <div className='flex items-center'>
                <div className="details" style={{
                                    background: `conic-gradient(green ${Math.round(vote_average * 10) * 3.59}deg, green 0deg)`
                                }}>
                                    <h3>{Math.round(vote_average * 10)}%</h3>
                                </div>
                {
                    found ? 
                    <button className='w-[50px] h-[50px]  bg-sky-950 rounded-[23px] flex items-center justify-center'
                                onClick= {() => getNav()}
                >
                    <AiFillHeart className='text-red-500 text-xl'/>
                </button>:
                 <button className='w-[50px] h-[50px]  bg-sky-950 rounded-[23px] flex items-center justify-center'
                                onClick= {() => getFavorite()}
                >
                    <AiFillHeart className='text-white text-xl'/>
                </button>
                }
                </div>
                
                <p className='text-white'>{tagline}</p>
                <div className='text-white'>
                    <h1>Обзор</h1>
                    <p className='w-[70%]'>{overview}</p>
                </div>
        
               </div>
        

        </>
    );
};

export default DetailPage;