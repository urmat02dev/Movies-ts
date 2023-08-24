import React from 'react';
import { useAppSelector } from '../../../types/hooks/useAppSelector';
import Card from '../Card/Card';

const Favorite = () => {
    const {favorite} = useAppSelector(state => state.normal)

    return (
        <div>
            <div className='container'>
            <h1 className='text-center'>Favorite</h1>
            <div className='flex items-center flex-wrap'>
            {favorite.map(item => (
                <Card el={item}/>
            ))}
            </div>
            <div></div>
            </div>
        </div>
    );
};

export default Favorite;