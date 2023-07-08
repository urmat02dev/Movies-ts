import React from 'react';
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import {Route, Routes} from "react-router-dom";
import Popular from "./components/pages/popular/Popular";
import TopRated from "./components/pages/top-rated/TopRated";
import Favorite from "./components/pages/favorite/Favorite";
import DetailPage from "./components/pages/detail-page/DetailPage";
import DetailActors from "./components/pages/detail-page/DetailActors";
import SearchResult from "./components/pages/search-result/SearchResult";

const App = () => {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/popular"} element={<Popular/>}/>
                    <Route path={"/top-rated"} element={<TopRated/>}/>
                    <Route path={"/favorite"} element={<Favorite/>}/>
                    <Route path={"/movie/:movieId"} element={<DetailPage/>}/>
                    <Route path={"/actors/actor-detail/:castId"} element={<DetailActors/>}/>
                    <Route path={"/movies/search-results/:moviesName"} element={<SearchResult/>}/>
                </Routes>
        </>
    );
};

export default App;