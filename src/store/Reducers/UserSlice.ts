import {IUser} from "../../types/user";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
    user : IUser[]
    loader:boolean
    error:string | null
}
const initialState:IUserState = {
    user:[],
    loader:false,
    error:"",
}

export const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        userFetch(state){
         state.loader = true
        },
        userFetchSuccess(state,action:PayloadAction<IUser[]>){
            state.loader = false
            state.user = action.payload
            state.error = ""
        },
        userFetchError(state,action:PayloadAction<string>){
            state.loader = false
            state.user = []
            state.error = action.payload
        }
    }
})

export default userSlice.reducer
export const {userFetch, userFetchSuccess, userFetchError} = userSlice.actions
