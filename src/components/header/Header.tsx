import React from 'react';
import img from '../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg.svg';
import {FaSearch} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import "../../App.css"

const Header = () => {
    return (
        <div className={"bg-[#032541] w-full py-1"}>
            <div className="container">
                <div className={"flex w-[90%] items-center py-4 justify-between"}>
                    <div className={"w-[600.63px] ml-20 my-15 flex items-center justify-between"}>
                        <div className={"w-[145]"}>
                            <img src={img} alt={""} />

                        </div>
                        <div className={"w-[370.6px] flex items-center justify-between"}>
                            <NavLink to={"/"}
                               className={"text-white text-base font-[600]"}>
                                Главная</NavLink>
                            <NavLink to={"/popular"}
                               className={"text-white text-base font-[600]"}>
                                Popular</NavLink>
                            <NavLink to={"/top-rated"}
                                             className={"text-white text-base font-[600]"}>
                                TopRated</NavLink>
                            <NavLink to={"/favorite"}
                               className={"text-white text-base font-[600]"}>
                                Любимый</NavLink>
                        </div>
                    </div>
                    <div className={"flex items-center w-20 justify-between"}>
                        <button className={"w-9 h-8 text-white border-white border rounded"}>RU</button>
                        <button>
                            <FaSearch className={"text-[#01B4E4] text-[22px]"}/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;