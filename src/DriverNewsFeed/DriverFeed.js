import React, { useState, useEffect } from 'react';
import "./DriverFeed.css";
import DriverGeneralPost from "./DriverGeneralPost";
import { db } from "../firebaseconfig/fire2";

function DriverFeed() {
    const [userRequest, setUserRequest] = useState([]);

    useEffect(() => {
        
        db.collection('userRequest')
            .orderBy("timeStamp", "desc")
            .get()
            .then((res) => {
                const temp = [];
                res.forEach((snapshot) => temp.push(snapshot.data()));
                console.log(temp);
                setUserRequest([...temp])   
            })
        
    }, []);

    return (
        <div className="driver_feed">
            <div className="driver_feed_body">
                {userRequest.map((userRequest) => {
                return (
                    <div>
                        <DriverGeneralPost
                            name={userRequest.name}
                            lastName= {userRequest.lastName}
                            email={userRequest.email}
                            phoneNumber={userRequest.phoneNumber}
                            numberOfPassengers={userRequest.numberOfPassengers}
                            pickupDate= {userRequest.pickupDate}
                            pickupTime={userRequest.pickupTime}
                            pickupLocation={userRequest.pickupLocation}
                            pickupLocation2={userRequest.pickupLocation2}
                            pickupLocation3={userRequest.pickupLocation3}
                            destination={userRequest.destination}
                            destination2={userRequest.destination2}
                            destination3={userRequest.destination3}
                            paymentRange={userRequest.paymentRange}
                            notes={userRequest.notes}
                        />
                    </div>
                )})}
            </div>
        </div>
    );
}
export default DriverFeed
