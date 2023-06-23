import React from 'react';
import {IMovies} from "../../../types/movies";
interface IPopularCard {
    el:IMovies
}
const PopularCard = ({el}:IPopularCard) => {
    return (
        <div key={el.id}>
            <h1>{el.title}</h1>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.backdrop_path}`} alt=""/>
        </div>
    );
};

export default PopularCard;