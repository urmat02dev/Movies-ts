import {AppDispatch} from "../store";
import {userFetch, userFetchError, userFetchSuccess} from "../Reducers/UserSlice";
import axios from "axios";
import {IUser} from "../../types/user";

export const fetchUser = () => async (dispatch  : AppDispatch) =>  {
    try {dispatch(userFetch())
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users/")
        dispatch(userFetchSuccess(response.data))
    }
    catch (e: any) { dispatch(userFetchError(e.message)) }
}