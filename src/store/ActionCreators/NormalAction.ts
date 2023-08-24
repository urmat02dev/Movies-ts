import { IMovies } from "../../types/movies";
import { getDark, getFavorite } from "../Reducers/NormalSlice";
import { AppDispatch } from "../store";

 

export const getLocalDark = (dark:any) => (dispatch:AppDispatch) => {
  const task:any = localStorage.getItem("dark") 
  let mode = JSON.parse(task) 
  mode = dark
  localStorage.setItem("dark", JSON.stringify(mode))
  dispatch(getDark(dark))
}

export const getLocalFavorite = (el:any) => (dispatch:AppDispatch) => {
  const favorite:any = localStorage.getItem("favorite") 
  let local = JSON.parse(favorite) 
  const found = local.find((e:any) => e.id === el.id) 
  if(found){
    local = local.filter((e:IMovies) => e.id!== el.id)
  }else{
    local = [...local, {...el}]
  }
  localStorage.setItem("favorite", JSON.stringify(local))
  dispatch(getFavorite(el))
}