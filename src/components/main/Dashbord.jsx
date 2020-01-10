import React, { useState, useEffect ,useContext} from 'react';
import Toolbar from '../toolbar';
import MUIDataTable from "mui-datatables";
import Axios from 'axios';
import '../../css/dashbord.css';
import { Golabal_Data } from './DataContext';


export default function Dashbord() {

    // const [data, setdata] = useState([]);
  const [data, setdata,getdata] = useContext(Golabal_Data);

 

     const columns = [
      {
        name: "_id",
        label: "Transaction Id",
        options: {
          filter: false,
          sort: false,
         }
       },
       {
        name: "name",
        label: "Name",
      
       },
       {
        name: "amount",
        label: "Amount",
      
       },
       {
        name: "date",
        label: "Date",
       },
       {
        name: "type",
        label: "Type",
       },
     ];


     const options = {
       filterType: 'checkbox',

       onRowsDelete:(delrow)=>{

         const delid = [];

        delrow.data.map(element => {
          delid.push(data[element.dataIndex]._id);
        })
        const data1 = {"delid":delid}
        Axios.post('http://localhost:4800/main/delete',data1,{ headers:{ 'Content-Type': 'application/json' ,Authorization: `Bearer ${localStorage.getItem('token')}`} })
        .then((res) => (res.data) ? getdata() : console.log('not deleted') )
        .catch(err => console.log(err))

       }
    
     };

    //  const getdata = () => {
    //   Axios.get('http://localhost:4800/main',{ headers:{ 'Content-Type': 'application/json' ,Authorization: `Bearer ${localStorage.getItem('token')}`} })
    //   .then((res) => setdata(res.data.success))
    //   .catch(err => console.log(err))
    //  }

    // useEffect( () => getdata() , [])



    

    return (

        <div>
            <Toolbar />
            
               <h2 style={{marginTop: "30px",color:"#ffffff"}}  className="z-depth-1"> Welcome To Khatabook </h2>
               <div className="tbl z-depth-5 hoverable">
                  <MUIDataTable
                        title={"Employee List"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
               </div>
               
        </div>
    )
}
