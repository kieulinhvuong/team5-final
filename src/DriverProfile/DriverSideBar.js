import React from 'react';
import DriverSideBarRow from "./DriverSideBarRow";
import { Link } from "react-router-dom";

function DriverSideBar() {
    return (
        <div className="sideBar">
            <Link to = "/acceptedrequests">
                <DriverSideBarRow title="Accepted Requests" />
            </Link>
            {/* <Link to = "/savedrequests">
                <DriverSideBarRow title="Saved Requests"/>
            </Link> */}
        </div>
    );
}

export default DriverSideBar
