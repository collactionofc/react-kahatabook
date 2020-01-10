import React,{useEffect} from 'react'
import auth from '../../auth';

function Logout(props) {
    useEffect(()=>{
       auth.logout();
       props.history.push('/');
    })
    return (
        <div>
            <h1>Logout</h1>
        </div>
    )
}

export default Logout
