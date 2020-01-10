import React, { useState, useEffect } from 'react';
import Toolbar from '../toolbar';
import axios from 'axios';



const Pedit = (props) => {

    const [error, seterror] = useState();

    const onsubmit = async (event) => {
        event.preventDefault();
        let json_data = {}

        const formid = document.getElementById('formid');
        const formonj = new FormData(formid);

        formonj.forEach((value, key) => {
            json_data[key] = value
        })

        try {
            const response = await axios.post('http://localhost:4800/reset', json_data, { headers: { 'Content-Type': "application/json", Authorization: `Bearer ${localStorage.getItem('token')}` } })

            if (response.status === 200) {
                alert(response.data.success);
                props.history.push('/profile');
            }

        } catch (error) {

            if (error.response.status === 400) {
                const err = <div className="alert alert-danger" role="alert"> {error.response.data.error}</div>
                seterror(err);
            }
        }

    }



    return (
        <div>
            <Toolbar />
            <div className="container">
            
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="myform form ">

                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Regstration</h1>
                                </div>
                            </div>
                            <form encType="multipart/form-data" id="formid" onSubmit={onsubmit} >

                                {error}
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Enter name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Old Password</label>
                                    <input type="password" name="oldpassword" id="password" className="form-control" placeholder="Enter Password" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">New Password</label>
                                    <input type="password" name="newPassword" id="cfmPassword" className="form-control" placeholder="Enter Confim Password" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cno">Contact No</label>
                                    <input type="number" name="cno" id="cno" className="form-control" placeholder="Enter Contact No" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="date">Date Of Birth</label>
                                    <input type="date" name="date" id="date" className="form-control" placeholder="Enter date" required />
                                </div>

                                <hr />

                                <div className="col-md-12 text-center ">
                                    <button type="submit" name="btnsub" className="btn btn-block mybtn btn-primary tx-tfm">Update Profile</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Pedit
