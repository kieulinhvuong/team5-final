import React, { useState, useEffect } from 'react'
import "./AcceptedRq.css";
import AcceptedForm from "./AcceptedForm";
import { db } from "../firebaseconfig/fire2";
import { getAuth } from "firebase/auth";

function AcceptedRq() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [acceptedRequests, setAcceptedRequests] = useState([]);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                db.collection('acceptedRequests' + user.uid)
                    .orderBy("timeStamp", "desc")
                    .get()
                    .then((res) => {
                        const rq = [];
                        res.forEach((snapshot) => rq.push(snapshot.data()));
                        console.log(rq);
                        setAcceptedRequests([...rq])   
                    })
            } else {
                console.log('user is not logged in');
            }
        })

    }, []);

    return (
        <div className="driver_feed">
            <h2>Your Ride(s)</h2>
            <div className="driver_feed_body">
                {acceptedRequests.map((acceptedRequests) => {
                return (
                    <div>
                        <AcceptedForm
                            name={acceptedRequests.name}
                            lastName={acceptedRequests.lastName}
                            email={acceptedRequests.email}
                            phoneNumber={acceptedRequests.phoneNumber}
                            numberOfPassengers={acceptedRequests.numberOfPassengers}
                            vehicles={acceptedRequests.vehicles}
                            pickupTime={acceptedRequests.pickupTime}
                            pickupLocation={acceptedRequests.pickupLocation}
                            pickupLocation2={acceptedRequests.pickupLocation2}
                            pickupLocatio3={acceptedRequests.pickupLocatio3}
                            destination={acceptedRequests.destination}
                            destination2={acceptedRequests.destination2}
                            destination2={acceptedRequests.destination3}
                            paymentRange={acceptedRequests.paymentRange}
                            notes={acceptedRequests.notes}
                        />
                    </div>
                )})}
            </div>
            
        </div>
    )
}

export default AcceptedRq






