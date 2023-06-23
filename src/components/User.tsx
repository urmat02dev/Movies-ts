import React, {useEffect} from 'react';
import {useAppSelector} from "../types/hooks/useAppSelector";
import {useAppDispatch} from "../types/hooks/useAppDispatch";
import {fetchUser} from "../store/ActionCreators/UserAction";


const User = () => {
    const dispatch = useAppDispatch()
    const {user,loader,error}  = useAppSelector(s => s.user)
useEffect(() => {
    dispatch(fetchUser())
} ,[])
    return (
        <div>
            {loader && <p>Loading..</p>}
            {error && <p>{error}</p>}
            {
                user.map(el => (
                    <div key={el.id}>
                        <h3>{el.name}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default User;