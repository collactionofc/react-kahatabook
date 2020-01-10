import 'date-fns';
import React, { useState,useContext } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Grid , TextField , Divider } from '@material-ui/core';
import { useForm } from 'react-hook-form';  
import Axios from 'axios';

import Toolbar from "../toolbar";
import { Golabal_Data } from './DataContext';


const Pay = (props)=>{

    const [selectedDate, setSelectedDate] = useState();
    const [,,getdata] = useContext(Golabal_Data);

    const {register,handleSubmit} = useForm();

    // let data={};

    const submit = (data) => {
        // e.preventDefault();
        // const mydata = document.getElementById('payform');

        // const tmdata = new FormData(mydata);
        // tmdata.forEach((value,key)=>{
        //     data[key]=value
        // })
        setSelectedDate(data);
        console.log(selectedDate)
        // data["type"]="debit";

        // Axios.post('http://localhost:4800/main',data,{ headers:{ 'Content-Type': 'application/json' ,Authorization: `Bearer ${localStorage.getItem('token')}`} })
        // .then(() => {
        //     getdata();
        //     props.history.push('/dashbord');
        //     alert('Transaction Successfully ');
        // })
        // .catch(err => console.log(err))
    }
   
    
    


    return (
        <div>
            <Toolbar/>
            <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Dedit Amount</h1>
                                        <br /><Divider />

                                    </div>
                                </div>

                                <form id="payform" autoComplete="off" onSubmit={handleSubmit(submit)}>
                                    <div className="form-group">

                                        <div className="form-group">
                                            <TextField  name="amount" ref={register} label="Enter Dedit Amount" variant="outlined" />
                                        </div>
                                        <hr />
                                        <div className="form-group">                       
                                            <TextField  name="name" ref={register} label="Enter Name Dedit " variant="outlined" />
                                              
                                        </div>
                                        <Divider />
                                        <div className="form-group">
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <Grid container justify="space-around">
                                                    <KeyboardDatePicker
                                                        disableToolbar
                                                        variant="inline"
                                                        format="MM/dd/yyyy"
                                                        name="date"
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Date Of Transaction"
                                                        value={new Date()}
                                                        onChange={(date)=>setSelectedDate(date)}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                    />
                                                </Grid>
                                            </MuiPickersUtilsProvider>
                                        </div>
                                        <hr />
                                        <div className="col-md-12 text-center ">
                                            <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" name="btnlogin">Credit</button>
                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Pay
