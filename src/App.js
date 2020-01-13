import React from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';


//css files...
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  SnackbarProvider } from 'notistack';

import "./App.css";

//componantes.
import Login from './components/auth/Login';
import Singup from './components/auth/Singup';
import {Protected}  from './components/auth/Protected';

import Profile from './components/main/Profile';
import Dashbord from './components/main/Dashbord';
import Pay from "./components/main/Pay";
import Recived from "./components/main/Recived";
import Logout from './components/auth/Logout';
import Report from './components/main/Report';
import Pedit from './components/main/Pedit'
import { DataContext } from './components/main/DataContext';

function App() {
  return (
    <div className="App">
  
      <Router>
        <Switch>
        <SnackbarProvider maxSnack={3} anchorOrigin={{  vertical: 'top', horizontal: 'center' }}>

         <Route exact path="/"  component={Login} />

          <Route exact path="/login" component={Login} />
          <Route  exact path="/singup" component={Singup}  />

          <DataContext>
              <Protected exact path="/profile" component={Profile}/>
              <Protected exact path="/dashbord" component={Dashbord} />
              <Protected exact path="/pay" component={Pay} />
              <Protected exact path="/recived" component={Recived} />
              <Protected exact path="/report" component={Report} />
              <Protected exact path="/edit" component={Pedit} />
            <Protected exact path="/logout" component={Logout} />
          
          </DataContext>
          </SnackbarProvider>

          <Route path="*" component={ () => <h1>Page not Found</h1>} />

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
