import React from 'react';
import img from '../../../assets/images/img-worlds-of-adventure.jpg';
import logo from '../../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg.svg';
const Hero = () => {
    return (
        <>
        <div className={"w-[100%]  h-[50vh] bg-no-repeat bg-cover bg-center" } style={{
            backgroundImage:`url(${img})`
        }}>

        </div>
        </>
    );
};

export default Hero;