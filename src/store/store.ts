import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./Reducers/UserSlice";
import moviesSlice from "./Reducers/MoviesSlice";

const rootReducer = combineReducers({
    user:userSlice,
    movies:moviesSlice
})
export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
    })
}

export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]