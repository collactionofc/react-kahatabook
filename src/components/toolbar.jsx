import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import { Golabal_Data } from './main/DataContext';

const navlink = {
    color: 'white',
    marginLeft:'10px',
    marginRight:'20px',
    marginBottom:'10px'
  };

function Toolbar(props) {
    const [data] = useContext(Golabal_Data);
    return (
        <React.Fragment>
            <nav className="mb-1 navbar navbar-expand-lg navbar-light #fafafa grey lighten-5">
                <Link style={navlink} className="navbar-brand btn btn-danger btn-rounded " to="/">Khatabook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active ">
                             <Link style={navlink} className="nav-link btn btn-outline-success btn-rounded waves-effect" to="/dashbord">Dashbord 
                                <span className="badge badge-secondary ml-2">{data.length}</span>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link style={navlink} className="nav-link btn btn-outline-success btn-rounded waves-effect" to="/recived">Recived Kare..</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={navlink} className="nav-link btn btn-outline-success btn-rounded waves-effect" to="/pay">Pay Kare..</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={navlink} className="nav-link btn btn-outline-success btn-rounded waves-effect" to="/report">Report</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item dropdown">
                            <Link className="nav-link " id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <li className="nav-item avatar">    
                                    <Link className="nav-link p-1">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-5"
                                            alt="avatar image" height="40" />
                                   
                                    </Link>
                                </li>
                      
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-default"
                                aria-labelledby="navbarDropdownMenuLink-333">
                                <Link className="dropdown-item btn btn-success" to="/profile">Profile</Link>
                                <Link className="dropdown-item btn btn-success" to="/edit" >Edit Profile</Link>
                                <Link className="dropdown-item btn btn-danger" to="/logout" >Logout</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
// () =>  <Redirect to="/" push={true} />)
export default Toolbar
