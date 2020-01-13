import React , {useState } from 'react';
import { Link } from 'react-router-dom';
import  Auth  from '../../auth';
import axios from 'axios';
import '../../css/login.css';
import { useSnackbar } from 'notistack';

const Login = (props) => {

    const [emaildata,setemaildata] = useState(null);
    const [passdata,setpassdata] = useState(null);
    const [error,seterror] = useState(null);
    const { enqueueSnackbar } = useSnackbar();


    const onchange = async (e)=>{
        if([e.target.name] == "email")  setemaildata(e.target.value); 
        if([e.target.name] == "password") setpassdata(e.target.value);
    }

    const getlogin = async (e)=>{
        e.preventDefault();  
        
        try {

            const response = await axios.post( 'http://localhost:4800/auth/login',{ email: emaildata,password:passdata },{ headers: { 'Content-Type': 'application/json' } })
            localStorage.setItem('token',response.data.token);
            Auth.login(()=>{
                Auth.token = response.data.token;
                enqueueSnackbar('Login Success',{variant:'success'})
                props.history.push('/dashbord');
            })

        } catch (error) {
            console.log(error)
            if(error.response.status === 400){
                console.log(error.response.data)
                const err= <div className="alert alert-danger" role="alert"> {error.response.data.error}</div>
                seterror(err);
            }
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto">
                  <div className="myform form ">
                     <div className="logo mb-3">
                        <div className="col-md-12 text-center">
                           <h1>Login</h1>
                        </div>
                     </div>
                     <form name="loginform" onChange={ (e) =>{  onchange(e) }} onSubmit={ (e) =>{  getlogin(e) }}>
                        <div className="form-group">
                                        {error}

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="email" id="name"  className="form-control" aria-describedby="emailHelp" placeholder="Enter name" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" required/>
                            </div>

                            <div className="form-group">
                                <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                            </div>

                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" name="btnlogin">Login</button>
                            </div>

                                <br/><hr/>
                            <div className="form-group">
                                <p className="text-center">Don't have account? <Link to="/singup" >Sign up here</Link></p>
                            </div>
                        </div>
                    </form>
                 </div>
             </div>
          </div>
        </div>
    )
}

export default Login; 