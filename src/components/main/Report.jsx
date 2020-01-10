import React,{useContext, useState} from 'react';
import Toolbar from '../toolbar';
import { Golabal_Data } from './DataContext';

function Report() {
    const context = useContext(Golabal_Data);
    return (
        <div>
            <Toolbar/>
            <h1>Report Works!</h1>
            <button onClick={()=> console.log(context)}>Click</button>
        </div>
    )
}

export default Report
