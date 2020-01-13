import React,{useEffect} from 'react'
import auth from '../../auth';
import { useSnackbar } from 'notistack';

function Logout(props) {
    const {enqueueSnackbar} = useSnackbar() 
    useEffect(()=>{
       auth.logout();
       enqueueSnackbar('Logout sucess',{variant:'error'})
       props.history.push('/');
    })
    return (
        <React.Fragment>
            <h1>Logout</h1>
        </React.Fragment>
    )
}

export default Logout
