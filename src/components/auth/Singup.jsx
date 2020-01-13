import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/login.css';
import { useSnackbar } from 'notistack';


const Singup = (props) => {
    const [error,seterror ] = useState();
    const [file,setfile ] = useState();
    const { enqueueSnackbar } = useSnackbar();
    
    const onsubmit = async (event) =>{
        event.preventDefault();
        let form_data={}

        const mydata = document.getElementById('mydata');
        const tmdata = new FormData(mydata);
        
        tmdata.forEach((value,key)=>{
            form_data[key]=value
        })
       
        try {

            const response = await  axios.post('http://localhost:4800/auth/reg', form_data, { headers: { 'Content-Type': 'application/json' }})
            console.log(response.data);
            
           if(response.status === 200){
                const formdata = new FormData();
                formdata.append('file',file);
                formdata.set('id',response.data.id);
                const fieupload = await  axios.post(`http://localhost:4800/auth/imgupload`, formdata,{ headers: { 'Content-Type': 'multipart/form-data' }})


                if(fieupload.status === 200){
                    console.log(fieupload.data)
                    enqueueSnackbar('Regstration Success Now Verified your Gmail...',{variant:'success'})
                    props.history.push('/login');
                }else{
                    console.log('errorr at image uplaod');
                }
           }

        } catch (error) {

            console.log(error)
            if(error.response.status === 400){
                const err= <div className="alert alert-danger" role="alert"> {error.response.data.error}</div>
                seterror(err);
            }
        }
      
    }

    const onDrop = (e) =>{
        setfile(e.target.files[0]);        
    }

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="myform form ">

                 <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                       <h1>Regstration</h1>
                    </div>
                 </div>
                 <form encType="multipart/form-data" id="mydata" onSubmit={onsubmit} >
                   
                            {error}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="form-control"  placeholder="Enter name" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Enter Password" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Confim Password</label>
                            <input type="password" name="cfmPassword" id="cfmPassword" className="form-control" placeholder="Enter Confim Password" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cno">Contact No</label>
                            <input type="number" name="cno" id="cno" className="form-control" placeholder="Enter Contact No" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date Of Birth</label>
                            <input type="date" name="date" id="date" className="form-control" placeholder="Enter date" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file">Date Of Birth</label>
                            <input type="file" name="file" onChange={(e) => onDrop(e)} id="file" className="form-control"></input>
                        </div>
                        <hr/>

                        <div className="col-md-12 text-center ">
                             <button type="submit" name="btnsub" className="btn btn-block mybtn btn-primary tx-tfm">Regstration</button>
                        </div>
                        <hr/>
                        <div className="form-group">
                             <p className="text-center"><Link to="/login">Login Here</Link></p>
                        </div>

                </form>
             </div>
         </div>
      </div>
    </div>
    )
}


export default Singup;