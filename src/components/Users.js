import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function Users() {
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    return (
        <div>
            {users.length > 0 && users.map(user => (
                {user}
            ))}

            {user.length ===0 && loading === true ? "Loading..." : null}

            {error === 0 && !loading === true ? <p>{error.message}</p> : null}

           
        </div>
    )
}


//api -length >0
//data is fullifile -- loading
// errror 


// mapStateToProps = useSelector -- user
//mapDisptachToProps = useDispatch()