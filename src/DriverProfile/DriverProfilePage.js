import React, { useState, useEffect } from 'react'
import { db } from "../firebaseconfig/fire2";
import DriverProfileForm from "./DriverProfileForm";
import "./DriverProfilePage.css";
import DriverSideBar from "./DriverSideBar";

function DriverProfilePage() {
    const [UserProfile, setUserProfile] = useState([]);

    useEffect(() => {
        db.collection('UserProfile').get()
        .then((res) => {
            const temp1 = [];
            res.forEach((snapshot) => temp1.push(snapshot.data()));
            setUserProfile([...temp1])
        })
    }, []);

    return (
        <div className="driver_profile">
            <DriverSideBar />
            <div className="driver_profile_body">
                {UserProfile.map((UserProfile) => {
                console.log(UserProfile.fname);
                return (
                    <div>
                        <DriverProfileForm
                            fname={UserProfile.fname}
                            fname={UserProfile.lname}
                            phonenumber={UserProfile.phonenumber}
                            car={UserProfile.car}
                            license={UserProfile.license}
                        />
                    </div>
                )})}
            </div>
        </div>
    );
}

export default DriverProfilePage

