import React from 'react'
import "./DriverSideBarRow.css";

function DriverSideBarRow({ title }) {
    return (
        <div className="driverSideBarRow">
            <button>{ title }</button>
        </div>
    );
}

export default DriverSideBarRow;
