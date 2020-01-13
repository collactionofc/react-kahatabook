import React from 'react'
import { Route,Redirect } from 'react-router-dom';
import  auth  from '../../auth';

export const Protected = ({component :Component,...rest}) => {
    return (
        <Route
            {...rest}
            render={
                (props)=>{

                    if(auth.checkauth() === true && localStorage.getItem('token') && auth.token === localStorage.getItem('token')){
                        return <Component {...props}/> 
                    }
                    else{
                        return <Redirect to={{
                            pathname:"/",
                            state:{
                                from: props.location
                            }
                        }}/>
                    }
                }
            }
        />
    )
}
