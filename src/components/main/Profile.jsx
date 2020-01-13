import React, { useEffect, useState } from 'react';
import Toolbar from '../toolbar';
import Axios from 'axios';
import '../../css/profile.css';



export default function Profile(props) {

    const [data, setdata] = useState();

    const handlechage = (tfile) =>{
        const file = new FormData();
        file.append('img',tfile);
        Axios.post('http://localhost:4800/changeimg',file ,{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then(res => {
            alert(res.data.success);
        })
        .catch(err =>  alert(err) );
    }

    useEffect(() => {
        Axios.get('http://localhost:4800/profile', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                setdata(res.data.profile)
            })
            .catch((err) => { alert(err) ;props.history.push('/') });

    }, [])


    if (data === undefined) {
        return (
            <h1>Loading....</h1>
        )
    }


    return (
        <React.Fragment>
            <Toolbar />
            
            <div className="container emp-profile">

                <div className="row">

                    <div className="col-md-4"></div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5> {data.name} </h5>
                            <h6> Web Developer and Designer </h6>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <input  onClick={()=> props.history.push('/edit') } className="profile-edit-btn btn" value="Edit Profile" type="button" />
                    </div>

                </div>


                <div className="row colmar">

                    <div className="col-md-4">
                        <div className="profile-img">
                            <img className="z-depth-5" src={ require(`/home/nr/Documents/node js/auth/uploads/${data.imgpath}` )} alt="no found" />
                            <div className="file btn btn-lg btn-primary z-depth-3">
                                Change Photo
                                <input type="file" name="file" onChange={(e) => handlechage(e.target.files[0])} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 profile-tab">


                        <div className="row">
                            <div className="col-md-6">
                                <label>User Id</label>
                            </div>
                            <div className="col-md-6">
                                <p>{data._id}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Name</label>
                            </div>
                            <div className="col-md-6">
                                <p>{data.name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Email</label>
                            </div>
                            <div className="col-md-6">
                                <p>{data.email}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Phone</label>
                            </div>
                            <div className="col-md-6">
                                <p>{data.cno}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Date Of Birth</label>
                            </div>
                            <div className="col-md-6">
                                <p>{data.dob}</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
