import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios';

export const Golabal_Data = createContext();


export function DataContext(props) {
    const [data, setdata] = useState([]);
    
    const getdata = () => {
            Axios.get('http://localhost:4800/main', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then((res) => setdata(res.data.success))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata();
    }, [])

  useEffect(()=>{
    console.log('Data Changed..');
  },[data])

    return (
        <React.Fragment>
            <Golabal_Data.Provider value={[data, setdata, getdata]}>
                {props.children}
            </Golabal_Data.Provider>
        </React.Fragment>
    )
}

