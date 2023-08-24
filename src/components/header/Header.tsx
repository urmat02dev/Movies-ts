import React from 'react';
import img from '../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg.svg';
import {FaSearch} from "react-icons/fa";
import {NavLink, useNavigate} from "react-router-dom";
import "../../App.css"
import { CiDark, CiLight } from 'react-icons/ci';
import { useAppDispatch } from '../../types/hooks/useAppDispatch';
import { useAppSelector } from '../../types/hooks/useAppSelector';
import { getLocalDark } from '../../store/ActionCreators/NormalAction';

const Header = () => {
    const dispatch = useAppDispatch()
    const nav = useNavigate()
    const  {dark} = useAppSelector(state => state.normal)
    const getDarkMode = () => {
        dispatch(getLocalDark(!dark))
    }
    const getMain = () => {
        nav("/")
    }
    console.log("Dark",dark);
    
    return (
        
        <div className={dark ? "bg-[#032541] w-full py-1" :"bg-[#000] w-full py-1 border-b " }>
            <div className="container">
                <div 
                className={"flex w-[90%] items-center py-4 justify-between 992:w-full 768:w-full"}>
                    <div className={"w-[600.63px] ml-20 my-15 flex items-center justify-between 992:w-[550px] 768:w-[400px]"}>
                        <div className={"w-[145] cursor-pointer 992:w-[135px] 768:w-[115px]"} onClick={getMain}>
                            <img src={img} alt={""} />

                        </div>
                        <div className={"max-[1366px]:w-[35 0.6px] max-[1024px]:w-[400px] max-[768px]:w-[200px] max-[450px]:w-[100px]  flex items-center justify-between"}>
                            <NavLink to={"/"}
                                     className={"text-white text-base font-[600] 992:text-sm 768:text-xs"}>
                                Главная</NavLink>
                            <NavLink to={"/popular"}
                                     className={"text-white text-base font-[600] 992:text-sm 768:text-xs"}>
                                Популярные</NavLink>
                            <NavLink to={"/top-rated"}
                                     className={"text-white text-base font-[600] 992:text-sm 768:text-xs"}>
                                Лучшие</NavLink>
                            <NavLink to={"/favorite"}
                                     className={"text-white text-base font-[600] 992:text-sm 768:text-xs"}>
                                Любимый</NavLink>
                        </div>
                    
                    </div>
                    
                    <div className={"flex items-center w-32 justify-between"}>
                    {
                            dark ? 
                            <button className='w-8'><CiDark className='text-white text-3xl 992:text-2xl' onClick={() => getDarkMode()}/></button> :
                            <button className='w-8'><CiLight className='text-white text-3xl 992:text-2xl' onClick={() => getDarkMode()}/></button>
                        }
                        <button className={"w-9 h-8 text-white border-white border rounded"}>RU</button>
                        <button className='w-7'>
                            <FaSearch className={"text-[#01B4E4] text-[22px]"}/>
                        </button>
                        
                     
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;