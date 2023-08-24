import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovies } from "../../types/movies";
interface INormalSlice {
  dark:boolean
  favorite:IMovies[] 
}
const darkLocal:any = localStorage.getItem("dark");
const favoriteLocal:any = localStorage.getItem("favorite");
console.log(".",favoriteLocal)
const initialState:INormalSlice = {
  dark:JSON.parse(darkLocal) || false,
  favorite:JSON.parse(favoriteLocal) ||[]
}



export const NormalSlice = createSlice({
  name: 'normal',
    initialState,
    reducers:{
      getDark: (state, action:PayloadAction<boolean>) => {
        state.dark = action.payload
      },
      getFavorite(state, action:PayloadAction<any>) {
        console.log("ll",state.favorite)
        const found = state.favorite.find(a => a.id === action.payload.id)
        if(found) {
          state.favorite = state.favorite.filter(a => a.id!== action.payload.id)
        } else {  
        state.favorite.push(action.payload)
      }
      },
    }
})


export const {getDark,getFavorite} = NormalSlice.actions

export default NormalSlice.reducer