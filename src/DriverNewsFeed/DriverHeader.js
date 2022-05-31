import React from 'react';
import "./DriverHeader.css";
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, IconButton } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import KRlogo from '../Logincomponents/KRlogo.png';
import { auth } from "../firebaseconfig/fire2.js";

function DriverHeader() {
    const history = useNavigate();

    const handleLogout = () => {
        auth.signOut().then(() => history("/"));
    };

    return (
        <div className="driver_header">
            <div className="driver_header_left">
                <img id="driverheader_logo"
                src={KRlogo} alt="Knox Ride Logo"
                />

                <div className="driver_header_avatar">
                    <Link to ="/driverfeed">
                        <IconButton>
                            <Avatar src="" fontSize="large"/>
                        </IconButton>
                    </Link>
                    
                </div>
            </div>



            <div className="driver_header_center">
                <h1>KNOX RIDE</h1>
            </div> 



            <div className="driver_header_right">
                <Link to = "/acceptedrequests">
                    <IconButton >
                        <AssignmentIndIcon fontSize="large" className="driver_header_right_option"/>
                    </IconButton>
                </Link>

                <Link to ="/homepage">
                    <IconButton >
                        <PersonIcon fontSize="large" className="driver_header_right_option"/>
                    </IconButton>
                </Link>

                <button className="headerLogout_btn" onClick={handleLogout}>
                    <LogoutIcon fontSize="large" className="driver_header_right_option" />
                </button>
            </div>           
        </div>
    );
}

export default DriverHeader
