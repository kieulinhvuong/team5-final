import React from 'react';
import './DriverGeneralPost.css';
import { Avatar } from '@material-ui/core';
import DoneIcon from '@mui/icons-material/Done';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { getAuth } from "firebase/auth";
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "../firebaseconfig/fire2";

function DriverGeneralPost({ uid, timeStamp, name, lastName, email, phoneNumber, numberOfPassengers, pickupDate, pickupTime, pickupLocation, pickupLocation2, pickupLocation3, destination, destination2, destination3, paymentRange, notes }) {

    const handleAccept = async(e) => {
        e.preventDefault();

        try {
            const auth = getAuth();
            const user = auth.currentUser;

            const docRef = await addDoc(collection(db, 'acceptedRequests' + user.uid), {
                uid: user.uid,
                timeStamp: serverTimestamp(),
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                numberOfPassengers: numberOfPassengers,
                pickupTime: pickupTime,
                pickupLocation: pickupLocation,
                destination: destination,
                paymentRange: paymentRange,
                notes: notes,
            });
            console.log(docRef);
              
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="driverGeneralPost">

            <div className="driver_genPost_top">
                <Avatar src="" className="driver_genPost_avatar" />
                <div className="driver_genPost_topInfo">
                    <h3>{ name } { lastName }</h3>
                </div>
            </div>

            <div className="driver_genPost_bottom">

                <label>Name</label>
                <p>{ name } {lastName}</p>

                <label>Email</label>
                <p>{ email }</p>

                <label>Phone number</label>
                <p>{ phoneNumber }</p>

                <label>Number of passengers</label>
                <p>{ numberOfPassengers }</p>

                <label>Pickup date</label>
                <p>{ pickupDate }</p>

                <label>Pickup time</label>
                <p>{ pickupTime }</p>

                <label>Pickup location</label>
                <p>{ pickupLocation }, { pickupLocation2 }, { pickupLocation3 }</p>

                <label>Destination</label>
                <p>{ destination }, { destination2 }, { destination3 }</p>

                <label>Payment range</label>
                <p>{ paymentRange }</p>

                <label>Notes</label> 
                <p>{ notes }</p>

            </div>
                
            <div className="driver_genPost_options">

                <div className="driver_genPost_option">
                    <div className="driver_genPost_option">
                        <DoneIcon />
                        <p onClick={handleAccept}>Accept</p>
                    </div>
                </div>
    
            </div>
        </div>
    );
}

export default DriverGeneralPost
